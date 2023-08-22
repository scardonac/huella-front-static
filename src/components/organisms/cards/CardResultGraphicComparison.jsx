//Assets
import { Imagenes } from "../../../assets/Images/ImagenProvider";
// Components
import BarChart from '../../molecules/graphics/BarChart';

const { Grupo2561 } = Imagenes;

const CardResultGraphicComparison = ({ state }) => {

  const Emisiones = [
    state?.partial_results?.Results_CO2[1],
    state?.partial_results?.Results_CO2[2],
    state?.partial_results?.Results_CO2[3],
  ];
  
  const chartData = {
    labels: ["Alcance 1", "Alcance 2", "Alcance 3"],
    datasets: [
      {
        label: "Emisiones",
        data: Emisiones,
        backgroundColor: [
          "rgba(77, 153, 127,1)",
          "rgba(206, 230, 173,1)",
          "rgba(14, 85, 92,1)"
        ]
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    // maintainAspectRatio: false,
    indexAxis: "y",
    animation: false,
    plugins: {
      legend: {
        display: false, // Oculta la leyenda en la parte superior
      }
    },
    scales: {
      x: {
        ticks: { color: "rgba(0, 0, 0)" }
      }
    }
  };

  const dataGraph = [
    {
      "name": "Emisiones directas",
      "value": state?.partial_results?.Results_CO2[1],
      "color": "bg-emerald-600"
    },
    {
      "name": "Emisiones indirectas",
      "value": state?.partial_results?.Results_CO2[2],
      "color": "bg-lime-200"
    },
    {
      "name": "Otras Emisiones indirectas",
      "value": state?.partial_results?.Results_CO2[3],
      "color": "bg-teal-900"
    },
  ];

  return (
    <div className="CardResultGraphicComparison relative bg-white w-full h-[372px] col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-8 rounded-3xs shadow-[0px_10px_10px_rgba(0,_0,_0,_0.05)] p-4 flex flex-wrap">

      <div className="w-full sm:w-[40%] p-4">
        {/* Contenido de la primera caja */}
        <div className="ml-10 mt-0 mb-4 w-full text-[inherit] tracking-[0.09px] font-bold font-inherit text-darkslategray-100">
          <h4>
            Comparación de alcances
          </h4>
        </div>

        {dataGraph.map(({ name, value, color }, index) => (
          <div key={index} className="flex flex-col justify-start items-start ml-10">

            <div className="flex items-center space-x-2 mt-6">
              <div className={`w-3 h-3 rounded-full ${color}`}></div>
              <div className="text-base tracking-[0.08px] leading-[22px] text-dimgray-200">
                {name}
              </div>
            </div>

            <div className="mt-2 ml-5">
              <div className="text-base tracking-[0.08px] leading-[22px] text-dimgray-200">
                {value}
              </div>
            </div>

          </div>
        ))}
      </div>
      <div className="w-full sm:w-[60%] p-4 relative mt-[5px]">

        <BarChart data={chartData} options={chartOptions} />

        <div className="flex justify-between mt-2">
          <div className="text-start mt-1">
            tCO2 eq
          </div>
        </div>
      </div>

    </div>

  );
};

export default CardResultGraphicComparison;
