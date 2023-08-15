// Dependencies
import { useEffect } from "react";

export const RulesPassword = ({
    arrayRules,
    confirmPassword,
    flagCorrectPassword,
    password,
    setFlagCorrectPassword,
}) => {

    // Validar contraseña
    const validatePassword = (valid) => {
        if (valid) {
            return true;
        } else {
            return false;
        }
    };

    // Validar contraseña
    useEffect(() => {
        const passwordCorrect = arrayRules.map(rule => validatePassword(rule.valid)); // map para obtener un array de booleanos
        const passwordCorrectAll = passwordCorrect.every(value => value === true); // every para validar que todos los valores del array sean true
        if (passwordCorrectAll) {
            setFlagCorrectPassword(true);
        } else {
            setTimeout(() => { // Timeout para que se muestre el mensaje de error
                setFlagCorrectPassword(false);
            }, 1000);
        }
    }, [password, confirmPassword]);


    if (flagCorrectPassword) { // Si la contraseña es correcta
        return (
            <h1 className={`font-normal text-base leading-[20px] tracking-[0.07px] ${password === confirmPassword ? 'text-primary-title1' : 'text-primary-error1'} text-left opacity - 100`}>
                {password === confirmPassword ? '✔ Las contraseñas coinciden' : '• Las contraseñas no coinciden'}
            </h1>
        )
    } else { // Si la contraseña es incorrecta
        return (
            arrayRules.map((rule, index) => (
                <h1 key={index} className={`font-normal text-base leading-[20px] tracking-[0.07px] ${validatePassword(rule.valid) ? 'text-primary-title1' : 'text-primary-error1'} text-left opacity - 100`}>
                    {validatePassword(rule.valid) ? '✔' : '•'} {rule.text}
                </h1>
            ))
        )
    }
}
