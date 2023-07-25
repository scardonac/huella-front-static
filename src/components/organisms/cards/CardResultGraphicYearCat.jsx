import BarChart2 from "../../molecules/graficaBarras2/Barchart2";
//Assets
// import { Imagenes } from "../../../assets/Images/wImagenProvider";
// Components
// const { Grupo2573, Trazado19073 } = Imagenes;


export default function CardResultGraphicYearCat() {
    return (
        <div className="CardResultGraphicYearCat relative bg-white w-full h-[535px] col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-6 rounded-3xs shadow-[0px_10px_10px_rgba(0,_0,_0,_0.05)] p-4 flex flex-wrap">

            <div className="right-[140px] bottom-[110px] text-xl text-darkslategray-200">
                <h3 className="m-0 absolute top-[35px] left-[40.13px] text-[inherit] tracking-[0.1px] leading-[27px] font-bold font-inherit">
                    Emisiones de categorías por año
                </h3>
                <label className="cursor-pointer absolute top-[68px] left-[41px] text-lg tracking-[0.09px] text-dimgray-200">
                    Selecciona una categoría
                </label>
                <div className="absolute w-[calc(100%_-_138px)] top-[calc(50%_-_170px)] right-[98px] left-[40px]">
                    <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-[0.5px] border-[#627173] bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option>Plantas generadoras de energía</option>
                    </select>
                    <div className="absolute top-[50px] left-[0.5px] text-smi tracking-[0.07px]">
                        tCO2 eq
                    </div>
                </div>

                <div className="absolute w-[calc(100%_-_81.5px)] right-[41.5px] bottom-[41.19px] left-[40px] h-[330.81px] text-smi-5">
                    <div className="absolute h-[calc(100%_-_38px)] top-[10.03px] bottom-[29.78px] left-[35px] box-border w-0.5 border-r-[1px] border-solid border-black" />
                    <div className="absolute bottom-[27px] left-[35px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute bottom-[65px] left-[35px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute top-[calc(50%_+_60px)] left-[35px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute top-[calc(50%_+_25px)] left-[35px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute top-[calc(50%_-_10px)] left-[35px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute top-[calc(50%_-_48px)] left-[35px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute top-[calc(50%_-_84px)] left-[35px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute top-[45px] left-[35px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute top-[10px] left-[35px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <BarChart2/>
                    </div>
            </div>
        </div>
    )
}
