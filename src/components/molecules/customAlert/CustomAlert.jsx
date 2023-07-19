//Icons
import { Icons } from "../../../assets/icons/IconProvider";

const { IconAlertWhite } = Icons; //Iconos
export const CustomAlert = ({ message, type }) => {

    let containerStyle = {
        success: 'bg-green-600',
        error: 'bg-red-600',
        warning: 'bg-yellow-600',
        info: 'bg-blue-600',
    }

    return (
        <div className={`${containerStyle[type]} rounded h-[28px] flex items-center mt-1 whitespace-normal w-fit p-2`}>
            <img src={IconAlertWhite} alt="Icono de alerta" />
            <p className="ml-1 text-white text-left text-base leading-5 tracking-tighter font-normal opacity-100">
                {message}
            </p>
        </div>
    )
}