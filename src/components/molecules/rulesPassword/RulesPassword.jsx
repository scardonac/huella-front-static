import { useEffect, useState } from "react";

export const RulesPassword = ({
    arrayRulesPassword,
    confirmPassword,
    password,
    setFlagCorrectPassword,
}) => {

    // función para validar las reglas de la contraseña
    const validatePassword = (valid) => valid;

    const [isCorrectPassword, setIsCorrectPassword] = useState(true); // estado para mostrar el mensaje de contraseña correcta

    // valida las reglas de la contraseña
    useEffect(() => {
        // valida que todas las reglas de la contraseña sean correctas
        const passwordCorrectAll = arrayRulesPassword.every((rule) => validatePassword(rule.valid));

        if (passwordCorrectAll) { // si todas las reglas son correctas, muestra el mensaje de contraseña correcta
            setIsCorrectPassword(true);
            setFlagCorrectPassword(true);
        } else {
            const timeoutId = setTimeout(() => { // si no todas las reglas son correctas, muestra los mensajes de las reglas de la contraseña
                setIsCorrectPassword(false);
                setFlagCorrectPassword(false);
            }, 1000);
            return () => clearTimeout(timeoutId); // limpia el timeout al desmontar el componente
        }
    }, [arrayRulesPassword, password, confirmPassword, setFlagCorrectPassword]); // se ejecuta cada vez que cambia el valor de las reglas de la contraseña, la contraseña o la confirmación de la contraseña

    const getPasswordMatchMessage = () => {
        if (password === confirmPassword) {
            return "✔ Las contraseñas coinciden";
        } else {
            return "• Las contraseñas no coinciden";
        }
    };

    // renderiza los mensajes de las reglas de la contraseña
    const renderRuleMessage = (rule, index) => {
        const isValid = validatePassword(rule.valid);
        return (
            <h1
                key={index}
                className={`font-normal text-base leading-[20px] tracking-[0.07px] ${isValid ? "text-primary-title1" : "text-primary-error1"
                    } text-left opacity-100`}
            >
                {isValid ? "✔" : "•"} {rule.text}
            </h1>
        );
    };

    return (
        <>
            {isCorrectPassword ? ( // si la contraseña es correcta, muestra el mensaje de contraseña correcta
                <h1
                    className={`font-normal text-base leading-[20px] tracking-[0.07px] ${password === confirmPassword
                        ? "text-primary-title1"
                        : "text-primary-error1"
                        } text-left opacity-100`}
                >
                    {getPasswordMatchMessage()}
                </h1>
            ) : ( // si la contraseña es incorrecta, muestra los mensajes de las reglas de la contraseña
                arrayRulesPassword.map(renderRuleMessage)
            )}
        </>
    );
};
