import { useSelector } from "react-redux";
import { Illustrations } from "../../../assets/Illustrations/IllustrationProvider";
import { Icons } from "../../../assets/icons/IconProvider";

const { office_VSuave } = Illustrations; //Illustrations
const { Arrow1Icon } = Icons; //Icons
export const AllCenterTable = () => {

    const { register: { centers } } = useSelector(state => state.persistedData); // selector para obtener los datos del registro

    return (
        <div className='flex justify-center flex-col items-start w-auto bg-primary-white1 rounded-xl gap-2 py-4'>
            <h3 className='p-5 text-left'>Centros de trabajo</h3>
            {centers.map((center) => (
                <div className='flex items-center justify-start w-[90%] gap-2 ml-5 cursor-pointer hover:bg-slate-50 hover:rounded-xl' key={center.nombre}>
                    <img className='w-[70px] h-[70px]' src={office_VSuave} />
                    <div className='flex flex-col flex-grow'> {/* Utiliza flex-grow */}
                        <p className='font-bold text-f20 text-darkslategray-200'>{center.nombre}</p>
                        <p className='text-dimgray-200'>{center.nombre_ciudad}</p>
                    </div>
                    <div>
                        <img
                            className="w-[5.60px] h-[10.05px]"
                            alt="arrow-right"
                            src={Arrow1Icon}
                        />
                    </div>
                </div>
            ))}
        </div>


    )
}
