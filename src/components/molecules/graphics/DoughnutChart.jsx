import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ data, options }) {
    return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;

// function DoughnutChart({ data, options, legendItems }) {
//     // Asegúrate de sumar los valores numéricos para mostrarlos en el gráfico
//     const totalValue = legendItems.reduce((total, item) => total + parseFloat(item.value.replace(",", ".")), 0);

//     const updatedData = {
//         ...data,
//         datasets: data.datasets.map(dataset => ({
//             ...dataset,
//             data: legendItems.map(item => parseFloat(item.value.replace(",", "."))),
//         })),
//     };

//     return (
//         <div className="doughnut-chart-container">
//             <div className="doughnut-chart">
//                 <Doughnut data={updatedData} options={options} />
//             </div>
//             <div className="legend">
//                 {legendItems.map(({ name, value, color }, index) => (
//                     <div className="legend-item" key={index}>
//                         <span className={`legend-color ${color}`} />
//                         <span className="legend-text text-cyan-950">{name}</span>
//                         <span className="legend-value">{value}</span>
//                     </div>
//                 ))}
//                 <div className="legend-item">
//                     <span className="legend-color" style={{ background: 'transparent' }} />
//                     <span className="legend-text">Total</span>
//                     <span className="legend-value">{totalValue.toFixed(2)}</span>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default DoughnutChart;

