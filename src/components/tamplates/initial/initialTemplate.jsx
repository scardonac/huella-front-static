//Dependencies
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
//Components
import { AllCenterTable } from '../../organisms/tables/AllCenterTable'
import { ButtonTypeA } from '../../molecules/buttons/buttonTypeA/ButtonTypeA'
import { DashboardInicioTableA } from '../../organisms/tables/DashboardInicioTableA'
import { DashboardInicioTableB } from '../../organisms/tables/DashboardInicioTableB'
import GoalsTable from '../../organisms/tables/GoalsTable'
//Routes
import { paths } from '../../../routes/paths'
//Redux
import { useAppDispatch } from '../../../redux/store'
//Slice
import { getCenterCurrentCase } from '../../../redux/slices/RegisterSlice'
//Actions
import { getCentersAction, getEmissionsAllAction } from '../../../redux/actions/RegisterAction'
import { StartMeasurTemplate } from './StartMeasurTemplate'

export const InitialTemplate = () => {

    const nav = useNavigate(); // hook para navegar entre páginas

    const dispatch = useAppDispatch(); // Dispatch de acciones de Redux

    const { register: { centers } } = useSelector(state => state.persistedData); // selector para obtener los datos del registro

    const [emissionsAll, setEmissionsAll] = useState([]); // Estado para guardar las emisiones de la base de datos
    const [centersEarring, setEmissionsEarring] = useState([]); // Estado para guardar las emisiones pendientes de la base de datos


    const handleOnClick = () => {
        dispatch(getCenterCurrentCase(null));
        nav(paths.APPREGISTROS)
    }

    const thTableb = [
        { label: 'Centro de trabajo', className: 'pl-6 pt-4 font-bold text-darkslategray-200' },
        { label: 'Periodo de registro', className: 'pl-6 pt-4 font-bold text-darkslategray-200' },
        { label: 'Ton C02 equivalente', className: 'pl-5 pt-4 font-bold text-darkslategray-200' },
        { label: '', className: 'pl-3 pr-4 pt-4 font-bold text-darkslategray-200' },
    ]

    const thTablea = [
        { label: '', className: 'pl-6 pt-4 font-bold text-darkslategray-200' },
        { label: 'Categoría GEI', className: 'pl-6 pt-4 font-bold text-darkslategray-200 w-1/3' },
        { label: 'Estado', className: 'pl-6 pt-4 font-bold text-darkslategray-200 text-center' },
        { label: 'Último registro', className: 'pl-6 pt-4 font-bold text-darkslategray-200' },
        { label: '', className: 'pl-6 pr-4 pt-4 font-bold text-darkslategray-200' },
    ]

    const filterCentersName = (id) => centers.filter((center) => center.id === id)[0]?.nombre; //Función para buscar el nombre del centro de trabajo
    const filterCentersCity = (id) => centers.filter((center) => center.id === id)[0]?.nombre_ciudad; //Función para buscar la ciudad del centro de trabajo
    const filterCentersEmployees = (id) => centers.filter((center) => center.id === id)[0]?.numero_de_empleados; //Función para buscar el número de empleados del centro de trabajo

    const getEmisionsAll = async () => {
        const { data, error, verify } = await dispatch(getEmissionsAllAction()); //Obtiene las emisiones de la base de datos
        if (!verify) return;
        // mapea los datos de la base de datos y los guarda en un nuevo array con los calculos completados
        const newDataAll = data.map((calculo) => {
            if (calculo?.calculo_details?.is_completed) {
                return {
                    id: calculo?.calculo_details?.centro_id,
                    nameCenter: filterCentersName(calculo?.calculo_details?.centro_id),
                    centerCity: filterCentersCity(calculo?.calculo_details?.centro_id),
                    centerEmployees: filterCentersEmployees(calculo?.calculo_details?.centro_id),
                    idCalculo: calculo?.calculo_details?.id,
                    registrationDate: `${calculo?.calculo_details?.inicio_reg?.replace(/-/g, "/")}-${calculo?.calculo_details?.final_reg?.replace(/-/g, "/")}`,
                    valor_co2: calculo?.calculo_details?.valor_co2,
                    iconChecked: 'office_VSuave',
                }
            }
        }).filter((element) => element !== undefined);
        // mapea los datos de la base de datos y los guarda en un nuevo array con los calculos incompletos
        const newDataEarring = data.map((calculo) => {
            if (!calculo?.calculo_details?.is_completed) {
                return {
                    id: calculo?.calculo_details?.centro_id,
                    nameCenter: filterCentersName(calculo?.calculo_details?.centro_id),
                    centerCity: filterCentersCity(calculo?.calculo_details?.centro_id),
                    centerEmployees: filterCentersEmployees(calculo?.calculo_details?.centro_id),
                    idCalculo: calculo?.calculo_details?.id,
                    registrationDate: `${calculo?.calculo_details?.inicio_reg?.replace(/-/g, "/")}-${calculo?.calculo_details?.final_reg?.replace(/-/g, "/")}`,
                    valor_co2: calculo?.calculo_details?.valor_co2,
                    iconChecked: 'office_VSuave',
                }
            }
        }).filter((element) => element !== undefined);

        setEmissionsAll(newDataAll);//Guarda los calculos completados en el estado
        setEmissionsEarring(newDataEarring.slice(-3)); //Guarda los ultimos 3 calculos incompletos en el estado
    };

    useEffect(() => {
        getEmisionsAll();
        // Obtener los centros de trabajo de la base de datos
        dispatch(getCentersAction());
    }, []);

    if (centers.length === 0) return <StartMeasurTemplate/>;

    return (
        <div className='bg-primary-gris1 h-full'>
            <div className=' w-[90%] max-w-[1400px] min-w-[1000px] mx-auto pt-10 flex flex-col'>
                <div className='flex justify-between'>
                    <div className=''>
                        <h3>¡Es un gusto que estés aquí!</h3>
                        <p>Mide tu impacto, sigue tu plan de mitigación y únete a la descarbonización.</p>
                    </div>
                    <ButtonTypeA text='Nuevo cálculo' bgColor='#FE5000' txColor='#FFFFFF' bdWidth='0px' bgHvColor='#E6500B' submitBtn={true} action={() => handleOnClick()} />
                </div>
                <div className='ContenedorMetas-Registros flex justify-between gap-8'>
                    <div className='w-full h-fit bg-primary-white1 mt-4 rounded-lg px-3 pb-3'>
                        <DashboardInicioTableA centersEarring={centersEarring} thTablea={thTablea} />
                    </div>
                    <div className='flex flex-col gap-8 justify-between mt-[20px]'>
                        <GoalsTable />
                        <AllCenterTable />
                    </div>
                </div>
                <div className='Historial-Calculos w-[69%] bg-primary-white1 rounded-lg px-3 pb-3'>
                    <DashboardInicioTableB
                        label='Histórico de cálculos'
                        thTableb={thTableb}
                        dataTable={emissionsAll}
                    />
                    <Link to={paths.APPRESULTADOS}>
                        <p className='text-right pt-2 font-bold pr-3 underline underline-offset-2 cursor-pointer'>Ver todas</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
