//Axios Client
import { emisionesDirectasIcons, emisionesIndirectasIcons, espaciosIcons, otrasEmisionesIndirectasIcons } from "../../Backend";
import axiosClient from "../../config/AxiosClient";
//Slices
import { getCenterCurrentCase, getCentersCase, getDirectEmissionsCase, getInDirectEmissionsCase, getOtherEmissionsCase, getSectorProductivoCase } from "../slices/RegisterSlice";

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

            // Despachar una acción con el resultado
            dispatch(getCenterCurrentCase(data));

            return true;
        } catch (error) {
            console.log(error);
            if (error.response.data.message === 'centro already exists' && center !== '0') return true;
            // Despachar una acción de error si es necesario
            dispatch(getCenterCurrentCase({}));
            return false;
        }
    };
};

// Acción para traer las emisiones directas
// export const getEmissionsAction = () => {
//     return async (dispatch) => {
//         try {
//             const { data: { data } } = await axiosClient.get('/emisiones/');
//             if (!data) return;
//             const newDataDirectEmissions = data?.emisiones_directas.map((item) => {
//                 const iconData = emisionesDirectasIcons[item.nombre];
//                 return {
//                     ...item,
//                     icon: iconData?.icon ? iconData.icon : "Car_Default",
//                     iconChecked: iconData?.iconChecked ? iconData.iconChecked : "Car_VFuerte",
//                     isChecked: false,
//                 };
//             });
//             const newDataIndirectEmissions = data?.emisiones_directas.map((item) => {
//                 const iconData = emisionesIndirectasIcons[item.nombre];
//                 return {
//                     ...item,
//                     icon: iconData?.icon ? iconData.icon : "Car_Default",
//                     iconChecked: iconData?.iconChecked ? iconData.iconChecked : "Car_VFuerte",
//                     isChecked: false,
//                 };
//             });
//             const newDataOtherEmissions = data?.emisiones_directas.map((item) => {
//                 const iconData = otrasEmisionesIndirectasIcons[item.nombre];
//                 return {
//                     ...item,
//                     icon: iconData?.icon ? iconData.icon : "Car_Default",
//                     iconChecked: iconData?.iconChecked ? iconData.iconChecked : "Car_VFuerte",
//                     isChecked: false,
//                 };
//             });
//             newDataDirectEmissions && dispatch(getDirectEmissionsCase(newDataDirectEmissions));
//             newDataIndirectEmissions && dispatch(getInDirectEmissionsCase(newDataIndirectEmissions));
//             newDataOtherEmissions && dispatch(getOtherEmissionsCase(newDataOtherEmissions));
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }
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
