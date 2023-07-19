//Axios Client
import axiosClient from "../../config/AxiosClient";
//Slices
import { loginCase } from "../slices/AuthSlice";


// Acción para el login
export const LogingAction = (user, navigate) => {

    return async (dispatch) => {
        try {
            const { data: { data } } = await axiosClient.post('/login', user);
            console.log(JSON.parse(data.info))
            const { user_id, nombre: username, empresa: company } = JSON.parse(data.info);
            localStorage.setItem('token', data.token);
            dispatch(loginCase({ user_id, username, company }));
            return { error: null, verify: true };
        } catch (error) {
            console.log(error);
            return { error: 'Usuario o contraseña incorrectos', verify: false };
        }
    }

}

// Acción para el registro
export const RegisterAction = (username, email, password) => {

    let dataRegister = {
        nombre: "Juan",
        contraseña: "testpassword",
        email: "testuser@example.com",
        empresa: "INTEIA"
    }

    return async (dispatch) => {
        try {
            const response = await axiosClient.post('/users', dataRegister);
            // dispatch(loginCase(response));
        } catch (error) {
            console.log(error);
        }
    }
}