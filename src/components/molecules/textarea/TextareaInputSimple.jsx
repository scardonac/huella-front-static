// Components
import { CustomAlert } from '../customAlert/customAlert';

export const TextareaInputSimple = ({
    disabled = false,
    errors,
    label,
    nameRegister,
    placeholder = 'Ingrese',
    register,
    validations,
    rows = 1,
}) => {

    // validations,

    return (
        <>
            <label className='text-f18 text-primary-gris2'>{label}</label>
            <textarea
                className='px-2 py-2 rounded-md border border-dimgray-200'
                type="text"
                placeholder={placeholder}
                disabled={disabled}
                rows={rows}
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
