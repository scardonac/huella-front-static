import React from "react";
import { Chart as ChartJS, ArcElement,Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// import {DoughnutController} from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive: true,
    maintainAspectRatio: false,
};

var data = {
    labels: ['Fugas en equipos de control de incendios', 'Viajes de negocio', 'Desplazamiento de empleados y Teletrabajo', 'Equipos IT', 'WTT Viajes', 'Alojamiento', 'Disposición de residuos'],
    datasets: [
        {
            label: 'Emisiones',
            data: [24.32, 20.35, 8.49, 5.33, 3.16, 2.23, 1.07, 1.98],
            backgroundColor: [
                'rgba(14, 85, 92, 1)',
                'rgba(0, 39, 68, 1)',
                'rgba(230, 80, 11, 1)',
                'rgba(77, 153, 127, 1)',
                'rgba(0, 92, 153, 1)',
                'rgba(254, 80, 0, 1)',
                'rgba(206, 230, 173, 1)'
            ],
            borderColor: [
                'rgba(14, 85, 92, 1)',
                'rgba(0, 39, 68, 1)',
                'rgba(230, 80, 11, 1)',
                'rgba(77, 153, 127, 1)',
                'rgba(0, 92, 153, 1)',
                'rgba(254, 80, 0, 1)',
                'rgba(206, 230, 173, 1)'
            ],
            borderWidth: 1,
        },
    ],
};

export default function DoughnutChart() {
    return <Doughnut data={data} options={options} />
}
