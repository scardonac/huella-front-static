//Components
import { BackgroundTemplate } from "./BackgroundTemplate";
import { LandingHeader } from "../../organisms/header/LandingHeader";
//Assets
import { Imagenes } from "../../../assets/Images/ImagenProvider";

const { Logo_carbonlytics_principal, } = Imagenes; // importa las imágenes

export const CompletionRegistration = () => {

    return (
        <div className="w-full flex flex-col bg-white">
            <LandingHeader />
            <div className='flex gap-2'>
                <div className='w-full mt-14 flex flex-col justify-center items-center bg-fuchsia-400'>
                    <BackgroundTemplate>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 bg-white bg-opacity-90 shadow-md rounded-2xl p-12 text-center">

                            <b className="fzp font-bold text-4xl leading-[45px] tracking-[0.36px] text-primary-title1 text-left">
                                ¡Bien hecho!
                            </b>


                            <div className='mt-4 text-center gap-2'>
                                <p className="font-normal text-base leading-[22px] tracking-[0.08px] text-darkslategray-200 opacity-100 mb-4">
                                    <b>Enviamos un enlace a tu correo electrónico, </b>
                                    <p className="font-normal text-base leading-[22px] tracking-[0.08px] text-darkslategray-200 opacity-100 mb-4">
                                        ingresa y valida la información.
                                    </p>
                                </p>
                            </div>

                            <div className='mt-12 flex justify-center'>
                                <img src={Logo_carbonlytics_principal} alt="Logo carbonlytics" className="w-[172px] h-[28px]" />
                            </div>

                        </div>
                    </BackgroundTemplate>
                </div>
            </div>
        </div>

    )
}
