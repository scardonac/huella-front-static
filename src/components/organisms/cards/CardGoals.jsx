import { Imagenes } from "../../../assets/Images/wImagenProvider";
import { Illustrations } from "../../../assets/Illustrations/IllustrationProvider"

const { Balance, Planet, Temperature } = Illustrations;
const { Goalshome } = Imagenes;

export default function CardGoals() {
    return (
        <section className="MetasCard relative w-[90%] max-w-[1200px] h-auto max-h-[765px] rounded-3xl mt-8 bg-cover bg-no-repeat bg-[top] text-white p-10" style={{backgroundImage: `url(${Goalshome})`}}>
            <div className="flex flex-wrap justify-around items-center h-full">

                <div className="flex sm:w-auto">
                    <div className="w-[334px]">
                        <img
                            className="w-[79.8px] h-[79.71px] opacity-[1] my-3"
                            alt=""
                            src={Balance}
                            data-animate-on-scroll
                        />
                        <b className="w-full text-36xl tracking-[0.83px] leading-[60px] font-prompt text-palegoldenrod-200">
                            2050
                        </b>
                        <div className="my-3 tracking-[0.09px] leading-[26px] text-left">
                            es el año que se busca alcanzar un balance neto mundial de cero emisiones de CO2.
                        </div>
                    </div>
                </div>

                <hr className="border-r-[1px] border-solid border-white h-40 mr-6 hidden lg:block" />

                <div className="flex sm:w-auto">
                    <div className="h-[calc(100%_-_1.23px)] w-[334px]">
                        <img
                            className="w-[79.8px] h-[79.71px] opacity-[1] my-3"
                            alt=""
                            src={Planet}
                            data-animate-on-scroll
                        />
                        <b className="w-full text-36xl tracking-[0.83px] leading-[60px] font-prompt text-palegoldenrod-200">
                            50%
                        </b>
                        <div className="my-3 tracking-[0.09px] leading-[26px] text-left">
                            Menos de emisiones contaminantes para el 2030 en el mundo
                        </div>
                    </div>
                </div>

                <hr className="border-r-[1px] border-solid border-white h-40 mx-5 hidden lg:block" />

                <div className="flex w-full sm:w-auto">
                    <div className="h-[calc(100%_-_1.23px)] w-[334px]">
                        <img
                            className="w-[79.8px] h-[79.71px] opacity-[1] my-3"
                            alt=""
                            src={Temperature}
                            data-animate-on-scroll
                        />
                        <b className="w-full  text-36xl tracking-[0.83px] leading-[60px] font-prompt text-palegoldenrod-200">
                            1.5°C
                        </b>
                        <div className="my-3 tracking-[0.09px] leading-[26px] text-left">
                            Es el límite establecido de calentamiento en el planeta.
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}