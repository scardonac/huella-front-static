// import { Bar } from "react-chartjs-2";
import {BarController} from "chart.js"
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

var Emisiones= [0.00, 0.35, 0.15, 0.25, 0.20, 0.30, 0.10, 0.05, 0.40];
var Años = ["2021", "2022", "2023"];

    var midata = {
        labels: Años,
        datasets: [
            {
                Title: "Emisiones por año",
                label: 'Emisiones',
                data: Emisiones,
                backgroundColor: [
                    'rgba(206, 230, 173,1)',
                    'rgba(14, 85, 92,1)',
                    'rgba(77, 153, 127,1)'
            ]

            },
        ],
    };

var misoptions = {
    responsive: true,
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

    export default function BarChart2() {
        return <BarController data={midata} options={misoptions}/>
    }