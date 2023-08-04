//Dependencies
import { Controller } from 'react-hook-form';
// Components
import { CustomAlert } from '../customAlert/customAlert';

export const TextInputController = ({
    control,
    hadleOnEnter = () => { },
    label,
    name,
    placeholder = 'Ingrese',
    rules = {},
    type = 'text',
}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <div className='flex flex-col w-2/4'>
                    <label className='text-left text-gray-600 font-normal leading-6 text-base opacity-100'>
                        {label}
                    </label>
                    <input
                        {...field}
                        className='bg-white rounded-8xs box-border w-full h-[37px] border-[0.5px] border-solid border-dimgray-200 px-3 py-2' // Agregamos padding-left: 3 a este estilo
                        placeholder={placeholder}
                        type={type}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                hadleOnEnter();
                            }
                        }}
                    />
                    {error && (
                        <CustomAlert
                            message={error.message}
                            type='error'
                        />
                    )}
                </div>
            )}
        />
    );
};