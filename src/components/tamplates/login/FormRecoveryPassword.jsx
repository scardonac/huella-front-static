//Components
import { CustomAlert } from "../../molecules/customAlert/customAlert"
import { SuccessfulMailing } from "./SuccessfulMailing"
import { TextInputController } from "../../molecules/inputs/TextInputController"

export const FormRecoveryPassword = ({
    control,
    handleSubmit,
    onSubmit,
    setTab,
    tab,
    textAlert,
}) => {

    return (
        <>
            {tab === 2 && (
                <>
                    <b className="fzp font-bold text-4xl leading-[45px] tracking-[0.36px] text-primary-title1 text-left opacity-100">
                        ¿Olvidaste tu contraseña?
                    </b>
                    <h1 className="w-2/3 font-normal text-base leading-[22px] tracking-[0.08px] text-darkslategray-200 text-left opacity-100">
                        No te preocupes, escribe el correo asociado a tu cuenta y te enviaremos las instrucciones para restablecer la contraseña.
                    </h1>

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
                        {textAlert && (
                            <div className='mt-4'>
                                <CustomAlert
                                    message={textAlert}
                                    type='error'
                                />
                            </div>
                        )}
                        <div className='mt-4 flex flex-col justify-center items-center gap-1'>
                            <button
                                type="submit"
                                className="mt-6 cursor-pointer border-none p-0 bg-orangered-100 rounded-3xs shadow-[0px_2px_6px_rgba(206,_65,_0,_0.4)] w-[318px] h-[42px] mx-auto"
                            >
                                <b className="text-lg tracking-[0.09px] font-sora text-white text-center">
                                    Recuperar contraseña
                                </b>
                            </button>
                            <button
                                type="button"
                                className="mt-6 border-none p-0 bg-transparent text-base [text-decoration:underline] tracking-[0.08px] leading-[22px] font-sora text-gray-100 text-center"
                                onClick={() => setTab(1)}
                            >
                                Volver a iniciar sesión
                            </button>
                        </div>
                    </form>

                </>
            )}
            {tab === 3 && (
                <SuccessfulMailing
                    setTab={setTab}
                />
            )}
        </>
    )
}
