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
import { deleteEmissionsAction, updateEmissionsAction } from '../../../redux/actions/RegisterAction';
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
  const handleOpenModal = (emissions, selected) => {
    filterEmisionsToModal(emissions, selected)
    setOpenModal(true)
  }
  // Emisiones del alcance 1.
  const [idToDelete, setIdToDelete] = useState(null) //Id seleccionado para el delete.
  // const [allEmisions, setAllEmisions] = useState([]) //Estado local de todas las emisiones.
  const [modalEmisions, setModalEmisions] = useState([]) //Estado local para setear las emisiones a mostrar en el modal de añadir nueva categoria.
  const [emisionesAlcance1, setEmisionesAlcance1] = useState([]) //Estado local de las emisiones del alcance 1.
  const [emisionesAlcance2, setEmisionesAlcance2] = useState([]) //Estado local de las emisiones del alcance 2.
  const [emisionesAlcance3, setEmisionesAlcance3] = useState([]) //Estado local de las emisiones del alcance 3.

  const handleUpdateEmisions = () => {
    const emisionesToPut = modalEmisions.filter((emision) => emision?.isChecked).map((emision) => emision?.id)
    console.log("emisionesToPut: ", emisionesToPut);
    putSelectedEmisions(token, calculoID, emisionesToPut)
  }

  // Función para actualizar el estado con todas las emisiones.
  // const updateAllEmisions = async () => {
  //   try {
  //     const respuesta = await axiosClient.get('emisiones');
  //     const array = respuesta?.data?.data
  //     setAllEmisions(array)
  //   } catch (error) {
  //     // Manejo de errores
  //     console.error(error);
  //   }
  // };

  // Actualizar el estado local de todas las emisiones.
  // useEffect(() => {
  //   setAllEmisions([...directEmissions, ...inDirectEmissions, ...otherEmissions]);
  // }, [directEmissions, inDirectEmissions, otherEmissions])

  // const deleteEmision = async (id = null) => {
  //   try {
  //     const respuesta = await axiosClient.delete(`/soportes/delete/${id}`);

  //     // Aquí puedes hacer algo con la respuesta obtenida
  //     const response = respuesta?.data
  //     console.log("response: ", response);
  //     updateSelectedEmisions()
  //     setOpenDeleteModal(false)()
  //   } catch (error) {
  //     // Manejo de errores
  //     console.error(error);
  //   }
  // };

  const confirmDeleteEmision = async () => {
    const { error, verify } = await dispatch(deleteEmissionsAction(idToDelete));
    if (error) return setTextAlert(error);
    verify && setOpenDeleteModal(false), updateSelectedEmisions();
  }

  const updateSelectedEmisions = async () => {
    const { data, error, verify } = await dispatch(updateEmissionsAction(calculations.id));
    console.log("data: ", data)
    if (!verify) return;
    setEmisionesAlcance1(data.directEmissions)
    setEmisionesAlcance2(data.inDirectEmissions)
    setEmisionesAlcance3(data.otherEmissions)
  };

  const putSelectedEmisions = async (id = calculoID, array_ = []) => {
    try {
      const respuesta = await axiosClient.put('/forms', {
        "calculo_id": id,
        "log_array": array_
      });
      // Aquí puedes hacer algo con la respuesta obtenida
      setOpenModal(false)
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
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
    // console.log(newArray);
    setModalEmisions(newArray)
  }

  useEffect(() => {
    calculations && updateSelectedEmisions();
    // updateAllEmisions();
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
          emisiones={emisionesAlcance1}
          handleOpenModal={handleOpenModal(directEmissions, emisionesAlcance1)}
          setIdToDelete={setIdToDelete}
          handleOpenConfirmationModal={setOpenDeleteModal(true)}
        />
        <EmisionesTable
          label='Emisiones indirectas (alcance 2)'
          emisiones={emisionesAlcance2}
          navigationActive={true}
          handleOpenModal={handleOpenModal(inDirectEmissions, emisionesAlcance2)}
          setIdToDelete={setIdToDelete}
          handleOpenConfirmationModal={setOpenDeleteModal(true)}
        />
        <EmisionesTable
          label='Otras emisiones indirectas (alcance 3)'
          emisiones={emisionesAlcance3}
          handleOpenModal={handleOpenModal(otherEmissions, emisionesAlcance3)}
          setIdToDelete={setIdToDelete}
          handleOpenConfirmationModal={setOpenDeleteModal(true)}
        />
      </div>
      {openModal && (
        <ModalAddCategories
          isOpen={openModal}
          closeModal={setOpenModal(false)}
          buttons={true}
          actionButtonFist={setOpenModal(false)}
          actionButtonSecond={handleUpdateEmisions}
          emisiones={modalEmisions}
          setEmisiones={setModalEmisions}
          textAlert={textAlert}
        />)}
      {openDeleteModal && (
        <Modal
          isOpen={openDeleteModal}
          closeModal={setOpenDeleteModal(false)}
          buttons={true}
          actionButtonFist={setOpenDeleteModal(false)}
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