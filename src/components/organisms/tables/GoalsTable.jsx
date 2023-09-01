import { useSelector } from "react-redux";

export default function GoalsTable() {

    const { register: { centers } } = useSelector(state => state.persistedData); // selector para obtener los datos del registro

    return (
        <div className='w-[400px] h-auto bg-primary-title1 rounded-xl p-8'>
            <p className='text-primary-white1 text-f18 font-bold mb-4'>Metas</p>
            {centers.map((center) => (
                <span key={center.nombre}>
                    <p className='text-primary-white1 text-f18 font-bold mb-2'>Reducción de emisiones</p>
                    <p className='text-primary-white1 text-f18'>{center.nombre}</p>
                    <p className='text-primary-white1'>01/01/2023 - 31/12/2023</p>
                    <p className='text-primary-white1 ml-14'>8</p>
                    <div className='w-full h-3 rounded-md bg-primary-white1'><div className='w-1/5 h-3 rounded-md bg-primary-green2'></div></div>
                    <p className='text-primary-white1 text-right'>30 Ton</p>
                </span>
            ))}
        </div>
    )
}
