//Dependencies
import { Link } from 'react-router-dom';
//Components
import { StateIndicator } from '../stateIndicator/StateIndicator';
//Assets
import { Icons } from "../../../assets/icons/IconProvider";
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';
// Components
const { TrushIcon, InformationIcon } = Icons;

export const EmisionesTable = ({
    emisiones = [],
    handleOpenConfirmationModal = null,
    handleOpenModal = null,
    label = "Tipo de Emisiones",
    setIdToDelete = null,
    setTypeId = null,
}) => {

    const handleCompleteCategoriesSelection = () => {
        handleOpenModal()
        setTypeId(emisiones[0]?.tipo)
    }

    const handleDeleteEmision = (id) => {
        setIdToDelete(id)
        handleOpenConfirmationModal()
    }

    return (
        <div className='EmisionesTable mt-8'>
            <h3 className='mb-2'>{label}</h3>
            <div className="overflow-hidden border border-gray-200 shadow-md ">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="">
                        <tr >
                            <th scope="col" className="px-6 pt-4 font-bold text-darkslategray-200"></th>
                            <th scope="col" className="px-6 pt-4 font-bold text-darkslategray-200">Categoría GEI</th>
                            <th scope="col" className="px-6 pt-4 font-bold text-darkslategray-200 text-center">Ton C02eq</th>
                            <th scope="col" className="px-6 pt-4 font-bold text-darkslategray-200 text-center">Estado</th>
                            <th scope="col" className="px-6 pt-4 font-bold text-darkslategray-200"></th>
                            <th scope="col" className="px-6 pt-4 font-bold text-darkslategray-200"></th>
                        </tr>
                    </thead>
                    <tbody className=" divide-y divide-lightgray-200">
                        {emisiones?.map(emision => (
                            <tr key={emision?.id} className="">
                                <td className="px-6 py-4">
                                    <div className="relative h-[60px] w-[60px]">
                                        <img
                                            className="h-full w-full rounded-lg object-cover object-center"
                                            src={Illustrations[emision?.iconChecked] || Illustrations["Add_OtherCategory_Azul"]}
                                            alt={emision?.nombre}
                                        />
                                    </div>
                                </td>
                                <td className="flex px-6 py-8 text-gray-900">
                                    <p className="font-medium text-gray-700">{emision?.nombre}</p>
                                </td>
                                <td className="px-6 py-4 text-center">{emision?.value_co2 ?? "-"}</td>
                                <td className="px-6 py-4">
                                    <StateIndicator state={emision?.status} />
                                </td>
                                <td className="px-6 py-4">
                                    {emision.nombre && (
                                        <Link
                                            to={`/app/registros/reporte/${emision.nombre}`}
                                            state={{ logId: emision.log_id }} // Pasar el ID como parte del estado
                                            className="text-[inherit] relative lg:ml-0 cursor-pointer flex items-center">
                                            <b className="[text-decoration:underline] tracking-[0.08px] leading-[22px] text-black font-semibold">
                                                Subir información
                                            </b>
                                        </Link>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center gap-4">
                                        <a>
                                            <img src={InformationIcon} />
                                        </a>
                                        <a >
                                            <img className='cursor-pointer' src={TrushIcon} onClick={() => handleDeleteEmision(emision?.log_id)} />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='h-16 bg-primary-gris4 rounded-b-lg flex items-center pl-4'>
                <span
                    className='text-gray-100 font-bold underline underline-offset-4 cursor-pointer'
                    onClick={handleCompleteCategoriesSelection}
                >
                    + Agregar otra categoría GEI
                </span>
            </div>
        </div>
    )
}