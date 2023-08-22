//Dependencies
import { useNavigate } from "react-router-dom";
//Components
import { CustomAlert } from "../../molecules/customAlert/customAlert"
import { TextInputController } from "../../molecules/inputs/TextInputController"
import { paths } from "../../../routes/paths";

export const FormLogIn = ({
    control,
    handleSubmit,
    onSubmit,
    setTab,
    textAlert,
}) => {

    const navigate = useNavigate(); // hook para navegar entre páginas

    return (
        <>
            <b className="fzp text-21xl tracking-[0.4px] leading-[50px] text-darkslategray text-left text-primary-title1">
                Iniciar sesión
            </b>
            <form onSubmit={handleSubmit(onSubmit)} className="FormLanding mx-auto">
                <TextInputController
                    control={control}
                    name={'email'}
                    rules={{ required: 'Por favor, ingresa tu correo electrónico' }}
                    label='Correo electrónico'
                    placeholder='Escribe tu correo'
                    type='email'
                    styleDiv='w-full'
                    styleLabel='text-lg tracking-[0.09px] font-sora text-gray-100 text-left'
                    styleInput='bg-white w-full rounded-8xs box-border h-[37px] border-[0.5px] border-solid border-primary-gris3 pl-4'
                />
                <TextInputController
                    control={control}
                    name={'password'}
                    rules={{ required: 'Por favor, ingresar tu contraseña' }}
                    label='Contraseña'
                    placeholder='Ingresa tu contraseña'
                    type='password'
                    styleDiv='w-full mt-6'
                    styleLabel='text-lg tracking-[0.09px] font-sora text-gray-100 text-left'
                    styleInput='bg-white w-full rounded-8xs box-border h-[37px] border-[0.5px] border-solid border-primary-gris3 pl-4'
                />
                {textAlert && (
                    <div className='mt-4'>
                        <CustomAlert
                            message={textAlert}
                            type='error'
                        />
                    </div>
                )}
                <button
                    type="button"
                    className="mt-6 border-none p-0 bg-transparent text-base [text-decoration:underline] tracking-[0.08px] leading-[22px] font-sora text-gray-100 text-center"
                    onClick={() => setTab(2)}
                >
                    ¿Olvidaste tu contraseña?
                </button>
                <div className='mt-4 text-center'>
                    <button
                        type="submit"
                        className="mt-6 cursor-pointer border-none p-0 bg-orangered-100 rounded-3xs shadow-[0px_2px_6px_rgba(206,_65,_0,_0.4)] w-[318px] h-[42px] mx-auto"
                    >
                        <b className="text-lg tracking-[0.09px] font-sora text-white text-center">
                            Ingresar
                        </b>
                    </button>
                </div>
                <button
                    type="button"
                    className="mt-4 border-none p-0 bg-transparent text-base [text-decoration:underline] tracking-[0.08px] leading-[22px] font-sora text-gray-100 text-center"
                    onClick={() => navigate(paths.REGISTER)}
                >
                    ¿Aún no tienes una cuenta? Regístrate
                </button>
            </form>
        </>
    )
}
