//Context
import { useContext } from 'react'
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext';
//Illustrations & Icons
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';

export const DashboardInicioTableB = ({
    dataTable = [],
    label = "Tipo de Emisiones",
    navigationActive = false,
    thTableb = [],
}) => {

    const { actualPage, setActualPage } = useContext(NavigateAppContext);

    const goNext = () => setActualPage(actualPage + 1);

    return (
        <div className='EmisionesTable mt-8 max-w-[750px]'>
            <h3 className='mb-2'>{label}</h3>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md ">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="">
                        <tr >
                            {thTableb.map((th, index) => (
                                <th key={index} scope="col" className={th.className}>{th.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className=" divide-y divide-lightgray-200">
                        {dataTable.slice(-3).map(item => (
                            <tr key={item?.id} className="">
                                <td className="pl-6 py-4">
                                    <div className='flex items-center gap-3'>
                                        <img className='w-[50px] h-[50px]' src={Illustrations?.[item?.iconChecked]} />
                                        <div>
                                            <p className='font-bold text-f20 text-darkslategray-200 overflow-x-hidden'>{item?.nameCenter}</p>
                                            <p className='text-dimgray-200'>{`Medellín`}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="flex pl-6 py-8 text-gray-900">
                                    <p className="font-medium text-gray-700">{item?.registrationDate}</p>
                                </td>
                                <td className="pl-6 py-4">
                                    {item?.valor_co2}
                                </td>
                                <td className="pl-6 py-4 pr-4">
                                    <a onClick={navigationActive ? goNext : null} className='underline cursor-pointer text-black font-semibold'>Ver resultados</a>
                                </td>
                            </tr>
                        ))};
                    </tbody>
                </table>
            </div>
        </div>
    )
}