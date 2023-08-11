//Dependencies
import { useState } from 'react';
import { Controller } from 'react-hook-form';
// Components
import { CustomAlert } from '../customAlert/customAlert';
// Assets
import { Icons } from '../../../assets/icons/IconProvider';

const { ViewPassword, HidePassword } = Icons; //Iconos

export const TextInputController = ({
    control,
    hadleOnEnter = () => { },
    label,
    name,
    placeholder = 'Ingrese',
    rules = {},
    type = 'text',
    styleDiv = 'flex flex-col w-2/4',
    styleLabel = 'text-left text-gray-600 font-normal leading-6 text-base opacity-100',
    styleInput = 'bg-white rounded-8xs box-border w-full h-[37px] border-[0.5px] border-solid border-dimgray-200 px-3 py-2'
}) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <div className={styleDiv}>
                    <label className={styleLabel}>{label}</label>
                    <div className="relative">
                        <input
                            {...field}
                            className={styleInput}
                            placeholder={placeholder}
                            type={showPassword ? 'text' : type}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    hadleOnEnter();
                                }
                            }}
                        />
                        {type === 'password' && (
                            <img
                                className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                                src={showPassword ? ViewPassword : HidePassword}
                                alt=""
                                onClick={() => setShowPassword(!showPassword)}
                            />

                        )}
                    </div>
                    {error && <CustomAlert message={error.message} type="error" />}
                </div>
            )}
        />
    );
};