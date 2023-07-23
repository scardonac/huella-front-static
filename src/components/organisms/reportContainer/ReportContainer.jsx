// Dependencias
import { useParams } from "react-router-dom";
// Componentes
import { AirConditionersReportU } from "../uniqueReports/AirConditionersReportU";
import { BoilerReportU } from "../uniqueReports/BoilerReportU";
import { BusinessTripReportU } from "../uniqueReports/BusinessTripReportU";
import { ElectricPowerConsumptionReportU } from "../uniqueReports/ElectricPowerConsumptionReportU";
import { EnergyConsumptionReportP } from "../periodicReports/EnergyConsumptionReportP";
import { EnergyPlantsReportU } from "../uniqueReports/EnergyPlantsReportU";
import { EquipmentAcquisitionReportU } from "../uniqueReports/EquipmentAcquisitionReportU";
import { ExtinguisherReportU } from "../uniqueReports/ExtinguisherReportU";
import { MessengerServiceReportU } from "../uniqueReports/MessengerServiceReportU";
import { ResidueRecolectionReportU } from "../uniqueReports/ResidueRecolectionReportU";
import { StationerySuppliesReportU } from "../uniqueReports/StationerySuppliesReportU";
import { TeleworkingEmployeesReportU } from "../uniqueReports/TeleworkingEmployeesReportU";
import { VehiclesReportU } from "../uniqueReports/VehiclesReportU";
import { WaterSupplyReportU } from "../uniqueReports/WaterSupplyReportU";

// Definimos la correspondencia entre los IDs de los informes y los componentes de los informes
const REPORT_COMPONENTS = {
    'Vehiculos': VehiclesReportU,
    'Plantas Generadoras de Energia': EnergyPlantsReportU,
    'Hornos o Calderas': BoilerReportU,
    'Mensajeria': MessengerServiceReportU,
    '5': BusinessTripReportU,
    'Consumo de Energia': ElectricPowerConsumptionReportU,
    'Recoleccion de residuos': ResidueRecolectionReportU,
    'Suministro de agua': WaterSupplyReportU,
    'Aire Acondicionado': AirConditionersReportU,
    'Suministros de papeleria': StationerySuppliesReportU,
    'Empleados de Teletrabajo': TeleworkingEmployeesReportU,
    'Extintores': ExtinguisherReportU,
    'Adquisicion de equipos tecnologicos': EquipmentAcquisitionReportU,
    '6': EnergyConsumptionReportP,
}

// Definimos un componente de informe predeterminado para los IDs de informe desconocidos
const DefaultReport = () => <h1>Reporte no encontrado</h1>;

export const ReportContainer = () => {
    // Obtenemos el ID del informe de la URL
    const { reportId } = useParams();

    console.log(reportId, 'reportId')

    // Buscamos el componente del informe basado en el ID del informe,
    // si no se encuentra una coincidencia, se usa el componente de informe predeterminado
    const ReportComponent = REPORT_COMPONENTS[reportId] || DefaultReport;

    return <ReportComponent />;
}
