//Axios Client
import {
    emisionesDirectasIcons,
    emisionesIndirectasIcons,
    espaciosIcons,
    otrasEmisionesIndirectasIcons
} from "../../Data";
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

const mapEmissions = (emissions, iconData) => {
    return emissions.map((item) => {
        const icon = iconData[item.nombre]?.icon ?? "Car_Default";
        const iconChecked = iconData[item.nombre]?.iconChecked ?? "Car_VFuerte";
        return { ...item, icon, iconChecked, isChecked: false };
    });
};

// Acción para trear las sedes o centros
export const getCentersAction = () => {

    return async (dispatch) => {
        try {
            const { data: { data } } = await axiosClient.get('/centros');
            dispatch(getCentersCase(data ? data : [])); // Actualizar los centros dependiendo de la respuesta
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
            // Despachar una acción con el resultado
            dispatch(getCenterCurrentCase(data)); // Actualizar el centro actual
            dispatch(getCentersAction()); // Actualizar los centros

            return { error: null, verify: true };
        } catch (error) {
            console.log(error);
            if (error.response.data.message == 'centro already exists' && center !== '0') return { error: 'El centro ya existe', verify: false };
            // Despachar una acción de error si es necesario
            dispatch(getCenterCurrentCase(null)); // Actualizar el centro actual a null
            return { error: error.response.data.message, verify: false };
        }
    };
};

// Acción para traer las emisiones directas
export const getEmissionsAction = () => {
    return async (dispatch) => {
        try {
            const { data: { data } } = await axiosClient.get('/emisiones/');
            if (!data) return;

            const newDataDirectEmissions = mapEmissions(data.emisiones_directas, emisionesDirectasIcons); // Mapear las emisiones directas
            const newDataIndirectEmissions = mapEmissions(data.emisiones_indirectas, emisionesIndirectasIcons); // Mapear las emisiones indirectas
            const newDataOtherEmissions = mapEmissions(data.emisiones_directas_otras, otrasEmisionesIndirectasIcons); // Mapear las otras emisiones

            newDataDirectEmissions && dispatch(getDirectEmissionsCase(newDataDirectEmissions)); // Actualizar las emisiones directas
            newDataIndirectEmissions && dispatch(getInDirectEmissionsCase(newDataIndirectEmissions)); // Actualizar las emisiones indirectas
            newDataOtherEmissions && dispatch(getOtherEmissionsCase(newDataOtherEmissions)); // Actualizar las otras emisiones
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
            dispatch(getSectorProductivoCase(newData)); // Actualizar los sectores productivos
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

            let dataCalculation = {
                calculo: {
                    centro_id: centerCurrent.id,
                    empresa: company,
                    final_reg: firstStep.endDate,
                    inicio_reg: firstStep.startDate,
                    sector_productivo_id: centerCurrent.sector_productivo_id
                },
                log_array: log_array
            }

            const { data } = await axiosClient.post('/forms', dataCalculation);
            dispatch(getCalculationsCase(data)); // Actualizar los calculos
            return { error: null, verify: true, data };
        } catch (error) {
            console.log(error, 'errorCreateCalculation');
            return { error: 'Error al crear el calculo', verify: false };
        }
    }
}

// Acción para actualizar un Calculo con logs
export const updateCalculationAction = (log_array) => {
    return async (dispatch, getState) => {
        try {
            const { register: { calculations } } = getState().persistedData;
            let dataCalculation = {
                calculo_id: calculations?.id,
                log_array
            }
            const { data } = await axiosClient.put('/forms', dataCalculation);
            // dispatch(updateEmissionsAction(calculations?.id)); // Actualizar los calculos
            return { error: null, verify: true, data };
        } catch (error) {
            console.log(error, 'errorCreateCalculation');
            return { error: 'Error al crear el calculo', verify: false };
        }
    }
}


// Acción para eliminar las emisiones
export const deleteEmissionsAction = (id) => {
    return async (dispatch) => {
        try {
            await axiosClient.delete(`/soportes/delete/${id}`);
            return { error: null, verify: true };
        } catch (error) {
            console.log(error);
            return { error: 'Error al eliminar las emisiones', verify: false };
        }
    }
}

// Acción para actualizar las emisiones
export const updateEmissionsAction = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axiosClient.get(`/render/${id}`);
            const arrayAllEmisiones = data?.logs_details ? data?.logs_details : [];
            const newDataDirectEmissions = mapEmissions(arrayAllEmisiones?.filter((emision) => emision?.tipo === 1), emisionesDirectasIcons); // Mapear las emisiones directas
            const newDataIndirectEmissions = mapEmissions(arrayAllEmisiones?.filter((emision) => emision?.tipo === 3), emisionesIndirectasIcons); // Mapear las emisiones indirectas
            const newDataOtherEmissions = mapEmissions(arrayAllEmisiones?.filter((emision) => emision?.tipo === 2), otrasEmisionesIndirectasIcons); // Mapear las otras emisiones
            return { error: null, verify: true, data: { ...data, emissions: [...newDataDirectEmissions, ...newDataIndirectEmissions, ...newDataOtherEmissions] } };
        } catch (error) {
            console.log(error);
            return { error: 'Error al actualizar las emisiones', verify: false, data: null };
        }
    }
}

export const getEmissionsAllAction = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await axiosClient.get('/render/all');
            const arrayAllEmisiones = data.resultados_calculos ? data.resultados_calculos : [];
            return { error: null, verify: true, data: arrayAllEmisiones };
        } catch (error) {
            console.log(error);
            return { error: 'Error al actualizar las emisiones', verify: false, data: null };
        }
    }
}

// Acción para traer los soportes
export const getSupportsAction = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axiosClient.get(`/soportes/${id}`);
            return { msg: null, verify: true, data };
        } catch (error) {
            console.log(error);
            return { msg: 'Error al traer los soportes', verify: false, data: null };
        }
    }
}

// Función para crear FormData con archivos adjuntos
const createFormData = (file) => {
    const formData = new FormData();
    formData.append('file', file); // Asegúrate de que el campo 'file' coincida con el nombre esperado en el backend para el archivo adjunto
    return formData;
};

// Acción para crear los soportes
export const createSupportsAction = (dataForm) => {
    return async (dispatch) => {
        const dataSupports = dataForm.map((form) => {
            return {
                nombre: form?.nameForm ? form.nameForm : null,
                cantidad_insumo: form?.amountInput ? Number(form.amountInput) : 0,
                consumo: form?.consumption ? Number(form.consumption) : 0,
                dias_por_semana: form?.daysWeek ? Number(form.daysWeek) : null,
                horas_de_uso: form?.hoursUse ? Number(form.hoursUse) : null,
                kilometros_recorridos: form?.kilometers ? Number(form.kilometers) : null,
                libras_por_unidad: form?.poundsUnit ? Number(form.poundsUnit) : null,
                log_id: form?.logId ? form.logId : null,
                soportes: {
                    url: [""],
                    // url: [form.attachedFiles && form.attachedFiles.length > 0 ? createFormData(form.attachedFiles[0]) : null],
                },
                tipo_insumo: form?.typeInput ? form?.typeInput : null,
                tipo_combustible: form?.unitConsumption ? form.unitConsumption : null,
            }
        });
        try {
            await axiosClient.post('/soportes/final', dataSupports);
            return { msg: 'soportes creados correctamente', verify: true };
        } catch (error) {
            console.log(error);
            return { msg: 'Error al crear los soportes', verify: false };
        }
    }
}

// Acción para guardar un borrador de los soportes
export const saveDraftSupportsAction = (dataForm) => {
    return async (dispatch) => {
        const dataSupports = dataForm.map((form) => {
            return {
                nombre: form?.nameForm ? form.nameForm : null,
                cantidad_insumo: form?.amountInput ? Number(form.amountInput) : 0,
                consumo: form?.consumption ? Number(form.consumption) : 0,
                dias_por_semana: form?.daysWeek ? Number(form.daysWeek) : null,
                horas_de_uso: form?.hoursUse ? Number(form.hoursUse) : null,
                kilometros_recorridos: form?.kilometers ? Number(form.kilometers) : null,
                libras_por_unidad: form?.poundsUnit ? Number(form.poundsUnit) : null,
                id: form?.id ? form.id : null,
                log_id: form?.logId ? form.logId : null,
                soportes: {
                    url: [""],
                    // url: [form.attachedFiles && form.attachedFiles.length > 0 ? createFormData(form.attachedFiles[0]) : null],
                },
                tipo_insumo: form?.typeInput ? form?.typeInput : null,
                tipo_combustible: form?.unitConsumption ? form.unitConsumption : null,
            }
        });
        try {
            await axiosClient.post('/soportes/borrador', dataSupports);
            return { msg: 'borrador de soportes creados correctamente', verify: true };
        } catch (error) {
            console.log(error);
            return { msg: 'Error al crear los soportes', verify: false };
        }
    }
}

// Acción para obtener los calculos de la empresa