//Dependencies
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//Assets
import { Illustrations } from "../../../assets/Illustrations/IllustrationProvider"
//Redux
import { useAppDispatch } from "../../../redux/store";
//Slices
import { getCenterCurrentCase } from "../../../redux/slices/RegisterSlice";

const { DefaultIlluBlue } = Illustrations; //Illustration


export const SedeDetailCard = ({ sector_productivo_id = null, address = "Cra XXXXX", employees = "000", description = "descripción", icon = DefaultIlluBlue }) => {

    const dispatch = useAppDispatch();

    const { register: { productiveSector } } = useSelector(state => state.persistedData);

    const [productiveSelected, setProductiveSelected] = useState({})

    useEffect(() => {
        // Actualizar el valor de productiveSelected con los datos de la base de datos
        if (sector_productivo_id) {
            const newProductive = productiveSector.find(item => item.id === sector_productivo_id)
            setProductiveSelected(newProductive)
            // dispatch(getCenterCurrentCase(newProductive));
        }
    }, [productiveSector])

    return (
        <div className='pt-5 flex flex-col gap-4'>
            <div>
                <label className='text-f18 text-primary-gris2'>Tipo de espacio</label>
                <div
                    className={`bg-primary-white1 border-2 border-solid w-full px-10 ${false ? " border-teal-600" : ""} flex gap-4 items-center justify-between py-2 pl-2 pr-5 rounded-lg cursor-pointer`}
                    onClick={null}
                >
                    <div className='flex items-center gap-4'>
                        <img className='w-[60px] h-[60px]'
                            src={Illustrations[productiveSelected?.iconChecked]}
                        />
                        <span>{productiveSelected?.nombre}</span>
                    </div>
                </div>
            </div>
            <div>
                <label className='text-f18 text-primary-gris2'>Ubicación</label>
                <p>{address}</p>
            </div>
            <div>
                <label className='text-f18 text-primary-gris2'>Empleados</label>
                <p>{employees}</p>
            </div>
            <div>
                <label className='text-f18 text-primary-gris2'>Descripción</label>
                <p>{description}</p>
            </div>
        </div>
    )
}