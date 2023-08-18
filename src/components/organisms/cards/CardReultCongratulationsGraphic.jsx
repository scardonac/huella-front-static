// TODO: Card Result Congratulations Graphic component

//Assets
import { Imagenes } from "../../../assets/Images/ImagenProvider";
// Components
const { Grupo2572 } = Imagenes;

export default function CardReultCongratulationsGraphic({ state }) {
    return (
        <div className="CardReultCongratulationsGraphic relative bg-white w-full h-[372px] col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-4 rounded-3xs shadow-[0px_10px_10px_rgba(0,_0,_0,_0.05)] flex flex-wrap border-[1px] border-solid border-darkcyan">
            <div className="Felicidades col-span-12 flex flex-col justify-center items-center rounded-3xs box-border w-full h-[372px] text-darkslategray-100 ">
                <img
                    className="top-[24.96px] left-[calc(50%_-_47px)] w-[94.28px] h-[97.77px]"
                    alt=""
                    src={Grupo2572}
                />
                <p className="m-0 top-[calc(50%_-_42.96px)] left-[37px] tracking-[0.08px] leading-[22px] text-dimgray-200 mt-3">
                    <span>{`Meta de emisiones reducidas: `}</span>
                    <b>30.01 ton</b>
                </p>
                <h3 className="m-0 top-[calc(50%_-_1.96px)] left-[calc(50%_-_79px)] text-5xl tracking-[0.12px] font-bold font-inherit mt-3">
                    ¡Felicidades!
                </h3>

                <p className="m-0 w-[calc(100%_-_69px)] top-[calc(50%_+_36.04px)] left-[35px] tracking-[0.08px] leading-[22px] text-dimgray-200 text-center inline-block mt-3">
                    <span>{`Cumpliste tu meta de reducción de emisiones con `}</span>
                    <b>31.65 ton</b>
                </p>
                <h3 className="m-0 bottom-[45.96px] left-[calc(50%_-_61px)] text-26xl tracking-[0.22px] leading-[38px] font-bold font-inherit mt-4">
                    102%
                </h3>
                <p className="m-0 bottom-[24.96px] left-[calc(50%_-_70px)] tracking-[0.08px] leading-[22px] text-center mt-3">
                    de cumplimiento
                </p>
            </div>

        </div>
    )
}
