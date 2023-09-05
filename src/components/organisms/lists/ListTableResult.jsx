// List Table Result
//Dependencias
import { useState } from 'react';
import { Link } from 'react-router-dom'

//Assets
import { Icons } from '../../../assets/icons/IconProvider';
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';

const { Arrow1Icon, Compensation1Icon, CompensacionIcon } = Icons; //Icons
const { illustration1 } = Illustrations; //Illustrations

export default function ListTableResult({ title, subtitle, period, co2, download, empresaId, isLastRow = false }) {

    const typeCo2 = parseFloat(co2.replace(',', '.')) > 55 ? true : false;

    const textTooltip = `${typeCo2 ? 'Subió' : 'Bajó'} en comparación con el año anterior.`;

    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="px-4 py-2 flex justify-between items-center">

            <div className="flex items-center">
                <img className="w-14 h-14" alt="" src={illustration1} />
                <div className="ml-5">
                    <h4 className="text-[inherit] tracking-[0.09px] font-bold font-inherit">
                        {title}
                    </h4>
                    <p className="text-base tracking-[0.08px] leading-[22px]">
                        {subtitle}
                    </p>
                </div>
            </div>

            <div className="w-auto mr-20 2xl:mr-[10px] ">
                <p className="tracking-[0.08px] leading-[22px]">
                    {period}
                </p>
            </div>

            <div
                className="relative flex items-center 2xl:ml-12"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <p className="tracking-[0.08px] leading-[22px]">{co2}</p>
                <img className="w-4 h-4 ml-2" alt="" src={typeCo2 ? Compensation1Icon : CompensacionIcon} />

                {showTooltip && (
                    <div
                        className={`absolute z-10 w-64 p-2 bg-[#0E555C] text-white text-sm rounded-[10px] transform -translate-x-1/2 ${isLastRow ? 'bottom-6 translate-y-0' : 'bottom-0 translate-y-full'} left-1/2`}
                    >
                        {textTooltip}
                    </div>
                )}

            </div>



            <div className="flex items-center 2xl:mr-12">
                <button className="px-2 py-2 rounded bg-palegoldenrod-200 text-base tracking-[0.08px] leading-[22px] font-sora text-darkslategray-100 mr-6 2xl:mr-16">
                    <b>Descargar informe</b>
                </button>

                <Link to={`/app/results/company/${empresaId}`} className="text-[inherit] relative lg:ml-0 cursor-pointer">
                    <b className="text-base tracking-[0.08px] underline mr-1">Ver completo</b>
                    <img
                        className="absolute top-1/2 right-[-3.9px] transform -translate-y-1/2 w-[5.60px] h-[10.05px]"
                        alt="arrow-right"
                        src={Arrow1Icon}
                    />
                </Link>
            </div>

        </div>
    )
}
