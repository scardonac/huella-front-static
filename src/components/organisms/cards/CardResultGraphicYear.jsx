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

                    <div className="absolute h-[calc(100%_-_38px)] top-[10.03px] bottom-[29.78px] left-[25.19px] box-border w-0.5 border-r-[1px] border-solid border-black" />
                    <div className="absolute bottom-[28.78px] left-[26.19px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute bottom-[59.5px] left-[26.19px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute top-[calc(50%_+_57.59px)] left-[26.19px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute top-[calc(50%_+_24.86px)] left-[26.19px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute top-[calc(50%_-_8.87px)] left-[26.19px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute top-[calc(50%_-_41.6px)] left-[26.19px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute top-[calc(50%_-_75.33px)] left-[26.19px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute top-[43.76px] left-[26.19px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <div className="absolute top-[10px] left-[26.19px] box-border w-[6.63px] h-0.5 border-t-[1px] border-solid border-black" />
                    <BarChart/>
                </div>
            </div>

        </div>
    )
}
