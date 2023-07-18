//Context
import { useContext } from 'react'
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext';

export const DashboardInicioTableB = ({ label = "Tipo de Emisiones", emisiones = [], navigationActive = false }) => {

    const { actualPage, setActualPage } = useContext(NavigateAppContext);

    const goNext = () => setActualPage(actualPage + 1);

    return (
        <div className='EmisionesTable mt-8 max-w-[650px]'>
            <h3 className='mb-2'>{label}</h3>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md ">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="">
                        <tr >
                            <th scope="col" className="pl pt-4 font-bold text-darkslategray-200">Centro de trabajo</th>
                            <th scope="col" className="pl-2 pt-4 font-bold text-darkslategray-200">Periodo de registro</th>
                            <th scope="col" className="pl-2 pt-4 font-bold text-darkslategray-200">Ton C02 equivalente</th>
                            <th scope="col" className="pl-2 pr-4 pt-4 font-bold text-darkslategray-200"></th>
                        </tr>
                    </thead>
                    <tbody className=" divide-y divide-lightgray-200">
                        {
                            emisiones.map(emisionDirecta => (
                                <tr key={emisionDirecta?.id} className="">
                                    <td className="pl-6 py-4">
                                        <div className='flex items-center gap-3'>
                                            <img className='w-[50px] h-[50px]' src={emisionDirecta?.iconChecked} />
                                            <div>
                                                <p className='font-bold text-f20 text-darkslategray-200 overflow-x-hidden'>{emisionDirecta?.name}</p>
                                                <p className='text-dimgray-200'>{`Medellín`}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="flex pl-6 py-8 text-gray-900">
                                        <p className="font-medium text-gray-700">{emisionDirecta?.periodo}</p>
                                    </td>
                                    <td className="pl-6 py-4">
                                        {emisionDirecta?.tonCO2eq}
                                    </td>
                                    <td className="pl-6 py-4 pr-4">
                                        <a onClick={navigationActive ? goNext : null} className='underline cursor-pointer text-black font-semibold'>Ver resultados</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}