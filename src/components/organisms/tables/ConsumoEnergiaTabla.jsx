//Assets
import { Icons } from "../../../assets/icons/IconProvider";
// Components
const { AddDocumentIcon, Arrow1Icon } = Icons;

//Data
import { meses } from '../../../Data';

export const ConsumoEnergiaTabla = ({
    handleValue = null,
    periodos = [...meses]
}) => {
    return (
        <div className='ConsumoEnergiaTabla mt-8'>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md ">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="">
                        <tr >
                            <th scope="col" className="px-6 pt-4 font-bold text-darkslategray-200"></th>
                            <th scope="col" className="px-6 pt-4 font-bold text-darkslategray-200">Valor en kw/h</th>
                            <th scope="col" className="px-6 pt-4 font-bold text-darkslategray-200">Soporte</th>
                            <th scope="col" className="px-6 pt-4 font-bold text-darkslategray-200 text-center"></th>
                        </tr>
                    </thead>
                    <tbody className=" divide-y divide-lightgray-200">
                        {periodos?.map(periodo => (
                            <tr key={periodo?.id} className="">
                                <td className=" py-2 pl-4  font-bold text-gray-100 text-f16">{periodo?.label}</td>
                                <td className={`py-2 pl-6  ${periodo?.value ? "text-black font-semibold" : "text-lightgray-100"}`}>{periodo?.value || "Valor"}</td>
                                <td className=" py-2 flex gap-2">
                                    <img src={AddDocumentIcon} />
                                    <p className={periodo?.file ? "text-black font-semibold" : "text-lightgray-100"}>{periodo.file ? periodo.file : 'Archivo adjunto'}</p>
                                </td>
                                <td className=" py-2  ">
                                    <a data-Id={periodo?.id} onClick={handleValue} className='underline cursor-pointer text-black font-semibold flex gap-2'>
                                        Completar<img src={Arrow1Icon} />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
