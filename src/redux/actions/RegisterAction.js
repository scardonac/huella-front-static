//Axios Client
import {
    emisionesDirectasIcons,
    emisionesIndirectasIcons,
    espaciosIcons,
    otrasEmisionesIndirectasIcons
} from "../../Backend";
import axiosClient from "../../config/AxiosClient";
//Slices
import {
    getCentersCase,
    getDirectEmissionsCase,
    getInDirectEmissionsCase,
    getOtherEmissionsCase,
    getSectorProductivoCase,
    getCenterCurrentCase,
    getCalculationsCase,
} from "../slices/RegisterSlice";

// Acción para trear las sedes o centros
export const getCentersAction = () => {

    return async (dispatch) => {
        try {
            const { data: { data } } = await axiosClient.get('/centros');
            dispatch(getCentersCase(data ? data : []));
        } catch (error) {
            console.log(error);
        }
    }

}

// Acción para crear una sede o centro
export const createCenterAction = (dataForm) => {
    return async (dispatch, getState) => {
        const { city, description, address, customName, NumberEmployees, typeSpace, center } = dataForm;
        const { auth: { user_id, empresa } } = getState().persistedData;

        const dataCenter = {
            ciudad_id: Number(city),
            descripcion: description,
            direccion: address,
            empresa,
            nombre: customName,
            numero_de_empleados: Number(NumberEmployees),
            sector_productivo_id: typeSpace[0],
            user_id
        };

        try {
            const { data: { data } } = await axiosClient.post('/centros', dataCenter);
            console.log(data, 'dataCreateCenter')
            // Despachar una acción con el resultado
            dispatch(getCenterCurrentCase(data));
            dispatch(getCentersAction()); // Actualizar los centros

            return { error: null, verify: true };
        } catch (error) {
            console.log(error);
            if (error.response.data.message == 'centro already exists' && center !== '0') return { error: 'El centro ya existe', verify: true };
            // Despachar una acción de error si es necesario
            dispatch(getCenterCurrentCase(null));
            return { error: 'Error al crear el centro', verify: true };
        }
    };
};

// Acción para traer las emisiones directas
export const getEmissionsAction = () => {
    return async (dispatch) => {
        try {
            const { data: { data } } = await axiosClient.get('/emisiones/');
            if (!data) return;

            const mapEmissions = (emissions, iconData) => {
                console.log(iconData, 'iconData')
                return emissions.map((item) => {
                    const icon = iconData[item.nombre]?.icon ?? "Car_Default";
                    const iconChecked = iconData[item.nombre]?.iconChecked ?? "Car_VFuerte";
                    return { ...item, icon, iconChecked, isChecked: false };
                });
            };

            const newDataDirectEmissions = mapEmissions(data.emisiones_directas, emisionesDirectasIcons);
            const newDataIndirectEmissions = mapEmissions(data.emisiones_indirectas, emisionesIndirectasIcons);
            const newDataOtherEmissions = mapEmissions(data.emisiones_directas_otras, otrasEmisionesIndirectasIcons);

            newDataDirectEmissions && dispatch(getDirectEmissionsCase(newDataDirectEmissions));
            newDataIndirectEmissions && dispatch(getInDirectEmissionsCase(newDataIndirectEmissions));
            newDataOtherEmissions && dispatch(getOtherEmissionsCase(newDataOtherEmissions));
        } catch (error) {
            console.log(error);
        }
    }
}

// Acción para traer los sectores productivos
export const getSectorProductivoAction = () => {
    return async (dispatch) => {
        try {
            const { data: { data } } = await axiosClient.get('/sectores');
            if (!data) return;
            const newData = data.map((item) => {
                const iconData = espaciosIcons[item.nombre];
                return {
                    ...item,
                    icon: iconData?.icon ?? "Car_Default",
                    iconChecked: iconData?.iconChecked ?? "Car_VFuerte",
                    isChecked: false,
                    isActived: iconData?.isActived,
                };
            });
            dispatch(getSectorProductivoCase(newData));
        } catch (error) {
            console.log(error);
        }
    }
}

// Acción para crear un Calculo con logs
export const createCalculationAction = (dataFourthStep) => {

    return async (dispatch, getState) => {

        try {
            const { register: { firstStep, secondStep, thirdStep, centerCurrent }, auth: { company } } = getState().persistedData;

            const log_array = [
                ...secondStep.categories,
                ...thirdStep.categories,
                ...dataFourthStep.categories
            ]
            console.log(dataFourthStep, 'dataFourthStep')
            console.log(log_array, 'log_array')

            let dataCalculation = {
                calculo: {
                    centro_id: firstStep.center,
                    empresa: company,
                    final_reg: firstStep.endDate,
                    inicio_reg: firstStep.startDate,
                    sector_productivo_id: centerCurrent.sector_productivo_id
                },
                log_array: log_array
            }

            const { data: { data } } = await axiosClient.post('/forms', dataCalculation);
            dispatch(getCalculationsCase(data));
            return { error: null, verify: true };
        } catch (error) {
            console.log(error);
            return { error: 'Error al crear el calculo', verify: true };
        }
    }
}

// Acción para eliminar las emisiones
export const deleteEmissionsAction = (id) => {
    return async (dispatch) => {
        try {
            await axiosClient.delete(`/soportes/delete/${id}`);
            dispatch(getEmissionsAction());
            return { error: null, verify: true };
        } catch (error) {
            console.log(error);
            return { error: 'Error al eliminar las emisiones', verify: false };
        }
    }
}

// Acción para actualizar las emisiones
export const updateEmissionsAction = (dataForm) => {
    return async (dispatch) => {
        try {
            const { data: { data } } = await axiosClient.put(`/render/${id}`);
            // dispatch(getEmissionsAction());
            return { error: null, verify: true, data };
        } catch (error) {
            console.log(error);
            return { error: 'Error al actualizar las emisiones', verify: false, data: null };
        }
    }
}