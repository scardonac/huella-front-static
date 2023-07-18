//Dependencies
import { useContext, useEffect, useState } from 'react'
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext';
//Components
import { ButtonTypeA } from '../../molecules/buttons/buttonTypeA/ButtonTypeA';
import { ConsumoEnergiaModal } from '../modalContents/ConsumoEnergiaModal';
import { ConsumoEnergiaTabla } from '../tables/ConsumoEnergiaTabla';
import { WrapReports } from '../wrapReports/WrapReports';
//Assets
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';

const { ConsumoEnergia_Azul } = Illustrations; //Illustrations

export const EnergyConsumptionReportP = () => {

    const { goBack, setPendienteState, setEmptyState, monthsArray, setMonthsArray, mArrayLS, updateMonths } = useContext(NavigateAppContext);

    //HandleModal
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => { setIsOpen(true) };
    const closeModal = () => { setIsOpen(false) };

    //ModalValue
    const [mes, setMes] = useState({});

    //handleValue
    const handleValue = (e) => {
        const id = e.target.dataset.id
        const mesSelected = monthsArray?.find(mes => mes.id == id)
        setMes({ ...mesSelected })
        openModal()
    }

    //handleValue
    const updateData = (valueObtained, fileObtained) => {
        const newArray = monthsArray?.map((mesTD, i) => {
            if (mesTD?.id == mes.id) {
                return { ...mesTD, value: valueObtained, file: fileObtained }
            } else {
                return mesTD
            }
        })
        updateMonths([...newArray])
        closeModal()
    }

    //handleBorrador
    const handleBorrador = () => {
        goBack()
        const emptyTable = monthsArray.every(month => ((month.value === null || month.value === "") && (month.file === null || month.file === "")))
        if (emptyTable) {
            setEmptyState()
        } else {
            setPendienteState()
        }
    }

    useEffect(() => {
        setMonthsArray([...mArrayLS])
    }, [])

    return (
        <WrapReports
            title='Consumo de energía eléctrica'
            subTitle='Oficinas SIER Medellín - 2022'
            icon={ConsumoEnergia_Azul}
            navigateTo={-1}
        >
            <ConsumoEnergiaTabla label='Reporte periódico' periodos={monthsArray} handleValue={handleValue} />
            <div className='flex justify-end gap-4 pt-6'>
                <ButtonTypeA text='Cancelar' width='130px' />
                <ButtonTypeA text='Borrador' width='185px' bgColor='#FE5000' txColor='#FFFFFF' bdWidth='0px' bgHvColor='#E6500B' submitBtn={true} action={handleBorrador} />
                <ButtonTypeA text='Finalizar' width='185px' bgColor='#9CA09F' txColor='#FFFFFF' bdWidth='0px' bgHvColor='#E6500B' submitBtn={true} action={null} />
            </div>
            <ConsumoEnergiaModal isOpen={isOpen} closeModal={closeModal} dataModal={mes} updateData={updateData} />
        </WrapReports>
    )
}
