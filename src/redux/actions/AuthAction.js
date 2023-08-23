//Axios Client
import axiosClient from "../../config/AxiosClient";
//Slices
import { loginCase } from "../slices/AuthSlice";


// Acción para el login
export const LoginAction = (user) => {

    return async (dispatch) => {
        try {
            const { data: { data } } = await axiosClient.post('/login', user);
            const { user_id, nombre: username, empresa: company } = JSON.parse(data.info);
            localStorage.setItem('token', data.token);
            dispatch(loginCase({ user_id, username, company }));
            return { error: null, verify: true };
        } catch (error) {
            console.log(error);
            return { error: 'Correo o contraseña inválidos, intenta nuevamente', verify: false };
        }
    }

}

// Acción para el registro
export const SignUpAction = (dataRegister) => {

    return async (dispatch) => {
        try {
            const response = await axiosClient.post('/users', dataRegister);
            // dispatch(loginCase(response));
            return { error: null, verify: true };
        } catch (error) {
            console.log(error);
            let TextError = error.response.data.message === 'Esta empresa ya existe' ? 'El NIT ingresado ya está registrado, intenta con otro' : error.response.data.message;
            return { error: TextError, verify: false };
        }
    }
}