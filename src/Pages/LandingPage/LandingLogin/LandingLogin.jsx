//Dependencies
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
//Routes
import { paths } from "../../../routes/paths";
//Components
import { CustomAlert } from '../../../components/molecules/customAlert/customAlert';
import { LandingHeader } from '../../../components/organisms/header/LandingHeader';
//Redux
import { useAppDispatch } from '../../../redux/store';
//Actions
import { LogingAction } from '../../../redux/actions/AuthAction';

import { Imagenes } from "../../../assets/Images/wImagenProvider";
// Components
const { ImgBanner, Logocarbonlytic } = Imagenes;
//Hola

export const LandingLogin = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [textAlert, setTextAlert] = useState(null);

    const defaultValues = {
        email: '',
        password: '',
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { }
    } = useForm({ defaultValues });

    const dataForm = watch();

    const onSubmit = async () => {
        // Lógica de autenticación, verificación de credenciales, etc.
        const user = {
            email: dataForm.email,
            contraseña: dataForm.password,
            // otros datos del usuario
        };

        const { error, verify } = await dispatch(LogingAction(user, navigate)); // envía la acción de login con el usuario autenticado
        error && setTextAlert(error); // si hay un error, muestra el mensaje
        verify && navigate(paths.APPHOME); // si el usuario está autenticado, redirige a la página de inicio
    }

    return (
        <div className="LandingLogin w-full flex flex-col bg-white">
            <LandingHeader />
            <div className='flex'>
                <img
                    className="w-[50%] h-screen object-cover"
                    alt=""
                    src={ImgBanner}
                />
                <div className='w-[50%] flex justify-center items-center'>
                    <form onSubmit={handleSubmit(onSubmit)} className="FormLanding relative w-[450px] h-[451px]">
                        <div className="absolute w-full top-[calc(50%_-_124.5px)] right-[0px] left-[0px] h-[67px]">
                            <label className="absolute top-[0px] left-[1px] text-lg tracking-[0.09px] font-sora text-gray-100 text-left">
                                Correo electrónico
                            </label>
                            <input
                                className="bg-white absolute w-full right-[0px] bottom-[0px] left-[0px] rounded-8xs box-border h-[37px] border-[0.5px] border-solid border-primary-gris3 pl-4"
                                type="email"
                                placeholder="Escribir correo"
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className="absolute w-full top-[calc(50%_-_29.5px)] right-[0px] left-[0px] h-[67px]">
                            <label className="absolute top-[0px] left-[1px] text-lg tracking-[0.09px] font-sora text-gray-100 text-left">
                                Contraseña
                            </label>
                            <input
                                className="bg-white absolute w-full right-[0px] bottom-[0px] left-[0px] rounded-8xs box-border h-[37px] border-[0.5px] border-solid border-primary-gris3 pl-4"
                                type="password"
                                placeholder="******"
                                {...register("password", { required: true })}
                            />
                        </div>
                        <b className="fzp absolute top-[0px] left-[calc(50%_-_132px)] text-21xl tracking-[0.4px] leading-[50px] text-darkslategray text-left text-primary-title1">
                            Iniciar sesión
                        </b>
                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_+_97.5px)] left-[0px] text-base [text-decoration:underline] tracking-[0.08px] leading-[22px] font-sora text-gray-100 text-center inline-block">
                            ¿Olvidaste tu contraseña?
                        </button>
                        <button
                            type="submit"
                            className="cursor-pointer [border:none] p-0 bg-orangered-100 absolute bottom-[41px] left-[calc(50%_-_158px)] rounded-3xs shadow-[0px_2px_6px_rgba(206,_65,_0,_0.4)] w-[318px] h-[42px]"
                        >
                            <b className="absolute top-[10px] left-[120px] text-lg tracking-[0.09px] font-sora text-white text-center">
                                Ingresar
                            </b>
                        </button>
                        <div className="cursor-pointer absolute bottom-[0px] left-[calc(50%_-_155px)] text-base [text-decoration:underline] tracking-[0.08px] leading-[22px] font-sora text-gray-100 text-center">
                            ¿Aún no tienes una cuenta? Regístrate
                        </div>
                        {textAlert && (
                            // <div className='mt-10 flex justify-center'>
                            <div className='mt-10 absolute top-[calc(50%_+_7.5px)] left-[0px]'>
                                <CustomAlert
                                    message={textAlert}
                                    type='error'
                                />
                            </div>
                        )}
                    </form>
                </div>
            </div>
            <img
                className="fixed bottom-[53.99px] left-[224px] w-[184.33px] h-[29.86px]"
                alt=""
                src={Logocarbonlytic}
            />
        </div>
    );
};