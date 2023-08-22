import BarChart from "../../molecules/graphics/BarChart";

export default function CardResultGraphicYear({ state }) {

    const Emisiones = [0.00, 0.35, 0.15, 0.25, 0.20, 0.30, 0.10, 0.05, 0.40];
    const Años = ["2021", "2022", "2023"];

    const chartData = {
        labels: Años,
        datasets: [
            {
                label: "Emisiones",
                data: Emisiones,
                backgroundColor: [
                    "rgba(206, 230, 173,1)",
                    "rgba(14, 85, 92,1)",
                    "rgba(77, 153, 127,1)"
                ]
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        animation: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                ticks: { color: "rgba(0, 0, 0)" }
            }
        }
    };

    // const chartData = {
    //     labels: ["Group A", "Group B", "Group C"],
    //     datasets: [
    //         {
    //             label: "Dataset 1",
    //             data: [10, 20, 30],
    //             backgroundColor: "rgba(75, 192, 192, 0.5)",
    //         },
    //         {
    //             label: "Dataset 2",
    //             data: [15, 25, 35],
    //             backgroundColor: "rgba(255, 99, 132, 0.5)",
    //         },
    //         {
    //             label: "Dataset 3",
    //             data: [5, 10, 15],
    //             backgroundColor: "rgba(54, 162, 235, 0.5)",
    //         },
    //     ],
    // };

    // const chartOptions = {
    //     plugins: {
    //         title: {
    //             display: false,
    //             // text: "Chart.js Stacked Bar Chart with Groups",
    //         },
    //         legend: {
    //             display: false
    //         }
    //     },
    //     responsive: true,
    //     scales: {
    //         x: {
    //             stacked: true,
    //         },
    //         y: {
    //             stacked: true,
    //         },
    //     },
    // };


    return (
        <div className="CardResultGraphicYear relative bg-white w-full h-[420px] col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-6 rounded-3xs shadow-[0px_10px_10px_rgba(0,_0,_0,_0.05)] p-4 flex flex-wrap">

            <div className="bottom-[224px] left-[416px] rounded-3xs bg-white text-xl text-darkslategray-200">
                <div className="absolute top-[62px] left-[40.6px] text-smi tracking-[0.07px]">
                    tCO2 eq
                </div>
                <h3 className="m-0 absolute top-[40px] left-[40.82px] text-[inherit] tracking-[0.1px] leading-[27px] font-bold font-inherit">
                    Emisiones por periodo
                </h3>
                <div className="absolute w-[calc(100%_-_79.97px)] right-[39.3px] bottom-[29.36px] left-[40.67px] h-[303.64px] text-sm">
                    <BarChart data={chartData} options={chartOptions} />
                </div>
            </div>

        </div>
    )
}
