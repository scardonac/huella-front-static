//Axios Client
import axiosClient from "../../config/AxiosClient";
//Slices
import { loginCase } from "../slices/AuthSlice";


// Acción para el login
export const LoginAction = (user, navigate) => {

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
            let TextError = error.response.data.message === 'empresa already exists' ? 'El NIT ingresado ya está registrado, intenta con otro' : 'Algo salió mal, intenta nuevamente';
            return { error: TextError, verify: false };
        }
    }
}