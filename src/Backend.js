import { paths } from "./routes/paths"
import { Icons } from "./assets/icons/IconProvider"
import { Illustrations } from "./assets/Illustrations/IllustrationProvider"

export const secciones = [
    {
        id: 1,
        name: "Inicio",
        icon: Icons?.HomeIcon,
        path: paths.APPHOME,
    },
    {
        id: 2,
        name: "Registros",
        icon: Icons?.RegistrosIcon,
        path: paths.APPREGISTROS,
    },
    {
        id: 3,
        name: "Resultados",
        icon: Icons?.ResultadosIcon,
        path: paths.APPRESULTADOS,
    },
    // {
    //     id:4,
    //     name:"Compensacion",
    //     icon:Icons?.CompensacionIcon,
    //     path:paths.APPCOMPENSACION,
    // },
]

export const sedes = [
    {
        ciudad_id: 0,
        descripcion: "string",
        direccion: "string",
        empresa: "string",
        id: "string",
        nombre: "string",
        numero_de_empleados: 0,
        sector_productivo_id: "string",
        user_id: "string"
    }
]

export const paises = [
    {
        id: 1,
        nombre: "Colombia",
        url_bandera: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAG1BMVEX/zQDIEC4AMIf/zwDeuBsySHYALYgDLX+6Ezd7vh7cAAAAQElEQVRoge3MgQ2AIAADsIkK/H+xVywxpD2gCQAAAHC0uyhPUd6izKKMIrlcLpfLT85XUXZRriK5XC6Xy+U/zD/IdSIl2Z11wwAAAABJRU5ErkJggg==",
    },
    {
        id: 2,
        nombre: "Peru",
        url_bandera: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAFVBMVEX////ZECPbGi32zdD54OLdJTbZCiAKZZvNAAAAQklEQVRoge3MSREAIAwEsOWqf8kY6IcvkwhIRq/myoN9qkkil8vlcrlcLpfL5XK5XC6Xy+VyuVwul8vlcrlc/ld+AYjIGHH0r5TcAAAAAElFTkSuQmCC",
    },
]

export const departamentos = [
    {
        id: 1,
        nombre: "Antioquia",
    },
    {
        id: 2,
        nombre: "Atlantico",
    },
    {
        id: 3,
        nombre: "Bolivar",
    },
]

export const cuidades = [
    {
        id: 1,
        nombre: "Medellin",
    },
    {
        id: 2,
        nombre: "Bogota",
    },
    {
        id: 3,
        nombre: "Cartagena",
    },
]

export const espaciosIcons = {
    "Institucional": {
        icon: "office_Default",
        iconChecked: "office_VFuerte",
        isChecked: false,
        isActived: true,
    },
    "Transporte": {
        icon: "Transporte_Default",
        iconChecked: "Transporte_VFuerte",
        isChecked: false,
        isActived: true,
    },
    "Industrial (pronto disponible)": {
        icon: "Fabric_Default",
        iconChecked: "Fabric_VFuerte",
        isChecked: null,
        isActived: false,
    },
    "Agropecuario (pronto disponible)": {
        icon: "Agropecuario_Default",
        iconChecked: "Agropecuario_VFuerte",
        isChecked: null,
        isActived: false,
    },
    "Residuos (pronto disponible)": {
        icon: "SectorResiduos_Default",
        iconChecked: "SectorResiduos_VFuerte",
        isChecked: null,
        isActived: false,
    },
    "Uso de suelos (pronto disponible)": {
        icon: "UsoSuelos_Default",
        iconChecked: "UsoSuelos_VFuerte",
        isChecked: null,
        isActived: false,
    },
    // {
    //     id: '007a5be1-4bf6-4b0b-8c53-f5862c95a3d8',
    //     icon: "office_Default",
    //     name: "Institucional",
    //     iconChecked: "office_VFuerte",
    //     isChecked: false,
    //     isActived: true
    // },
    // {
    //     id: '886dbb86-6e86-461b-b0e2-8a8b367e76a1',
    //     icon: "Transporte_Default",
    //     name: "Transporte",
    //     iconChecked: "Transporte_VFuerte",
    //     isChecked: false,
    //     isActived: true
    // },
    // {
    //     id: 'bbd29556-2892-4cb7-98fa-34f51de93712',
    //     icon: "Fabric_Default",
    //     name: "Industrial (pronto disponible)",
    //     iconChecked: "Fabric_VFuerte",
    //     isChecked: null,
    //     isActived: false
    // },
    // {
    //     id: 4,
    //     icon: "Agropecuario_Default",
    //     name: "Agropecuario (pronto disponible)",
    //     iconChecked: "Agropecuario_VFuerte",
    //     isChecked: null,
    //     isActived: false
    // },
    // {
    //     id: 5,
    //     icon: "SectorResiduos_Default",
    //     name: "Residuos (pronto disponible)",
    //     iconChecked: "SectorResiduos_VFuerte",
    //     isChecked: null,
    //     isActived: false
    // },
    // {
    //     id: 6,
    //     icon: "UsoSuelos_Default",
    //     name: "Uso de suelos (pronto disponible)",
    //     iconChecked: "UsoSuelos_VFuerte",
    //     isChecked: null,
    //     isActived: false
    // },
}

export const emisionesDirectasIcons = {
    "Vehiculos": {
        icon: "Car_Default",
        iconChecked: "Car_VFuerte",
        isChecked: false,
    },
    "Extintores": {
        icon: "extintor_Default",
        iconChecked: "extintor_VFuerte",
        isChecked: false,
    },
    "Aire Acondicionado": {
        icon: "aire_Default",
        iconChecked: "aire_VFuerte",
        isChecked: false,
    },
    "Plantas Generadoras de Energia": {
        icon: "PlantaEnergia_Default",
        iconChecked: "PlantaEnergia_VFuerte",
        isChecked: false,
    },
    "Hornos o Calderas": {
        icon: "PlantaCombustion_Default",
        iconChecked: "PlantaCombustion_VFuerte",
        isChecked: false,
    },
};


export const emisionesDirectasTable = [
    {
        id: 1,
        icon: "Car_Default",
        name: "Vehículos",
        iconChecked: Illustrations["Car_VSuave"],
        isChecked: false,
        tonCO2eq: "0 CO2eq",
        state: 1,
    },
    {
        id: 2,
        icon: "extintor_Default",
        name: "Extintores",
        iconChecked: Illustrations["extintor_VSuave"],
        isChecked: false,
        tonCO2eq: "0 CO2eq",
        state: 2,
    },
    {
        id: 3,
        icon: "aire_Default",
        name: "Aires acondicionados",
        iconChecked: Illustrations["aire_VSuave"],
        isChecked: false,
        tonCO2eq: "0 CO2eq",
        state: 3,
    },
    {
        id: 4,
        icon: "PlantaEnergia_Default",
        name: "Plantas generadoras de energía",
        iconChecked: Illustrations["PlantaEnergia_VSuave"],
        isChecked: false,
        tonCO2eq: "0 CO2eq",
        state: 1,
    },
    {
        id: 5,
        icon: "PlantaCombustion_Default",
        name: "Hornos o calderas",
        iconChecked: Illustrations["PlantaCombustion_VSuave"],
        isChecked: false,
        tonCO2eq: "2 CO2eq",
        state: 1,
    },
]

export const getEmisionesAlcance1 = () => {
    return emisionesDirectasTable
}

export const getEmisionesAlcance2 = () => {
    return emisionesIndirectasTable
}

export const getEmisionesAlcance3 = () => {
    return otrasEmisionesIndirectasTable
}

export const emisionesDirectasDashboardATable = [
    {
        id: 1,
        icon: "Car_Default",
        name: "Vehículos",
        iconChecked: Illustrations["Car_VSuave"],
        isChecked: false,
        tonCO2eq: "0 CO2eq",
        state: 2,
    },
    {
        id: 2,
        icon: "PlantaEnergia_Default",
        name: "Plantas generadoras de energía",
        iconChecked: Illustrations["PlantaEnergia_VSuave"],
        isChecked: false,
        tonCO2eq: "0 CO2eq",
        state: 2,
    },
    {
        id: 3,
        icon: "ConsumoEnergia_Default",
        name: "Consumo de energía eléctrica",
        iconChecked: Illustrations["ConsumoEnergia_VSuave"],
        isChecked: false,
        tonCO2eq: "2 CO2eq",
        state: 2,
    },
]

export const emisionesDirectasDashboardBTable = [
    {
        id: 1,
        name: "Sier centro de cont...",
        iconChecked: Illustrations["office_VSuave"],
        periodo: "01/01/2022 - 31/12/2022",
        tonCO2eq: "66,93",
        state: 2,
    },
    {
        id: 2,
        name: "Sier centro de cont...",
        iconChecked: Illustrations["office_VSuave"],
        periodo: "01/01/2021 - 31/12/2021",
        tonCO2eq: "55,69",
        state: 2,
    },
    {
        id: 3,
        name: "Sier centro de cont...",
        iconChecked: Illustrations["office_VSuave"],
        periodo: "01/01/2020 - 31/12/2020",
        tonCO2eq: "54,09",
        state: 2,
    },
]

export const otrasEmisionesIndirectasIcons = {
    "Consumo de Energia": {
        icon: "ConsumoEnergia_Default",
        iconChecked: "ConsumoEnergia_VFuerte",
        isChecked: false,
    },
}

export const emisionesIndirectasTable = [
    {
        id: 1,
        icon: "ConsumoEnergia_Default",
        name: "Consumo de energía eléctrica",
        iconChecked: Illustrations["ConsumoEnergia_VSuave"],
        isChecked: false,
        tonCO2eq: "2 CO2eq",
        state: 1,
    },
]

export const emisionesIndirectasIcons = {
    "Desplazamientos": {
        icon: "Desplazamientos_Default",
        iconChecked: "Desplazamientos_VFuerte",
        isChecked: false,
    },
    "Viajes de negocios": {
        icon: "ViajesNegocios_Default",
        iconChecked: "ViajesNegocios_VFuerte",
        isChecked: false,
    },
    "Suministros de papeleria": {
        icon: "Papeleria_Default",
        iconChecked: "Papeleria_VFuerte",
        isChecked: false,
    },
    "Suministro de agua": {
        icon: "ConsumoAgua_Default",
        iconChecked: "ConsumoAgua_VFuerte",
        isChecked: false,
    },
    "Recoleccion de residuos": {
        icon: "Residuos_Default",
        iconChecked: "Residuos_VFuerte",
        isChecked: false,
    },
    "Adquisicion de equipos tecnologicos": {
        icon: "AdquisicionTech_Default",
        iconChecked: "AdquisicionTech_VFuerte",
        isChecked: false,
    },
    "Mensajeria": {
        icon: "Mensajeria_Default",
        iconChecked: "Mensajeria_VFuerte",
        isChecked: false,
    },
    "Empleados de Teletrabajo": {
        icon: "HomeOffice_Default",
        iconChecked: "HomeOffice_VFuerte",
        isChecked: false,
    },
}

export const otrasEmisionesIndirectasTable = [
    {
        id: 1,
        name: "Viajes de negocios",
        icon: "Desplazamientos_Default",
        iconChecked: Illustrations["Desplazamientos_VSuave"],
        isChecked: false,
        tonCO2eq: "2 CO2eq",
        state: 1,
    },
    {
        id: 2,
        icon: "Papeleria_Default",
        name: "Suministros de papelería",
        iconChecked: Illustrations["Papeleria_VSuave"],
        isChecked: false,
        tonCO2eq: "2 CO2eq",
        state: 1,
    },
    {
        id: 3,
        icon: "AdquisicionTech_Default",
        name: "Adquisición de equipos tecnológicos",
        iconChecked: Illustrations["AdquisicionTech_VSuave"],
        isChecked: false,
        tonCO2eq: "2 CO2eq",
        state: 1,
    },
    {
        id: 4,
        icon: "HomeOffice_Default",
        name: "Empleados en teletrabajo",
        iconChecked: Illustrations["HomeOffice_VSuave"],
        isChecked: false,
        tonCO2eq: "2 CO2eq",
        state: 1,
    },
]

export const meses = [
    {
        id: 1,
        label: "Enero",
        value: null,
        file: null,
    },
    {
        id: 2,
        label: "Febrero",
        value: null,
        file: null,
    },
    {
        id: 3,
        label: "Marzo",
        value: null,
        file: null,
    },
    {
        id: 4,
        label: "Abril",
        value: null,
        file: null,
    },
    {
        id: 5,
        label: "Mayo",
        value: null,
        file: null,
    },
    {
        id: 6,
        label: "Junio",
        value: null,
        file: null,
    },
    {
        id: 7,
        label: "Julio",
        value: null,
        file: null,
    },
    {
        id: 8,
        label: "Agosto",
        value: null,
        file: null,
    },
    {
        id: 9,
        label: "Septiembre",
        value: null,
        file: null,
    },
    {
        id: 10,
        label: "Octubre",
        value: null,
        file: null,
    },
    {
        id: 11,
        label: "Noviembre",
        value: null,
        file: null,
    },
    {
        id: 12,
        label: "Diciembre",
        value: null,
        file: null,
    },
]

export const meses2 = [
    {
        id: 1,
        label: "Enero",
        value: 100,
        file: null,
    },
    {
        id: 2,
        label: "Febrero",
        value: null,
        file: null,
    },
    {
        id: 3,
        label: "Marzo",
        value: null,
        file: null,
    },
    {
        id: 4,
        label: "Abril",
        value: null,
        file: null,
    },
    {
        id: 5,
        label: "Mayo",
        value: null,
        file: null,
    },
    {
        id: 6,
        label: "Junio",
        value: null,
        file: null,
    },
    {
        id: 7,
        label: "Julio",
        value: null,
        file: null,
    },
    {
        id: 8,
        label: "Agosto",
        value: null,
        file: null,
    },
    {
        id: 9,
        label: "Septiembre",
        value: null,
        file: null,
    },
    {
        id: 10,
        label: "Octubre",
        value: null,
        file: null,
    },
    {
        id: 11,
        label: "Noviembre",
        value: null,
        file: null,
    },
    {
        id: 12,
        label: "Diciembre",
        value: null,
        file: null,
    },
]

//Data for cards
export const dataGraph = [
    {
        "name": "Fugas en equipos de control de incendios",
        "value": '24,32',
        "color": "bg-teal-800"
    },
    {
        "name": "Viajes de negocio",
        "value": '20,35',
        "color": "bg-teal-900"
    },
    {
        "name": "Desplazamiento de empleados y Teletrabajo",
        "value": '8,49',
        "color": "bg-orange-600"
    },
    {
        "name": "Equipos IT",
        "value": '5,33',
        "color": "bg-emerald-600"
    },
    {
        "name": "WTT Viajes",
        "value": '2,23',
        "color": "bg-red-600"
    },
    {
        "name": "Alojamiento",
        "value": '1,07',
        "color": "bg-lime-200"
    },
    {
        "name": "Disposición de residuos",
        "value": '1,98',
        "color": "bg-blue-900"
    },
];

export const dataGraphDos = [
    {
        "name": "Emisiones directas",
        "value": '24,45',
        "color": "bg-emerald-600"
    },
    {
        "name": "Emisiones indirectas",
        "value": '0,30',
        "color": "bg-lime-200"
    },
    {
        "name": "Otras Emisiones indirectas",
        "value": '42,18',
        "color": "bg-teal-900"
    },
];
