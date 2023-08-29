import { useSelector } from "react-redux";
import { Illustrations } from "../../../assets/Illustrations/IllustrationProvider";

const { office_VSuave } = Illustrations; //Illustrations
export const AllCenterTable = () => {

    const { register: { centers } } = useSelector(state => state.persistedData); // selector para obtener los datos del registro

    console.log(centers, 'centers')
    return (
        <div className='flex justify-center items-center w-[400px] h-[182px] bg-primary-white1 rounded-xl'>
            {centers.map((center) => (
                <div className='flex items-center gap-3'>
                    <img className='w-[70px] h-[70px]' src={office_VSuave} />
                    <div>
                        <p className='font-bold text-f20 text-darkslategray-200'>{center.nombre}</p>
                        <p className='text-dimgray-200'>{`Medellín`}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
