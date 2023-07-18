//Dependencies
import { useContext } from 'react'
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext';
//Components
import { StateIndicator } from '../stateIndicator/StateIndicator';

export const DashboardInicioTableA = ({ label = "Tipo de Emisiones", emisiones = [], navigationActive = false }) => {
    const { actualPage, setActualPage } = useContext(NavigateAppContext)
    const goNext = () => setActualPage(actualPage + 1)
    return (
        <div className='EmisionesTable mt-8'>
            <h3 className='mb-2'>{label}</h3>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md ">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="">
                        <tr >
                            <th scope="col" className="pl-6 pt-4 font-bold text-darkslategray-200"></th>
                            <th scope="col" className="pl-6 pt-4 font-bold text-darkslategray-200">Categoría GEI</th>
                            <th scope="col" className="pl-6 pt-4 font-bold text-darkslategray-200 text-center">Estado</th>
                            <th scope="col" className="pl-6 pt-4 font-bold text-darkslategray-200">Último registro</th>
                            <th scope="col" className="pl-6 pr-4 pt-4 font-bold text-darkslategray-200"></th>
                        </tr>
                    </thead>
                    <tbody className=" divide-y divide-lightgray-200">
                        {
                            emisiones.map(emisionDirecta => (
                                <tr key={emisionDirecta?.id} className="">
                                    <td className="pl-6 py-4">
                                        <div className="relative h-[60px] w-[60px]">
                                            <img
                                                className="h-full w-full rounded-lg object-cover object-center"
                                                src={emisionDirecta?.iconChecked}
                                                alt={emisionDirecta?.name}
                                            />
                                        </div>
                                    </td>
                                    <td className="flex pl-6 py-8 text-gray-900">
                                        <p className="font-medium text-gray-700">{emisionDirecta?.name}</p>
                                    </td>
                                    <td className="pl-6 py-4">
                                        <StateIndicator state={emisionDirecta?.state} />
                                    </td>
                                    <td className="pl-6 py-4">{"20/03/2022"}</td>
                                    <td className="pl-6 py-4 pr-4">
                                        <a onClick={navigationActive ? goNext : null} className='underline cursor-pointer text-black font-semibold'>Completar</a>
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