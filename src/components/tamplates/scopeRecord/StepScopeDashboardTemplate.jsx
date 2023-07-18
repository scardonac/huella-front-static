import axios from 'axios';
//Dependencies
import { useEffect, useState } from 'react'
//Components
import { ButtonTypeA } from '../../../components/molecules/buttons/buttonTypeA/ButtonTypeA';
import { EmisionesTable } from '../../../components/organisms/tables/EmisionesTable';
import { SedeInfo } from '../../../components/organisms/sedeInfo/SedeInfo';
//Assets
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';
//Data
import { ModalAddCategories } from '../../organisms/modals/ModalAddCategories';
import { baseURL, calculoID, token } from '../../../ConstantsAPI';
import Modal from '../../organisms/modals/Modal';

import deleteIcon from '../../../assets/Illustrations/Illustration_DeleteElement.svg'

export const StepScopeDashboardTemplate = () => {
  // Comportamiento de Modal para confirmacion de delete.
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false)
  const handleOpenConfirmationModal = () => setOpenConfirmationModal(true)
  const handleCloseConfirmationModal = () => setOpenConfirmationModal(false)
  // Comportamiento de Modal para seleccion de categorias.
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = (tipo, selected) => {
    filterEmisionsToModal(allEmisions, selected, tipo)
    setOpenModal(true)
  }
  const handleCloseModal = () => setOpenModal(false)
  // Emisiones del alcance 1.
  const [idToDelete, setIdToDelete] = useState(null) //Id seleccionado para el delete.
  const [allEmisions, setAllEmisions] = useState([]) //Estado local de todas las emisiones.
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
  const updateAllEmisions = async (token_ = token) => {
    try {
      const respuesta = await axios.get(`${baseURL}/emisiones`, {
        headers: {
          Authorization: token_
        }
      });
      const array = respuesta?.data?.data
      console.log("getAllEmisions: ", array);
      setAllEmisions(array)
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
  };

  const deleteEmision = async (token_ = token, id_ = null) => {
    try {
      const respuesta = await axios.delete(`${baseURL}/soportes/delete/${id_}`, {
        headers: {
          Authorization: token_
        }
      });

      // Aquí puedes hacer algo con la respuesta obtenida
      const response = respuesta?.data
      console.log("response: ", response);
      updateSelectedEmisions()
      handleCloseConfirmationModal()
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
  };

  const confirmDeleteEmision = () => {
    // console.log("token: ",token);
    console.log("id: ", idToDelete);
    deleteEmision(token, idToDelete)
  }

  const updateSelectedEmisions = async (token_ = token, id_ = calculoID) => {
    try {
      const respuesta = await axios.get(`${baseURL}/render/${id_}`, {
        headers: {
          Authorization: token_
        }
      });

      // Aquí puedes hacer algo con la respuesta obtenida
      const array = respuesta?.data?.logs_details
      console.log("getSelectedEmisions: ", array);
      setEmisionesAlcance1(array?.filter((emision) => emision?.tipo === 1))
      setEmisionesAlcance2(array?.filter((emision) => emision?.tipo === 2))
      setEmisionesAlcance3(array?.filter((emision) => emision?.tipo === 3))
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
  };

  const putSelectedEmisions = async (token_ = token, id_ = calculoID, array_ = []) => {
    console.log(token_);
    try {
      const respuesta = await axios.put(`${baseURL}/forms`, {
        body: {
          "calculo_id": id_,
          "log_array": array_
        },
        headers: {
          Authorization: token_
        }
      });
      // Aquí puedes hacer algo con la respuesta obtenida
      console.log("respuesta: ", respuesta);
      handleCloseModal()
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
  };

  const filterEmisionsToModal = (all, selected, tipo) => {
    const newArray = all?.filter((emision) => emision?.tipo === tipo)?.map((emision) => {
      const isSelected = selected?.some((selectedEmision) => selectedEmision?.id === emision?.id)
      if (isSelected) {
        return {
          name: emision?.nombre,
          id: emision?.id,
          isChecked: true,
        }
      } else {
        return {
          name: emision?.nombre,
          id: emision?.id,
          isChecked: false,
        }
      }
    })
    // console.log(newArray);
    setModalEmisions(newArray)
  }

  useEffect(() => {
    updateSelectedEmisions();
    updateAllEmisions();
  }, [])

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
          handleOpenModal={() => handleOpenModal(1, emisionesAlcance1)}
          setIdToDelete={setIdToDelete}
          handleOpenConfirmationModal={handleOpenConfirmationModal}
        />
        <EmisionesTable
          label='Emisiones indirectas (alcance 2)'
          emisiones={emisionesAlcance2}
          navigationActive={true}
          handleOpenModal={() => handleOpenModal(2, emisionesAlcance2)}
          setIdToDelete={setIdToDelete}
          handleOpenConfirmationModal={handleOpenConfirmationModal}
        />
        <EmisionesTable
          label='Otras emisiones indirectas (alcance 3)'
          emisiones={emisionesAlcance3}
          handleOpenModal={() => handleOpenModal(3, emisionesAlcance3)}
          setIdToDelete={setIdToDelete}
          handleOpenConfirmationModal={handleOpenConfirmationModal}
        />
      </div>
      {openModal ?
        <ModalAddCategories
          isOpen={openModal}
          closeModal={handleCloseModal}
          buttons={true}
          actionButtonFist={handleCloseModal}
          actionButtonSecond={handleUpdateEmisions}
          emisiones={modalEmisions}
          setEmisiones={setModalEmisions}
        >
        </ModalAddCategories>
        : null}
      {openConfirmationModal ?
        <Modal
          isOpen={openConfirmationModal}
          closeModal={handleCloseConfirmationModal}
          buttons={true}
          actionButtonFist={handleCloseConfirmationModal}
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
        : null}
    </div>
  )
}