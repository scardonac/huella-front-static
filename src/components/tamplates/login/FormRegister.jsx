//Dependencies
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha"
//Components
import { CheckboxInput } from "../../molecules/checkbox/CheckboxInput";
import { CustomAlert } from "../../molecules/customAlert/customAlert";
import { RulesPassword } from "../../molecules/rulesPassword/RulesPassword";
import { TextInputController } from "../../molecules/inputs/TextInputController"
import Modal from "../../organisms/modals/Modal";
//Data
import { arrayRulesPassword } from "../../../Data";

export const FormRegister = ({
    control,
    handleSubmit,
    onSubmit,
    setValue,
    watch,
    textAlert,
}) => {

    const [flagCorrectPassword, setFlagCorrectPassword] = useState(false); // bandera para habilitar el input confirmPassword
    const [openModal, setOpenModal] = useState(false); // bandera para habilitar el input confirmPassword
    const [viewPassword, setViewPassword] = useState(false); // bandera para habilitar el componente RulesPassword
    const [errorCheckbox, setErrorCheckbox] = useState(false); // bandera para habilitar el componente RulesPassword
    const [isReCAPTCHAValid, setIsReCAPTCHAValid] = useState(null); // bandera para validar el reCAPTCHA

    const password = watch('password'); // obtiene el valor del input password
    const confirmPassword = watch('confirmPassword'); // obtiene el valor del input confirmPassword

    const dataForm = watch(); // obtiene los datos del formulario

    const recaptchaRef = useRef(null);

    const onChangeReCAPTCHA = (value) => {
        if (recaptchaRef.current.getValue()) {
            setIsReCAPTCHAValid(recaptchaRef.current.getValue());
        } else {
            setIsReCAPTCHAValid(null);
        }
    }

    const habdleOnEnter = async () => {
        const validate = await validateCheckbox();
        setErrorCheckbox(validate);
        if (validate || !isReCAPTCHAValid) return
        await onSubmit();
    }

    // array de objetos para crear los checkbox
    const namesCheckbox = [
        {
            name: 'carbonFootprint',
            label: 'Huella de carbono'
        },
        {
            name: 'powerProjects',
            label: 'Proyectos de energía'
        },
        {
            name: 'agriculturalProjects',
            label: 'Proyectos de agro'
        },
    ]

    const textModal = {
        title: 'Características de las contraseñas seguras',
        text: [
            '• Deben ser fáciles de recordar, pero no sean fácilmente detectables por otras personas.',
            '• No deben contener caracteres iguales consecutivos (números, letras o palabras continuas con una relación directa).',
            '• Las contraseñas no deben estar basadas en algún dato que otra persona pueda adivinar u obtener fácilmente mediante información relacionada con la persona, por ejemplo, nombres, razón social de la empresa o su abreviatura, números de teléfono, fecha de nacimiento, entre otros.',
            '• Todas las claves de administrador deben estar custodiadas.',
        ]
    }

    const validateCheckbox = () => {
        if ((dataForm.carbonFootprint || dataForm.powerProjects || dataForm.agriculturalProjects) && dataForm.confidentiality) {
            return false;
        } else {
            return true;
        }
    }

    console.log(textAlert, 'textAlert')

    return (
        // <form onSubmit={handleSubmit(onSubmitWithReCAPTCHA)} className="w-8/12">
        <form onSubmit={handleSubmit(habdleOnEnter)} className="w-8/12">

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
                    pattern: {
                        value: /^[0-9]{9,10}$/,
                        message: "El nit debe tener entre 9 y 10 dígitos numéricos",
                    },
                }}
                styleDiv='w-full mt-3'
                styleInput='bg-white w-full rounded-8xs box-border h-[37px] border-[0.5px] border-solid border-primary-gris3 pl-4'
                styleLabel='text-base tracking-[0.09px] font-sora text-primary-title2 text-t text-left opacity-100'
            />
            {textAlert && <CustomAlert message={textAlert} type="error" />}

            <label className="flex items-center space-x-2 mt-3" >Elegir servicios</label>

            <div className="flex flex-col items-start w-full mt-3 gap-3 md:flex-row md:flex-wrap">
                {namesCheckbox.map((item, index) => (
                    <CheckboxInput
                        key={index}
                        setValue={setValue}
                        name={item.name}
                        label={item.label}
                        styleDivTrue='flex items-center bg-white border-primary-title1 border-[0.5px] border-solid bg-opacity-100 bor bg-no-repeat bg-contain md:bg-cover rounded-3xs opacity-100 p-[6px] md:w-auto'
                        styleDivFalse='flex items-center bg-lightHaze bg-opacity-100 bg-no-repeat bg-contain md:bg-cover rounded-3xs opacity-100 p-2 md:w-auto'
                        styleLabel='text-primary-gris3 font-normal leading-6 text-base tracking-[0.08px] opacity-100 whitespace-nowrap cursor-pointer'
                        isChecked={dataForm.name} // Pasar el estado del checkbox al componente CheckboxInput
                    />
                ))}
            </div>
            {errorCheckbox && <CustomAlert message='Debes seleccionar al menos un servicio' type="error" />}
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
                rules={{
                    required: {
                        value: true,
                    },
                }}
                label='Nueva contraseña'
                name={'password'}
                placeholder='Escribe la contraseña'
                styleDiv='w-full mt-3'
                styleInput='bg-white w-full rounded-8xs box-border h-[37px] border-[0.5px] border-solid border-primary-gris3 pl-4'
                styleLabel='text-base tracking-[0.09px] font-sora text-primary-title2 text-t text-left opacity-100'
                type='password'
                inputProps={{ onFocus: () => setViewPassword(true) }}
            />
            <TextInputController
                control={control}
                disabled={!flagCorrectPassword}
                estrict={false}
                rules={{
                    required: {
                        value: true,
                    },
                }}
                label='Confirmar contraseña'
                name={'confirmPassword'}
                placeholder='Escribe la contraseña'
                styleDiv='w-full mt-3'
                styleInput='bg-white w-full rounded-8xs box-border h-[37px] border-[0.5px] border-solid border-primary-gris3 pl-4'
                styleLabel='text-base tracking-[0.09px] font-sora text-primary-title2 text-left opacity-100'
                type='password'
            />


            {viewPassword && (
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
                    <b
                        onClick={() => setOpenModal(true)}
                        className="font-bold text-base leading-[22px] tracking-[0.07px] text-dimgray-200 text-left underline opacity-100 cursor-pointer"
                    >
                        Más sugerencias para tu contraseña
                    </b>
                </div>
            )
            }


            < div className="flex justify-center items-center w-full mt-3">
                <ReCAPTCHA
                    onChange={onChangeReCAPTCHA}
                    ref={recaptchaRef}
                    sitekey="6LdQ8MAnAAAAAIhOlAPW88aHyAm49jJz6jamqxjW"
                />
            </div>

            <CheckboxInput
                setValue={setValue} // Pasa la instancia de control proporcionada por react-hook-form
                name="confidentiality" // El nombre del campo en el formulario
                label="Acepta el uso de datos personales y acuerdos de confidencialidad" // El texto del label
                styleDivTrue='flex justify-start items-center mt-3 w-96' // Estilos del div contenedor
                styleLabel='text-forestGray text-base  tracking-[0.08px] cursor-pointer' // Estilos del label
            />

            {(errorCheckbox) && <CustomAlert message='Debes aceptar terminos y condiciones' type="error" />}
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

            {openModal && (
                <Modal
                    isOpen={openModal}
                    closeModal={() => setOpenModal(false)}
                    actionButtonFist={() => setOpenModal(false)}
                >
                    {<div className='h-auto flex flex-col w-full gap-6 overflow-auto'>
                        <p className="text-xl  font-bold">{textModal.title}</p>

                        <div className='flex flex-col gap-5'>
                            {textModal.text.map((item, index) => (
                                <p
                                    key={index}
                                    className='text-sora text-base tracking-[0.09px] text-dimgray-200 opacity-100'
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                    }
                </Modal>
            )}
        </form>
    )
}
