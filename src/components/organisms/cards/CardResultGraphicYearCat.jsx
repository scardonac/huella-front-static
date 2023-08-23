//Dependencies
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
//Components
import BarChart from "../../molecules/graphics/BarChart";
//Redux
import { getEmissionsAllAction } from "../../../redux/actions/RegisterAction";

export default function CardResultGraphicYearCat() {

    const dispatch = useAppDispatch(); // Dispatch de acciones de Redux

    // Obtenemos el estado del registro del store de Redux
    const { register: { directEmissions, inDirectEmissions, otherEmissions, firstStep, centerCurrent, calculations } } = useSelector(state => state.persistedData);

    const ArrayEmisiones = [...directEmissions, ...inDirectEmissions, ...otherEmissions];

    const [selectedCategoria, setSelectedCategoria] = useState(""); // Estado para guardar la categoría seleccionada
    const [emissionsAll, setEmissionsAll] = useState([]); // Estado para guardar las emisiones de la base de datos
    const [data, setData] = useState(null); // Estado para guardar las emisiones de la base de datos

    const handleCategoriaChange = (event) => {
        setSelectedCategoria(event.target.value); // Actualizar el estado con el valor seleccionado
    };


    const chartData = {
        labels: emissionsAll.label,
        datasets: [
            {
                Title: "Emisiones por año",
                label: 'Emisiones',
                data: emissionsAll.value,
                backgroundColor: [
                    'rgba(206, 230, 173,1)',
                    'rgba(14, 85, 92,1)',
                    'rgba(77, 153, 127,1)'
                ]

            },
        ],
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
                ticks: { color: 'rgba(0, 0, 0)' }
            }
        }
    };

    const getEmisionsAll = async () => {
        const { data: resp, error, verify } = await dispatch(getEmissionsAllAction()); //Obtiene las emisiones de la base de datos
        if (!verify) return;
        setData(resp);
    };

    // Obtiene las emisiones de la base de datos.
    useEffect(() => {
        getEmisionsAll();
    }, []);

    useEffect(() => {
        if (!data) return; // Si no hay datos, no hace nada
        const dataLog = data.flatMap((calculo) => calculo?.logs_details); // obtiene los logs de la base de datos
        const dataFilter = dataLog.filter((log) => log?.categoria_insumo === selectedCategoria); // Filtra las emisiones por la categoría seleccionada y retorna el resultado);
        setEmissionsAll({ // Actualiza el estado con las emisiones filtradas
            label: dataFilter?.flatMap((emision) => emision?.nombre),
            value: dataFilter?.flatMap((emision) => emision.value_co2)
        })

    }, [selectedCategoria, data]);

    return (
        <div className="CardResultGraphicYearCat relative bg-white w-full h-[535px] col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-6 rounded-3xs shadow-[0px_10px_10px_rgba(0,_0,_0,_0.05)] p-4 flex flex-wrap">

            <div className="right-[140px] bottom-[110px] text-xl text-darkslategray-200">
                <h3 className="m-0 absolute top-[35px] left-[40.13px] text-[inherit] tracking-[0.1px] leading-[27px] font-bold font-inherit">
                    Emisiones de categorías por periodo
                </h3>
                <label className="cursor-pointer absolute top-[68px] left-[41px] text-lg tracking-[0.09px] text-dimgray-200">
                    Selecciona una categoría
                </label>
                <div className="absolute w-[calc(100%_-_138px)] top-[calc(50%_-_170px)] right-[98px] left-[40px]">
                    <select
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-[0.5px] border-[#627173] bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        onChange={handleCategoriaChange} // Agregar el evento onChange para capturar la selección
                        value={selectedCategoria} // Asignar el valor del estado al componente select
                    >
                        <option>Selecciona una categoría</option>
                        {ArrayEmisiones.map((emision, index) => (
                            <option key={index} value={emision.categoria_insumo}>
                                {emision.nombre}
                            </option>
                        ))}
                    </select>

                    <div className="absolute top-[50px] left-[0.5px] text-smi tracking-[0.07px]">
                        tCO2 eq
                    </div>
                </div>

                <div className="absolute w-[calc(100%_-_81.5px)] right-[41.5px] bottom-[41.19px] left-[40px] h-[330.81px] text-smi-5">
                    <BarChart data={chartData} options={chartOptions} />
                </div>
            </div>
        </div>
    )
}
