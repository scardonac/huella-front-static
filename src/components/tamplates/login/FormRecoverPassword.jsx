//Components
import { CustomAlert } from "../../molecules/customAlert/customAlert"
import { TextInputController } from "../../molecules/inputs/TextInputController"

export const FormRecoverPassword = ({
    control,
    handleSubmit,
    onSubmit,
    setTab,
    textAlert,
}) => {

    const rules = {
        required: 'Por favor, ingresa tu nueva contraseña',
        minLength: { value: 12, message: 'La contraseña debe tener al menos 12 caracteres' },
        validate: {
            hasNumber: value => /^(?=.*[0-9])/.test(value) || 'Debe contener al menos un número',
            hasUppercase: value => /^(?=.*[A-Z])/.test(value) || 'Debe contener al menos una mayúscula',
            hasLowercase: value => /^(?=.*[a-z])/.test(value) || 'Debe contener al menos una minúscula',
            hasSpecialChar: value => /^(?=.*[\W_])/.test(value) || 'Debe contener al menos un carácter especial (%-#)'
        }
    };

    return (
        <>
            <b className="fzp text-21xl tracking-[0.4px] leading-[50px] text-darkslategray text-left text-primary-title1">
                Restablecer contraseña
            </b>
            <form onSubmit={handleSubmit(onSubmit)} className="FormLanding mx-auto">
                <TextInputController
                    control={control}
                    name={'password'}
                    rules={rules}
                    label='Nueva contraseña'
                    placeholder='Escribe la contraseña'
                    type='password'
                    styleDiv='w-full'
                    styleLabel='text-lg tracking-[0.09px] font-sora text-gray-100 text-left'
                    styleInput='bg-white w-full rounded-8xs box-border h-[37px] border-[0.5px] border-solid border-primary-gris3 pl-4'
                />
                <TextInputController
                    control={control}
                    name={'passwordConfirm'}
                    rules={rules}
                    label='Confirmar contraseña'
                    placeholder='Escribe la contraseña'
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
                <div className='mt-4 text-center'>
                    <button
                        type="submit"
                        className="mt-6 cursor-pointer border-none p-0 bg-orangered-100 rounded-3xs shadow-[0px_2px_6px_rgba(206,_65,_0,_0.4)] w-[318px] h-[42px] mx-auto"
                    >
                        <b className="text-lg tracking-[0.09px] font-sora text-white text-center">
                            Crear contraseña
                        </b>
                    </button>
                </div>
            </form>
        </>
    )
}
