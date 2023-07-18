
// Dependencias
import { Link } from "react-router-dom";
import { Imagenes } from "../../../assets/Images/wImagenProvider";
// Components
const { Grupo2592 } = Imagenes;

const CardResultGraphicCategories = ({ dataGraph }) => {
  return (
    <div className="CardResultGraphicCategories mt-5 grid grid-cols-12 gap-4 w-90 h-[513px] rounded-3xs bg-white text-left text-lg text-gray-100 font-sora">
      <div className="GraficaTortas col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-6 text-white p-4 flex flex-col justify-center items-center">
        <div className="ml-10 mt-4 mb-4 w-full text-[inherit] tracking-[0.09px] font-bold font-inherit text-darkslategray-100 flex justify-start">
          <h4>
            Toneladas de CO2 equivalente por categoría
          </h4>
        </div>
        <div className="flex items-center justify-center mt-4">
          <img className="w-96 h-96" alt="" src={Grupo2592} />
        </div>
      </div>

      <div className="Categorias mt-14 col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-6 text-lg text-white p-4">
        <div className="flex justify-between">
          <h4 className="m-0 text-[inherit] tracking-[0.09px] font-bold font-inherit text-darkslategray-100">
            Categoría GEI
          </h4>
          <h4 className="m-0 text-[inherit] tracking-[0.09px] font-bold font-inherit text-darkslategray-100 mr-14">
            t CO2eq
          </h4>
        </div>
        {dataGraph.map(({ name, value, color }, index) => (
          <div className="flex justify-between" key={index}>
            <div>
              <div className="flex items-center space-x-2 mt-6">
                <div className={`w-3 h-3 rounded-full ${color}`}></div>
                <div className="text-base tracking-[0.08px] leading-[22px] text-dimgray-200">
                  {name}
                </div>
              </div>
            </div>
            <div>
              <div className="mt-6 mr-16">
                <div className="text-base tracking-[0.08px] leading-[22px] text-dimgray-200">
                  {value}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center w-90 mt-6 text-darkgray">
          <Link to="#" onClick={(e) => { e.preventDefault(); navigate(-1); }} className="text-[#202626] relative lg:ml-0 cursor-pointer flex items-center">
            <b className="[text-decoration:underline] tracking-[0.08px] leading-[22px]">
              Ver todos
            </b>
          </Link>
        </div>


      </div>

    </div>
  );
};

export default CardResultGraphicCategories;
