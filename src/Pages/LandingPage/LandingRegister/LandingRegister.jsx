//Dependencies
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
//Routes
import { paths } from "../../../routes/paths";
//Components
import { FormRegister } from '../../../components/tamplates/login/FormRegister';
import { FormForgotPassword } from '../../../components/tamplates/login/FormForgotPassword';
import { LandingHeader } from '../../../components/organisms/header/LandingHeader';
//Redux
import { useAppDispatch } from '../../../redux/store';
//Actions
import { LogingAction } from '../../../redux/actions/AuthAction';
//Assets
import { Imagenes } from "../../../assets/Images/ImagenProvider";

const { ImgBanner, Logocarbonlytic } = Imagenes; // importa las imágenes

export const LandingRegister = () => {

    const navigate = useNavigate(); // hook para navegar entre páginas
    const dispatch = useAppDispatch(); // hook para ejecutar acciones de redux

    const [textAlert, setTextAlert] = useState(null); // estado para mostrar mensajes de error
    const [tab, setTab] = useState(1); // estado para cambiar entre pestañas

    const defaultValues = {
        email: '',
        password: '',
    };

    const {
        clearErrors,
        control,
        formState: { },
        handleSubmit,
        reset,
        watch,
    } = useForm({ defaultValues });

    const dataForm = watch();

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
        setTab(3)
    }

    const onLogIn = async () => {
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

    useEffect(() => {
        reset(defaultValues) // resetea los valores del formulario
        clearErrors() // limpia los errores del formulario
        setTextAlert(null) // limpia los mensajes de error
    }, [tab])

    return (
        <div className="LandingRegister w-full h-auto flex flex-col bg-blancoMisty">
            <LandingHeader />
            <div className="flex flex-col items-center justify-center w-full h-full p-5">
                <div className='flex w-1/2 justify-center items-center bg-white border-2 border-primary-80 rounded-3xs p-4 mt-20 opacity-100'>
                    <FormRegister
                        control={control}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                        setTab={setTab}
                        textAlert={textAlert}
                        watch={watch}
                    />
                </div>
            </div>
        </div>
    );
};