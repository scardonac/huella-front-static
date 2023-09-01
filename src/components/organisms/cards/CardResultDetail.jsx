// Card Result Detail  for Result Page

//Dependencias
import { Link } from 'react-router-dom'
//Assets

import { Icons } from "../../../assets/icons/IconProvider";
const { Arrow1Icon } = Icons; // Iconos

export default function CardResultDetail({ title, subtitle, cantCo2, companyDetailId, bg = null }) {

    return (
        <div className={`relative h-[216px] items-center col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 ${bg ? bg : 'bg-palegoldenrod-200'} ${bg && 'text-white'} rounded-3xs shadow-[0px_10px_10px_rgba(0,_0,_0,_0.05)] p-4 flex flex-col justify-between`}>

            <div>
                <p className={`${bg ? 'mt-7' : 'mt-4'} text-center text-lg tracking-[0.09px] font-bold`}>
                    {title}
                </p>
                <p className={`text-center ${bg ? 'text-white' : 'text-gray-800'} opacity-100 tracking-[0.08px] leading-[22px]`}>
                    {subtitle}
                </p>
                <h3 className={`${bg && 'mt-4'} ${bg ? 'text-f28' : 'text-5xl'} text-center  tracking-[0.12px] font-bold font-inherit  ${bg ? 'text-white' : 'text-darkslategray-100'}`}>
                    {cantCo2}
                </h3>
                <p className={`${bg && 'mt-4'} text-center text-sm tracking-[0.07px] font-bold ${bg ? 'text-white' : 'text-darkslategray-100'}`}>
                    Ton CO2eq
                </p>
            </div>

            {!bg && (
                <div className="self-end">
                    <Link to={`/app/results/company/detail/${companyDetailId}`} className="text-[inherit] relative lg:ml-0 cursor-pointer flex items-center">
                        <b className="[text-decoration:underline] tracking-[0.08px] leading-[22px]">
                            Ver detalles
                        </b>
                        <img
                            className="ml-1 w-[5.59px] h-[10.05px]"
                            alt=""
                            src={Arrow1Icon}
                        />
                    </Link>
                </div>
            )}

        </div>
    )
}
