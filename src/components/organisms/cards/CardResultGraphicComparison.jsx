//Assets
import { Imagenes } from "../../../assets/Images/wImagenProvider";
// Components
const { Grupo2561 } = Imagenes;

const CardResultGraphicComparison = ({ dataGraph }) => {

  return (
    <div className="CardResultGraphicComparison relative bg-white w-full h-[372px] col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-8 rounded-3xs shadow-[0px_10px_10px_rgba(0,_0,_0,_0.05)] p-4 flex flex-wrap">

      <div className="w-full sm:w-[40%] p-4">
        {/* Contenido de la primera caja */}
        <div className="ml-10 mt-4 mb-4 w-full text-[inherit] tracking-[0.09px] font-bold font-inherit text-darkslategray-100">
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
      <div className="w-full sm:w-[60%] p-4 relative mt-[68px]">
        <img
          className="w-full h-auto"
          alt=""
          src={Grupo2561}
        />
        <div className="flex justify-between mt-2">
          <div className="relative text-center">
            <div>0</div>
            {/* <div className="border-r-[1px] border-dashed border-lightgray-200 h-full absolute left-1/2"></div> */}
          </div>
          <div className="relative text-center">
            <div>10</div>
            {/* <div className="border-r-[1px] border-dashed border-lightgray-200 h-full absolute left-1/2"></div> */}
          </div>
          <div className="relative text-center">
            <div>20</div>
            {/* <div className="border-r-[1px] border-dashed border-lightgray-200 h-full absolute left-1/2"></div> */}
          </div>
          <div className="relative text-center">
            <div>30</div>
            {/* <div className="border-r-[1px] border-dashed border-lightgray-200 h-full absolute left-1/2"></div> */}
          </div>
          <div className="relative text-center">
            <div>40</div>
            {/* <div className="border-r-[1px] border-dashed border-lightgray-200 h-full absolute left-1/2"></div> */}
          </div>
          <div className="relative text-center">
            <div>50</div>
            {/* <div className="border-r-[1px] border-dashed border-lightgray-200 h-full absolute left-1/2"></div> */}
          </div>
          {/* Repite para cada indicador */}
        </div>
        <div className="text-start mt-1">
          tCO2 eq
        </div>
      </div>

    </div>

  );
};

export default CardResultGraphicComparison;
