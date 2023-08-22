//Dependencies
import { useState } from "react";
//Components
import { CustomAlert } from "../../molecules/customAlert/customAlert"
import { RulesPassword } from "../../molecules/rulesPassword/RulesPassword";
import { TextInputController } from "../../molecules/inputs/TextInputController"
//Data
import { arrayRulesPassword } from "../../../Data";

export const FormRecoverPassword = ({
    control,
    handleSubmit,
    onSubmit,
    textAlert,
    watch,
}) => {

    const [flagCorrectPassword, setFlagCorrectPassword] = useState(false); // bandera para habilitar el input confirmPassword

    const password = watch('password'); // obtiene el valor del input password
    const confirmPassword = watch('confirmPassword'); // obtiene el valor del input confirmPassword

    return (
        <>
            <b className="fzp text-21xl tracking-[0.4px] leading-[50px] text-darkslategray text-left text-primary-title1">
                Restablecer contraseña
            </b>
            <form onSubmit={handleSubmit(onSubmit)} className="FormLanding mx-auto">
                <TextInputController
                    control={control}
                    estrict={false}
                    label='Nueva contraseña'
                    name={'password'}
                    placeholder='Escribe la contraseña'
                    styleDiv='w-full'
                    styleInput='bg-white w-full rounded-8xs box-border h-[37px] border-[0.5px] border-solid border-primary-gris3 pl-4'
                    styleLabel='text-lg tracking-[0.09px] font-sora text-gray-100 text-left'
                    type='password'
                />
                <TextInputController
                    control={control}
                    disabled={!flagCorrectPassword}
                    estrict={false}
                    label='Confirmar contraseña'
                    name={'confirmPassword'}
                    placeholder='Escribe la contraseña'
                    styleDiv='w-full mt-6'
                    styleInput='bg-white w-full rounded-8xs box-border h-[37px] border-[0.5px] border-solid border-primary-gris3 pl-4'
                    styleLabel='text-lg tracking-[0.09px] font-sora text-gray-100 text-left'
                    type='password'
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

                <div className="mt-4 text-left bg-honeydew bg-no-repeat bg-padding-box bg-cover bg-center border-2 border-primary-80 rounded-3xs p-4 opacity-100">
                    <b className="font-bold text-base leading-[22px] tracking-[0.07px] text-primary-title2 text-left opacity-100">
                        Hagamos que tu cuenta sea segura
                    </b>

                    <div className="mt-3 mb-3">
                        <RulesPassword
                            arrayRulesPassword={arrayRulesPassword(password)}
                            confirmPassword={confirmPassword}
                            password={password}
                            setFlagCorrectPassword={setFlagCorrectPassword}
                        />
                    </div>

                    <b className="font-bold text-base leading-[22px] tracking-[0.07px] text-dimgray-200 text-left underline opacity-100 cursor-pointer">
                        Más sugerencias para tu contraseña
                    </b>
                </div>

            </form>
        </>
    )
}