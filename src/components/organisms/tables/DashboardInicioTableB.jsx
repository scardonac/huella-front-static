//Context
import { useContext } from 'react'
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext';
//Illustrations & Icons
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';
import { Icons } from '../../../assets/icons/IconProvider';
import { useSelector } from 'react-redux';
import { updateEmissionsAction } from '../../../redux/actions/RegisterAction';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../redux/store';

const { Arrow1Icon, Compensation1Icon, CompensacionIcon } = Icons; //Icons

export const DashboardInicioTableB = ({
    dataTable = [],
    label = "Tipo de Emisiones",
    navigationActive = false,
    thTableb = [],
}) => {

    const navigate = useNavigate(); // hook para navegar entre páginas

    const dispatch = useAppDispatch(); // Dispatch de acciones de Redux

    const { register: { centers } } = useSelector(state => state.persistedData); // selector para obtener los datos del registro
    const { actualPage, setActualPage } = useContext(NavigateAppContext); //Contexto para navegar entre páginas

    const goNext = () => setActualPage(actualPage + 1); //Función para navegar a la siguiente página

    const getCalculations = async ({ nameCenter, idCalculo, registrationDate, centerEmployees }) => {
        const { data, error, verify } = await dispatch(updateEmissionsAction(idCalculo));
        if (!verify) return;
        handleNavigate({ nameCenter, registrationDate, centerEmployees }, data)
    };

    const handleNavigate = ({ nameCenter, registrationDate, centerEmployees }, dataState) => {

        const url = `/app/results/company/${nameCenter}`;

        const state = {
            ...dataState,
            centerEmployees,
            nameCenter: nameCenter,
            registrationDate,
        };

        // Utiliza el hook useNavigate para realizar la navegación a la URL deseada
        // y pasar el estado como parte de la navegación.
        navigate(url, { state });
    }

    console.log(dataTable, 'dataTable')
    return (
        <div className='EmisionesTable mt-8'>
            <h3 className='mb-2'>{label}</h3>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md p-3">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="">
                        <tr >
                            {thTableb.map((th, index) => (
                                <th key={index} scope="col" className={th.className}>{th.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-lightgray-200">
                        {dataTable.slice(-3).map(item => (
                            <tr key={item?.idCalculo} className="">
                                <td className="pl-6 py-4">
                                    <div className='flex items-center gap-2'>
                                        <img className='w-[50px] h-[50px]' src={Illustrations?.[item?.iconChecked]} />
                                        <div>
                                            <p className='font-bold text-f20 text-darkslategray-200 overflow-x-hidden'>{item?.nameCenter}</p>
                                            <p className='text-dimgray-200'>{item?.centerCity}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="flex pl-6 py-8 text-gray-900">
                                    <p className="text-forestGray font-sora text-base leading-[22px] font-sora tracking-[0.08px] text-left text-opacity-100">{item?.registrationDate}</p>
                                </td>
                                <td className="pl-6 py-4">
                                    <div className='flex items-center gap-1'>
                                        <div>
                                            <p className="text-forestGray font-sora text-base leading-[22px] font-sora tracking-[0.08px] text-left text-opacity-100">
                                                {item?.valor_co2}
                                            </p>

                                        </div>
                                        <img className="w-4 h-4 ml-2" alt="" src={item?.valor_co2 ? Compensation1Icon : CompensacionIcon} />
                                    </div>
                                </td>
                                <td className="pl-6 py-4 pr-4">
                                    <a onClick={() => getCalculations(item)} className='underline cursor-pointer text-black font-semibold'>Ver resultados</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}