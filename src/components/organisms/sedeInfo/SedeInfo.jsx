//Dependencies
import { Link } from "react-router-dom";
//Assets
import { Illustrations } from "../../../assets/Illustrations/IllustrationProvider";
import { Icons } from "../../../assets/icons/IconProvider";

const { Add_OtherCategory_Azul } = Illustrations; //Illustrations

const { BackArrowIcon } = Icons; //Iconos

export const SedeInfo = ({
    icon = Add_OtherCategory_Azul,
    name = "Sier centro de control",
    subName = "01/01/2023 - 31/12/2023",
    functionNavigate = null,
}) => {
    return (
        <div className='flex flex-col items-start mb-10'>
            {functionNavigate && (
                <div className='flex items-center mb-3 text-darkgray'>
                    <img
                        className="mr-1 w-[5.59px] h-[10.05px]"
                        alt=""
                        src={BackArrowIcon}
                    />
                    <Link to="#" onClick={functionNavigate} className="text-[inherit] relative lg:ml-0 cursor-pointer flex items-center">
                        <b className="[text-decoration:underline] tracking-[0.08px] leading-[22px]">
                            Volver
                        </b>
                    </Link>
                </div>
            )}
            <div className='flex items-center gap-3 mt-6'>
                <img className='w-[70px] h-[70px]' src={icon} />
                <div>
                    <p className='font-bold text-f20 text-darkslategray-200'>{name}</p>
                    <p className='text-dimgray-200'>{subName}</p>
                </div>
            </div>
        </div>
    )
}