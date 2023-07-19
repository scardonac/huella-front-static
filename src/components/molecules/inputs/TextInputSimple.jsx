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
                className='px-2 py-2 rounded-md border border-dimgray-200'
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
