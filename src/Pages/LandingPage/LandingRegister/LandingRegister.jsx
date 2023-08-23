//Dependencies
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
//Routes
import { paths } from "../../../routes/paths";
//Components
import { FormRegister } from '../../../components/tamplates/login/FormRegister';
import { LandingHeader } from '../../../components/organisms/header/LandingHeader';
//Redux
import { useAppDispatch } from '../../../redux/store';
//Actions
import { SignUpAction } from '../../../redux/actions/AuthAction';

export const LandingRegister = () => {

    const navigate = useNavigate(); // hook para navegar entre páginas
    const dispatch = useAppDispatch(); // hook para ejecutar acciones de redux

    const [textAlert, setTextAlert] = useState(null); // estado para mostrar mensajes de error
    const [tab, setTab] = useState(1); // estado para cambiar entre pestañas

    const defaultValues = {
        agriculturalProjects: false,
        carbonFootprint: false,
        companyName: '',
        confidentiality: false,
        confirmPassword: '',
        email: '',
        nit: '',
        password: '',
        powerProjects: false,
    };

    const {
        clearErrors,
        control,
        formState: { },
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm({ defaultValues });

    const dataForm = watch();

    // función para enviar el formulario
    const onSubmit = async () => {
        await onRegister()
    }

    const onRegister = async () => {
        // Lógica de autenticación, verificación de credenciales, etc.
        let dataRegister = {
            user: {
                nombre: dataForm.companyName,
                contraseña: dataForm.password,
                email: dataForm.email,
                empresa: dataForm.companyName,
                carbon_agro: dataForm.agriculturalProjects,
                carbon_energia: dataForm.powerProjects,
                carbon_huella: dataForm.carbonFootprint,
            },
            empresa_nit: dataForm.nit,
        }

        const { error, verify } = await dispatch(SignUpAction(dataRegister)); // envía la acción de login con el usuario autenticado
        error && setTextAlert(error); // si hay un error, muestra el mensaje
        verify && navigate(paths.REGISTERCOMPLETION); // si el usuario está autenticado, redirige a la página de inicio
    }

    useEffect(() => {
        reset(defaultValues) // resetea los valores del formulario
        clearErrors() // limpia los errores del formulario
        setTextAlert(null) // limpia los mensajes de error
    }, [tab])

    return (
        <div className="LandingRegister w-full h-auto flex flex-col bg-blancoMisty justify-start items-center">
            <LandingHeader />
            <div className="flex justify-center items-center bg-white border-2 border-primary-80 rounded-3xs p-4 mt-24 opacity-100 w-2/4">
                <FormRegister
                    control={control}
                    errors={errors}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    setTab={setTab}
                    setValue={setValue}
                    textAlert={textAlert}
                    watch={watch}
                />
            </div>

        </div>
    );
};