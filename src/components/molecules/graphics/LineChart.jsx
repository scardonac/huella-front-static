import { Line } from "react-chartjs-2";
// import {Line} from "chart.js"
    import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler,
} from 'chart.js'

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler,
    );

let beneficios = [0, 56, 20,36];
let meses = ["Enero", "Febrero", "Marzo"];

    let midata = {
        labels: meses,
        datasets: [
            {
                label: 'Beneficios',
                data: beneficios,
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132,0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 99, 132)',
                pointBackkgroundColor: 'rgba(255, 99, 132)',

            },
        ],
    };
let misoptions = {
};
    export default function LinesChart() {
        return <Line data={midata} options={misoptions}/>
    }