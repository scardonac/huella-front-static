//Dependencies
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux/store";
//Components
import BarChart from "../../molecules/graphics/BarChart";
//Redux
import { getEmissionsAllAction } from "../../../redux/actions/RegisterAction";

export default function CardResultGraphicYear({ state }) {

    const dispatch = useAppDispatch(); // Dispatch de acciones de Redux

    const [emissionsAll, setEmissionsAll] = useState([]); // Estado para guardar las emisiones de la base de datos

    const chartData = {
        labels: emissionsAll.labels,
        datasets: [
            {
                label: "Emisiones",
                data: emissionsAll.value,
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

    const getEmisionsAll = async () => {
        const { data, error, verify } = await dispatch(getEmissionsAllAction()); //Obtiene las emisiones de la base de datos
        if (!verify) return;
        // const dataDetail = data.flatMap((calculo) => calculo?.calculo_details?.valor_co2); // obtiene los logs de la base de datos
        setEmissionsAll({ // Actualiza el estado con las emisiones filtradas
            labels: data.flatMap((calculo) => `${calculo?.calculo_details?.inicio_reg?.replace(/-/g, "/")}-${calculo?.calculo_details?.final_reg?.replace(/-/g, "/")}`),
            value: data.flatMap((calculo) => calculo?.calculo_details?.valor_co2),
        })
    };

    // Obtiene las emisiones de la base de datos.
    useEffect(() => {
        getEmisionsAll();
    }, []);

    console.log(emissionsAll)

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
