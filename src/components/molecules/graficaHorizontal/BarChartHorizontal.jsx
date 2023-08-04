import { Bar } from "react-chartjs-2";
// import {BarController} from "chart.js"
    import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        BarElement,
        Title,
        Tooltip,
        Legend,
        Filler
} from 'chart.js'

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        BarElement,
        Title,
        Tooltip,
        Legend,
        Filler
    );

var Emisiones= [24.45, 0.30, 42.18];
var Años = ["", "", ""];

    var midata = {
        labels: Años,
        datasets: [
            {
                label: 'Emisiones',
                data: Emisiones,
                backgroundColor: [
                    'rgba(77, 153, 127,1)',
                    'rgba(206, 230, 173,1)',
                    'rgba(14, 85, 92,1)'
            ]

            },
        ],
    };

var misoptions = {
    responsive: true,
    indexAxis: 'y',
    animation: false,
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        x: {
            ticks: { color: 'rgba(0, 0, 0)'}
        }
    }
};

    export default function BarChartHorizontal() {
        return <Bar data={midata} options={misoptions}/>
    }