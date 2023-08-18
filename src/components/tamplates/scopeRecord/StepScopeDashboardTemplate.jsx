//Dependencies
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
//Components
import { ButtonTypeA } from '../../../components/molecules/buttons/buttonTypeA/ButtonTypeA';
import { EmisionesTable } from '../../../components/organisms/tables/EmisionesTable';
import { ModalAddCategories } from '../../organisms/modals/ModalAddCategories';
import { SedeInfo } from '../../../components/organisms/sedeInfo/SedeInfo';
import Modal from '../../organisms/modals/Modal';
//Assets
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext';
//Redux
import { useAppDispatch } from '../../../redux/store';
//Actions
import { deleteEmissionsAction, updateCalculationAction, updateEmissionsAction } from '../../../redux/actions/RegisterAction';

const { office_Azul, DeleteElement } = Illustrations; //Illustrations

export const StepScopeDashboardTemplate = () => {

  const dispatch = useAppDispatch(); // Dispatch de acciones de Redux

  const navigate = useNavigate(); // hook para navegar entre páginas //Inicializamos el hook de navegación

  // Obtenemos el estado del registro del store de Redux
  const { register: { directEmissions, inDirectEmissions, otherEmissions, firstStep, centerCurrent, calculations } } = useSelector(state => state.persistedData);

  const { resetPage } = useContext(NavigateAppContext);

  const [textAlert, setTextAlert] = useState(null);

  // Comportamiento de Modal para confirmacion de delete.
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  // Comportamiento de Modal para seleccion de categorias.
  const [openModal, setOpenModal] = useState(false)

  // Función para abrir el modal de añadir nueva categoria.
  const handleOpenModal = (emissions, selected) => {
    filterEmisionsToModal(emissions, selected)
    setOpenModal(true)
  }
  const [typeId, setTypeId] = useState(0) //tipo de emisiones seleccionadas.
  const [idToDelete, setIdToDelete] = useState(null) //Id seleccionado para el delete.
  const [modalEmisions, setModalEmisions] = useState([]) //Estado local para setear las emisiones a mostrar en el modal de añadir nueva categoria.
  const [emissionsScope, setEmissionsScope] = useState([]); //Estado local para setear las emisiones a mostrar en el modal de añadir nueva categoria.
  const [dataRender, setDataRender] = useState(null); //Estado local para setear la respuesta total de la consulta de la API render.

  const handleUpdateEmisions = () => {
    const data1 = modalEmisions.filter((emision) => emision?.isChecked).map((emision) => emision.id)
    const data2 = emissionsScope.filter((emision) => emision?.tipo !== typeId).map((emision) => emision.id)
    const allEmisions = [...data2, ...data1];
    const emisionesToPutIds = Array.from(new Set(allEmisions.map((emision) => emision))); // Eliminar duplicados
    putSelectedEmisions(emisionesToPutIds);
  }


  const confirmDeleteEmision = async () => {
    const { error, verify } = await dispatch(deleteEmissionsAction(idToDelete)); //Eliminamos la emision seleccionada.
    if (error) return setTextAlert(error);
    verify && setOpenDeleteModal(false), updateSelectedEmisions();
  }

  const updateSelectedEmisions = async () => {
    const { data, error, verify } = await dispatch(updateEmissionsAction(calculations.id)); //Actualizamos las emisiones seleccionadas.
    if (!verify) return;
    console.log(data, 'data')
    setEmissionsScope(data.emissions)
    setDataRender(data)
  };

  const putSelectedEmisions = async (emisionesToPut) => {
    const { data, error, verify } = await dispatch(updateCalculationAction(emisionesToPut)); //Actualizamos las emisiones seleccionadas.
    if (!verify) return;
    updateSelectedEmisions()
    setOpenModal(false)

  };

  const filterEmisionsToModal = (emissions, selected) => {
    const newArray = emissions.map((emision) => {
      const isSelected = selected?.some((selectedEmision) => selectedEmision?.id === emision?.id)
      return {
        ...emision,
        name: emision?.nombre,
        id: emision?.id,
        isChecked: isSelected ? true : false,
      }
    })
    setModalEmisions(newArray)
  };


  useEffect(() => {
    calculations && updateSelectedEmisions();
  }, [calculations])

  useEffect(() => {
    !centerCurrent && resetPage();
  }, [centerCurrent])

  const handleNavigate = (empresaId, state) => {

    const url = `/app/resultados/empresa/${empresaId}`;

    // Utiliza el hook useNavigate para realizar la navegación a la URL deseada
    // y pasar el estado como parte de la navegación.
    navigate(url, { state });
  }

  return (
    <div className='StepScopeDashboardPage bg-primary-gris1 min-h-full pt-10'>
      <div className='ContenedorCompleto w-[90%] max-w-[1400px] min-w-[900px] mb-12 mx-auto'>
        <div className='flex justify-between'>
          <SedeInfo icon={office_Azul} name={centerCurrent?.nombre} subName={`${firstStep?.startDate?.replace(/-/g, "/")} - ${firstStep?.endDate?.replace(/-/g, "/")}`} />
          <ButtonTypeA text='Medir huella de carbono' bgColor='#FE5000' txColor='#FFFFFF' bdWidth='0px' bgHvColor='#E6500B' submitBtn={false} action={() => handleNavigate(centerCurrent?.nombre, dataRender)} />
        </div>
        <EmisionesTable
          emisiones={emissionsScope.filter((emision) => emision?.tipo === 1)}
          handleOpenConfirmationModal={() => setOpenDeleteModal(true)}
          handleOpenModal={() => handleOpenModal(directEmissions, emissionsScope.filter((emision) => emision?.tipo === 1))}
          label='Emisiones directas (alcance 1)'
          setIdToDelete={setIdToDelete}
          setTypeId={setTypeId}
        />
        <EmisionesTable
          emisiones={emissionsScope.filter((emision) => emision?.tipo === 2)}
          handleOpenConfirmationModal={() => setOpenDeleteModal(true)}
          handleOpenModal={() => handleOpenModal(otherEmissions, emissionsScope.filter((emision) => emision?.tipo === 2))}
          label='Emisiones indirectas (alcance 2)'
          setIdToDelete={setIdToDelete}
          setTypeId={setTypeId}
        />
        <EmisionesTable
          emisiones={emissionsScope.filter((emision) => emision?.tipo === 3)}
          handleOpenConfirmationModal={() => setOpenDeleteModal(true)}
          handleOpenModal={() => handleOpenModal(inDirectEmissions, emissionsScope.filter((emision) => emision?.tipo === 3))}
          label='Otras emisiones indirectas (alcance 3)'
          setIdToDelete={setIdToDelete}
          setTypeId={setTypeId}
        />
      </div>
      {openModal && (
        <ModalAddCategories
          isOpen={openModal}
          closeModal={() => setOpenModal(false)} // Corregido: pasa la función sin invocarla
          buttons={true}
          actionButtonFist={() => setOpenModal(false)} // Corregido: pasa la función sin invocarla
          actionButtonSecond={handleUpdateEmisions}
          emisiones={modalEmisions}
          setEmisiones={setModalEmisions}
          textAlert={textAlert}
        />
      )}
      {openDeleteModal && (
        <Modal
          isOpen={openDeleteModal}
          closeModal={() => setOpenDeleteModal(false)}
          buttons={true}
          actionButtonFist={() => setOpenDeleteModal(false)}
          actionButtonSecond={confirmDeleteEmision}
          labelButtonSecond='Sí, Eliminar'
        >
          {<div className='h-[250px] flex gap-6'>
            <img className='w-[185px] ' src={DeleteElement} alt="delete icon" />
            <div className='w-3/5 flex flex-col justify-center gap-4'>
              <h3 className='text-[28px] font-bold text-[#202626]'>¿Eliminar información?</h3>
              <p className='text-[20px]'>Estás a punto de eliminar este elemento, ¿deseas continuar con el proceso?</p>
            </div>
          </div>}
        </Modal>
      )}
    </div>
  )
}