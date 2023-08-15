//Dependencies
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
//Components
import { CompletionForgotPassword } from '../../../components/tamplates/login/CompletionForgotPassword';
import { FormRecoverPassword } from '../../../components/tamplates/login/FormRecoverPassword';
import { LandingHeader } from '../../../components/organisms/header/LandingHeader';
//Routes
import { paths } from "../../../routes/paths";
//Redux
import { useAppDispatch } from '../../../redux/store';
//Actions
import { LogingAction } from '../../../redux/actions/AuthAction';
//Assets
import { Imagenes } from "../../../assets/Images/ImagenProvider";

const { ImgBannerRecoverPassword, Logocarbonlytic } = Imagenes; // importa las imágenes

export const LandingRecoverPassword = () => {

    const navigate = useNavigate(); // hook para navegar entre páginas

    const [textAlert, setTextAlert] = useState(null); // estado para mostrar mensajes de error
    const [tab, setTab] = useState(1); // estado para cambiar entre pestañas

    const defaultValues = { // valores por defecto del formulario
        password: '',
        passwordConfirm: '',
    };

    const { // hook para controlar el formulario
        clearErrors,
        control,
        formState: { },
        handleSubmit,
        reset,
        watch,
    } = useForm({ defaultValues });

    const dataForm = watch(); // obtiene los datos del formulario

    // función para enviar el formulario
    const onSubmit = async () => {
        tab === 1 ? await onLogIn() : await onRecoveryPassword()
    }

    const onRecoveryPassword = async () => {
        // Lógica de autenticación, verificación de credenciales, etc.
        const user = {
            email: dataForm.email,
            // otros datos del usuario
        };
        // const { error, verify } = await dispatch(LogingAction(user, navigate)); // envía la acción de login con el usuario autenticado
        // error && setTextAlert(error); // si hay un error, muestra el mensaje
        // verify && navigate(paths.APPHOME); // si el usuario está autenticado, redirige a la página de inicio
        console.log('Recuperar contraseña', user)
        navigate(paths.RECOVERPASSWORDCOMPLETION)
    }

    const onLogIn = async () => {
        // Lógica de autenticación, verificación de credenciales, etc.
        const user = {
            email: dataForm.email,
            contraseña: dataForm.password,
            // otros datos del usuario
        };
        navigate(paths.RECOVERPASSWORDCOMPLETION)
        // const { error, verify } = await dispatch(LogingAction(user, navigate)); // envía la acción de login con el usuario autenticado
        // error && setTextAlert(error); // si hay un error, muestra el mensaje
        // verify && navigate(paths.APPHOME); // si el usuario está autenticado, redirige a la página de inicio
    }

    useEffect(() => {
        reset(defaultValues) // resetea los valores del formulario
        clearErrors() // limpia los errores del formulario
        setTextAlert(null) // limpia los mensajes de error
    }, [tab])

    return (
        <div className="LandingRecoverPassword w-full flex flex-col bg-white">
            <LandingHeader />
            <div className='flex gap-2'>
                <img
                    className="w-1/2 h-screen object-cover"
                    alt=""
                    src={ImgBannerRecoverPassword}
                />
                <div className='w-1/2 mt-14 flex flex-col justify-center items-center gap-12'>
                    {tab === 1 && (
                        <FormRecoverPassword
                            control={control}
                            handleSubmit={handleSubmit}
                            onSubmit={onSubmit}
                            textAlert={textAlert}
                            watch={watch}
                        />
                    )}
                    {tab === 2 && (
                        <CompletionForgotPassword
                            control={control}
                            handleSubmit={handleSubmit}
                            onSubmit={onSubmit}
                            setTab={setTab}
                            tab={tab}
                            textAlert={textAlert}
                        />
                    )}
                </div>
            </div>
            <img
                className="absolute bottom-[43.99px] left-[70px] w-[184.33px] h-[29.86px]"
                alt=""
                src={Logocarbonlytic}
            />
        </div>

    );
};