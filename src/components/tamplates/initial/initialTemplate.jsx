//Dependencies
import { useNavigate } from 'react-router-dom'
//Components
import { ButtonTypeA } from '../../molecules/buttons/buttonTypeA/ButtonTypeA'
import { DashboardInicioTableA } from '../../organisms/tables/DashboardInicioTableA'
import { DashboardInicioTableB } from '../../organisms/tables/DashboardInicioTableB'
//Assets
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider'
//Routes
import { paths } from '../../../routes/paths'
//Data
import { emisionesDirectasDashboardATable, emisionesDirectasDashboardBTable } from '../../../Data'
//Redux
import { useAppDispatch } from '../../../redux/store'
//Slice
import { getCenterCurrentCase } from '../../../redux/slices/RegisterSlice'
import { useEffect, useState } from 'react'
import { getEmissionsAllAction } from '../../../redux/actions/RegisterAction'
import UnderlineTabs from '../../organisms/underlineTabs/UnderlineTabs'

const { office_VSuave } = Illustrations; //Illustrations

export const InitialTemplate = () => {

    const nav = useNavigate();

    const dispatch = useAppDispatch();

    const [emissionsAll, setEmissionsAll] = useState([]); // Estado para guardar las emisiones de la base de datos
    const [emissionsEarring, setEmissionsEarring] = useState([]); // Estado para guardar las emisiones pendientes de la base de datos


    const handleOnClick = () => {
        dispatch(getCenterCurrentCase(null));
        nav(paths.APPREGISTROS)
    }

    const thTableb = [
        { label: 'Centro de trabajo', className: 'pl pt-4 font-bold text-darkslategray-200' },
        { label: 'Periodo de registro', className: 'pl-2 pt-4 font-bold text-darkslategray-200' },
        { label: 'Ton C02 equivalente', className: 'pl-2 pt-4 font-bold text-darkslategray-200' },
        { label: '', className: 'pl-2 pr-4 pt-4 font-bold text-darkslategray-200' },
    ]

    const thTablea = [
        { label: '', className: 'pl-6 pt-4 font-bold text-darkslategray-200' },
        { label: 'Categoría GEI', className: 'pl-6 pt-4 font-bold text-darkslategray-200 w-1/3' },
        { label: 'Estado', className: 'pl-6 pt-4 font-bold text-darkslategray-200 text-center' },
        { label: 'Último registro', className: 'pl-6 pt-4 font-bold text-darkslategray-200' },
        { label: '', className: 'pl-6 pr-4 pt-4 font-bold text-darkslategray-200' },
    ]

    const getEmisionsAll = async () => {
        const { data, error, verify } = await dispatch(getEmissionsAllAction()); //Obtiene las emisiones de la base de datos
        if (!verify) return;
        // const dataDetail = data.flatMap((calculo) => calculo?.calculo_details?.valor_co2); // obtiene los logs de la base de datos
        const newDataAll = data.map((calculo) => {
            return {
                id: calculo?.calculo_details?.centro_id,
                nameCenter: calculo?.calculo_details?.centro_id,
                registrationDate: `${calculo?.calculo_details?.inicio_reg?.replace(/-/g, "/")}-${calculo?.calculo_details?.final_reg?.replace(/-/g, "/")}`,
                valor_co2: calculo?.calculo_details?.valor_co2,
                iconChecked: 'office_VSuave',
            }
        })
        const newDataEarring = data[data.length - 1].logs_details.map((log) => {
            let registrationDate = data[data.length - 1].calculo_details?.final_reg?.replace(/-/g, "/");
            return {
                id: log?.id,
                categoryName: log?.nombre,
                status: log?.status,
                registrationDate: registrationDate,
            }
        })
        setEmissionsAll(newDataAll);
        setEmissionsEarring(newDataEarring);
    };

    useEffect(() => {
        getEmisionsAll();
    }, []);

    return (
        <div className='HomePage bg-primary-gris1 h-full'>
            <div className=' w-[90%] max-w-[1400px] min-w-[1000px] mx-auto pt-10 flex flex-col'>
                <div className='flex justify-between'>
                    <div className=''>
                        <h3>¡Es un gusto que estés aquí!</h3>
                        <p>Mide tu impacto, sigue tu plan de mitigación y únete a la descarbonización.</p>
                    </div>
                    <ButtonTypeA text='Nuevo cálculo' bgColor='#FE5000' txColor='#FFFFFF' bdWidth='0px' bgHvColor='#E6500B' submitBtn={true} action={() => handleOnClick()} />
                </div>
                <div className='ContenedorMetas-Registros flex justify-between gap-8'>
                    <div className='w-full bg-primary-white1 mt-4 rounded-lg px-3'>
                        <DashboardInicioTableA label='Sier centro de control' emisiones={emisionesDirectasDashboardATable} emissionsEarring={emissionsEarring} thTablea={thTablea} />
                        <p className='text-right pt-2 font-bold pr-3 underline underline-offset-2 cursor-pointer'>Ir a Oficinas Sier Medellín</p>
                    </div>
                    <div className='flex flex-col gap-8 justify-between mt-[20px]'>
                        <div className='w-[400px] h-[264px] bg-primary-title1 rounded-xl p-8'>
                            <p className='text-primary-white1 text-f18 font-bold mb-4'>Metas</p>
                            <p className='text-primary-white1 text-f18 font-bold mb-2'>Reducción de emisiones</p>
                            <p className='text-primary-white1 text-f18'>Sier centro de control</p>
                            <p className='text-primary-white1'>01/01/2023 - 31/12/2023</p>
                            <p className='text-primary-white1 ml-14'>8</p>
                            <div className='w-full h-3 rounded-md bg-primary-white1'><div className='w-1/5 h-3 rounded-md bg-primary-green2'></div></div>
                            <p className='text-primary-white1 text-right'>30 Ton</p>
                        </div>
                        <div className='flex justify-center items-center w-[400px] h-[182px] bg-primary-white1 rounded-xl'>
                            <div className='flex items-center gap-3'>
                                <img className='w-[70px] h-[70px]' src={office_VSuave} />
                                <div>
                                    <p className='font-bold text-f20 text-darkslategray-200'>{"Sier centro de control"}</p>
                                    <p className='text-dimgray-200'>{`Medellín`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Historial-Calculos w-fit bg-primary-white1 mt-4 rounded-lg px-3 pb-3'>
                    <DashboardInicioTableB
                        label='Histórico de cálculos'
                        thTableb={thTableb}
                        dataTable={emissionsAll}
                    />
                    <p className='text-right pt-2 font-bold pr-3 underline underline-offset-2 cursor-pointer'>Ver todas</p>
                </div>
            </div>
        </div>
    )
}
