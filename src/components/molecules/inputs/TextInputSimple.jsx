// Components
import { CustomAlert } from '../customAlert/customAlert';

export const TextInputSimple = ({
    disabled = false,
    errors,
    label,
    nameRegister,
    placeholder = 'Ingrese',
    register,
    type = 'text',
    validations,
}) => {

    return (
        <>
            <label className='text-f18 text-primary-gris2'>{label}</label>
            <input
                className='rounded-md border border-dimgray-200 px-3 py-2'
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                {...register(nameRegister, validations)}
            />
            {errors && errors[nameRegister] && (
                <CustomAlert
                    message={errors[nameRegister].message}
                    type='error'
                />
            )}
        </>
    );
}
