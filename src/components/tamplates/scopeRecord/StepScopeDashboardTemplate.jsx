//Dependencies
import { useContext, useEffect, useState } from 'react'
//Components
import { ButtonTypeA } from '../../../components/molecules/buttons/buttonTypeA/ButtonTypeA';
import { EmisionesTable } from '../../../components/organisms/tables/EmisionesTable';
import { SedeInfo } from '../../../components/organisms/sedeInfo/SedeInfo';
import Modal from '../../organisms/modals/Modal';
//Assets
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';
//Data
import { ModalAddCategories } from '../../organisms/modals/ModalAddCategories';
import { calculoID, token } from '../../../ConstantsAPI';

import deleteIcon from '../../../assets/Illustrations/Illustration_DeleteElement.svg'
import axiosClient from '../../../config/AxiosClient';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../redux/store';
import { deleteEmissionsAction, updateCalculationAction, updateEmissionsAction } from '../../../redux/actions/RegisterAction';
import { NavigateAppContext } from '../../../context/NavigateAppContext';

export const StepScopeDashboardTemplate = () => {

  const dispatch = useAppDispatch();

  const { register: { directEmissions, inDirectEmissions, otherEmissions, centerCurrent, calculations } } = useSelector(state => state.persistedData);

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

  const handleUpdateEmisions = () => {
    const data1 = modalEmisions.filter((emision) => emision?.isChecked).map((emision) => emision.id)
    const data2 = emissionsScope.filter((emision) => emision?.tipo !== typeId).map((emision) => emision.id)
    const allEmisions = [...data2, ...data1];
    const emisionesToPutIds = Array.from(new Set(allEmisions.map((emision) => emision))); // Eliminar duplicados
    putSelectedEmisions(emisionesToPutIds);
  }


  const confirmDeleteEmision = async () => {
    const { error, verify } = await dispatch(deleteEmissionsAction(idToDelete));
    if (error) return setTextAlert(error);
    verify && setOpenDeleteModal(false), updateSelectedEmisions();
  }

  const updateSelectedEmisions = async () => {
    const { data, error, verify } = await dispatch(updateEmissionsAction(calculations.id));
    if (!verify) return;
    setEmissionsScope(data.emissions)
  };

  const putSelectedEmisions = async (emisionesToPut) => {
    const { data, error, verify } = await dispatch(updateCalculationAction(emisionesToPut));
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

  return (
    <div className='StepScopeDashboardPage bg-primary-gris1 min-h-full pt-10'>
      <div className='ContenedorCompleto w-[90%] max-w-[1400px] min-w-[900px] mb-12 mx-auto'>
        <div className='flex justify-between'>
          <SedeInfo icon={Illustrations["office_Azul"]} />
          <ButtonTypeA text='Medir huella de carbono' bgColor='#FE5000' txColor='#FFFFFF' bdWidth='0px' bgHvColor='#E6500B' submitBtn={false} action={null} />
        </div>
        <EmisionesTable
          label='Emisiones directas (alcance 1)'
          emisiones={emissionsScope.filter((emision) => emision?.tipo === 1)}
          handleOpenModal={() => handleOpenModal(directEmissions, emissionsScope.filter((emision) => emision?.tipo === 1))}
          setIdToDelete={setIdToDelete}
          handleOpenConfirmationModal={() => setOpenDeleteModal(true)}
          setTypeId={setTypeId}
        />
        <EmisionesTable
          label='Emisiones indirectas (alcance 2)'
          emisiones={emissionsScope.filter((emision) => emision?.tipo === 3)}
          navigationActive={true}
          handleOpenModal={() => handleOpenModal(inDirectEmissions, emissionsScope.filter((emision) => emision?.tipo === 3))}
          setIdToDelete={setIdToDelete}
          handleOpenConfirmationModal={() => setOpenDeleteModal(true)}
          setTypeId={setTypeId}
        />
        <EmisionesTable
          label='Otras emisiones indirectas (alcance 3)'
          emisiones={emissionsScope.filter((emision) => emision?.tipo === 2)}
          handleOpenModal={() => handleOpenModal(otherEmissions, emissionsScope.filter((emision) => emision?.tipo === 2))}
          setIdToDelete={setIdToDelete}
          handleOpenConfirmationModal={() => setOpenDeleteModal(true)}
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
            <img className='w-[185px] ' src={deleteIcon} alt="delete icon" />
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