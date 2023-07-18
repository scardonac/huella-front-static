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
    '1': VehiclesReportU,
    '2': EnergyPlantsReportU,
    '3': BoilerReportU,
    '4': MessengerServiceReportU,
    '5': BusinessTripReportU,
    '6': ElectricPowerConsumptionReportU,
    '7': ResidueRecolectionReportU,
    '8': WaterSupplyReportU,
    '9': AirConditionersReportU,
    '10': StationerySuppliesReportU,
    '11': TeleworkingEmployeesReportU,
    '12': ExtinguisherReportU,
    '13': EquipmentAcquisitionReportU,
    '14': EnergyConsumptionReportP,
}

// Definimos un componente de informe predeterminado para los IDs de informe desconocidos
const DefaultReport = () => <h1>Reporte no encontrado</h1>;

export const ReportContainer = () => {
    // Obtenemos el ID del informe de la URL
    const { reportId } = useParams();

    // Buscamos el componente del informe basado en el ID del informe,
    // si no se encuentra una coincidencia, se usa el componente de informe predeterminado
    const ReportComponent = REPORT_COMPONENTS[reportId] || DefaultReport;

    return <ReportComponent />;
}
