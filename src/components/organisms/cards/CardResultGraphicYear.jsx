import BarChart from "../../molecules/graficaBarras/BarChart";
export default function CardResultGraphicYear() {
    return (
        <div className="CardResultGraphicYear relative bg-white w-full h-[420px] col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-6 rounded-3xs shadow-[0px_10px_10px_rgba(0,_0,_0,_0.05)] p-4 flex flex-wrap">

            <div className="bottom-[224px] left-[416px] rounded-3xs bg-white text-xl text-darkslategray-200">
            <div className="absolute top-[62px] left-[40.6px] text-smi tracking-[0.07px]">
                        tCO2 eq
                    </div>
                <h3 className="m-0 absolute top-[40px] left-[40.82px] text-[inherit] tracking-[0.1px] leading-[27px] font-bold font-inherit">
                    Emisiones por año
                </h3>
                <div className="absolute w-[calc(100%_-_79.97px)] right-[39.3px] bottom-[29.36px] left-[40.67px] h-[303.64px] text-sm">
                    <BarChart/>
                </div>
            </div>

        </div>
    )
}
