//Dependencies
import { useNavigate } from "react-router-dom";
//Routes
import { paths } from "../../../routes/paths";
//Assets
import { Imagenes } from "../../../assets/Images/ImagenProvider";

const { SuccessfulRegistration, Logo_carbonlytics_principal, } = Imagenes; // importa las imágenes

export const CompletionForgotPassword = () => {

    const navigate = useNavigate(); // hook para navegar entre páginas

    return (
        <>
            <img
                className="w-full h-screen object-cover"
                alt=""
                src={SuccessfulRegistration}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 bg-white bg-opacity-90 shadow-md rounded-2xl p-12 text-center">

                <b className="fzp font-bold text-4xl leading-[45px] tracking-[0.36px] text-primary-title1 text-left">
                    ¡Bien hecho!
                </b>


                <div className='mt-4 text-center gap-2'>
                    <p className="font-normal text-base leading-[22px] tracking-[0.08px] text-darkslategray-200 opacity-100 mb-4">
                        Contraseña creada correctamente.
                    </p>
                    <button
                        onClick={() => navigate(paths.LOGIN)}
                        className="cursor-pointer border-none p-0 bg-orangered-100 rounded-3xs shadow-[0px_2px_6px_rgba(206,_65,_0,_0.4)] w-[318px] h-[42px] mx-auto"
                    >
                        <b className="text-lg tracking-[0.09px] font-sora text-white text-center">
                            Ir a iniciar sesión
                        </b>
                    </button>
                </div>

                <div className='mt-12 flex justify-center'>
                    <img src={Logo_carbonlytics_principal} alt="Logo carbonlytics" className="w-[172px] h-[28px]" />
                </div>

            </div>
        </>
    )
}
