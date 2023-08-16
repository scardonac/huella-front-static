import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha"
//Components
import { CustomAlert } from "../../molecules/customAlert/customAlert"
import { TextInputController } from "../../molecules/inputs/TextInputController"
import { Controller } from "react-hook-form";
import { RulesPassword } from "../../molecules/rulesPassword/RulesPassword";
//Data
import { arrayRulesPassword } from "../../../Data";
import CheckboxController from "../../molecules/checkbox/CheckboxController";

export const FormRegister = ({
    control,
    handleSubmit,
    onSubmit,
    setTab,
    textAlert,
    watch,
}) => {

    const [flagCorrectPassword, setFlagCorrectPassword] = useState(false); // bandera para habilitar el input confirmPassword

    const password = watch('password'); // obtiene el valor del input password
    const confirmPassword = watch('confirmPassword'); // obtiene el valor del input confirmPassword

    const recaptchaRef = useRef();

    const onSubmitWithReCAPTCHA = async () => {
        const token = await recaptchaRef.current.executeAsync();
        console.log(token)
        // onSubmit(token);
        // apply to form data
    }

    return (
        <form onSubmit={handleSubmit(onSubmitWithReCAPTCHA)}>

            <b className="fzp text-xl tracking-[0.4px] leading-[50px] text-darkslategray text-center text-primary-title1 block opacity-100">
                Acá comienza tu camino a la
            </b>

            <b className="fzp text-21xl tracking-[0.4px] leading-[50px] text-darkslategray text-center text-primary-title1 block opacity-100">
                descarbonización
            </b>

            <b className="mt-12 text-lg leading-[26px] font-sora tracking-[0.09px] text-forestGray text-left block opacity-100">
                Información para el registro de tu empresa
            </b>

            <TextInputController
                control={control}
                name="companyName"
                label="Razón social de tu empresa"
                placeholder="Escribe la razón social"
                rules={{
                    required: {
                        value: true,
                        message: "La razón social es requerida",
                    },
                }}
                styleDiv='w-full mt-3'
                styleInput='bg-white w-full rounded-8xs box-border h-[37px] border-[0.5px] border-solid border-primary-gris3 pl-4'
                styleLabel='text-base tracking-[0.09px] font-sora text-primary-title2 text-t text-left opacity-100'
            />
            <TextInputController
                control={control}
                name="nit"
                label="Nit"
                placeholder="Escribe el nit"
                rules={{
                    required: {
                        value: true,
                        message: "El nit es requerido",
                    },
                }}
                styleDiv='w-full mt-3'
                styleInput='bg-white w-full rounded-8xs box-border h-[37px] border-[0.5px] border-solid border-primary-gris3 pl-4'
                styleLabel='text-base tracking-[0.09px] font-sora text-primary-title2 text-t text-left opacity-100'
            />

            <label className="flex items-center space-x-2 mt-3" >Elegir servicios</label>

            <div className="flex justify-center items-center w-full mt-3">
                <Controller
                    name="checkbox"
                    control={control}
                    render={({ field }) => (
                        <label className="flex items-center space-x-2 relative">
                            <input
                                type="checkbox"
                                // className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-primary-gris4 checked:bg-slate-100 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                className="h-4 w-4 border border-gray-300 rounded-sm bg-black checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"
                                {...field}
                            />
                            <span className="text-base leading-[26px] font-sora tracking-[0.08px] text-forestGray opacity-100" >Huella de carbono</span>
                        </label>
                    )}
                />
            </div>
            <div className="flex justify-center items-center w-full mt-3">
                <Controller
                    name="checkbox"
                    control={control}
                    render={({ field }) => (
                        <label className="flex items-center space-x-2 relative">
                            <input
                                type="checkbox"
                                // className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-primary-gris4 checked:bg-slate-100 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                className="h-4 w-4 border border-gray-300 rounded-sm bg-black checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"
                                {...field}
                            />
                            <span className="text-base leading-[26px] font-sora tracking-[0.08px] text-forestGray opacity-100" >Proyectos de energía</span>
                        </label>
                    )}
                />
            </div>
            <div className="flex justify-center items-center w-full mt-3">
                <Controller
                    name="checkbox"
                    control={control}
                    render={({ field }) => (
                        <label className="flex items-center space-x-2 relative">
                            <input
                                type="checkbox"
                                // className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-primary-gris4 checked:bg-slate-100 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                className="h-4 w-4 border border-gray-300 rounded-sm bg-black checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"
                                {...field}
                            />
                            <span className="text-base leading-[26px] font-sora tracking-[0.08px] text-forestGray opacity-100" >Proyectos de agro</span>
                        </label>
                    )}
                />
            </div>

            <TextInputController
                control={control}
                name="email"
                label="Correo electrónico"
                placeholder="Escribe el correo electrónico"
                rules={{
                    required: {
                        value: true,
                        message: "El correo electrónico es requerido",
                    },
                }}
                styleDiv='w-full mt-3'
                styleInput='bg-white w-full rounded-8xs box-border h-[37px] border-[0.5px] border-solid border-primary-gris3 pl-4'
                styleLabel='text-base tracking-[0.09px] font-sora text-primary-title2 text-t text-left opacity-100'
            />
            <TextInputController
                control={control}
                estrict={false}
                label='Nueva contraseña'
                name={'password'}
                placeholder='Escribe la contraseña'
                styleDiv='w-full mt-3'
                styleInput='bg-white w-full rounded-8xs box-border h-[37px] border-[0.5px] border-solid border-primary-gris3 pl-4'
                styleLabel='text-base tracking-[0.09px] font-sora text-primary-title2 text-t text-left opacity-100'
                type='password'
            />
            <TextInputController
                control={control}
                disabled={!flagCorrectPassword}
                estrict={false}
                label='Confirmar contraseña'
                name={'confirmPassword'}
                placeholder='Escribe la contraseña'
                styleDiv='w-full mt-3'
                styleInput='bg-white w-full rounded-8xs box-border h-[37px] border-[0.5px] border-solid border-primary-gris3 pl-4'
                styleLabel='text-base tracking-[0.09px] font-sora text-primary-title2 text-left opacity-100'
                type='password'
            />
            {/* <CustomAlert
                text={textAlert}
                type="error"
                className="mb-3"
                show={textAlert ? true : false}
            /> */}

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

            <div className="flex justify-center items-center w-full mt-3">
                {/* Agregar reCAPTCHA */}
                <ReCAPTCHA
                    onErrored={() => console.log("Error")}
                    onExpired={() => console.log("Expired")}
                    onLoaded={() => console.log("Loaded")}
                    onResolved={() => console.log("Resolved")}
                    onSizeChange={() => console.log("Size Change")}
                    ref={recaptchaRef}
                    // size="invisible"
                    sitekey="Your client site key"
                />
            </div>
            {/* <div className="flex justify-center items-center w-full mt-3">
                <Controller
                    name="checkbox"
                    control={control}
                    render={({ field }) => (
                        <label className="flex items-center space-x-2 relative">
                            <input
                                type="checkbox"
                                // className="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-primary-gris4 checked:bg-slate-100 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                className="h-4 w-4 border border-gray-300 rounded-sm bg-black checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"
                                {...field}
                            />
                            <span className="text-base leading-[26px] font-sora tracking-[0.08px] text-forestGray opacity-100" >Acepta el uso de datos personales y acuerdos de confidencialidad</span>
                        </label>
                    )}
                />
            </div> */}

            <div className="flex justify-center items-center w-4/5 mt-3">
                <CheckboxController
                    control={control}
                />
            </div>

            <div className='mt-4 text-center'>
                <button
                    type="submit"
                    className="mt-6 cursor-pointer border-none p-0 bg-orangered-100 rounded-3xs shadow-[0px_2px_6px_rgba(206,_65,_0,_0.4)] w-[318px] h-[42px] mx-auto"
                >
                    <b className="text-lg tracking-[0.09px] font-sora text-white text-center">
                        Finalizar
                    </b>
                </button>
            </div>


        </form>
    )
}
