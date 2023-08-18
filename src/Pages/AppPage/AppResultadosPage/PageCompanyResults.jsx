//Dependencies
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
//Components
import CardResultDetail from '../../../components/organisms/cards/CardResultDetail'
import CardResultGraphicCategories from '../../../components/organisms/cards/CardResultGraphicCategories'
import CardResultGraphicComparison from '../../../components/organisms/cards/CardResultGraphicComparison'
import CardResultGraphicYear from '../../../components/organisms/cards/CardResultGraphicYear'
import CardResultGraphicYearCat from '../../../components/organisms/cards/CardResultGraphicYearCat'
import CardReultCongratulationsGraphic from '../../../components/organisms/cards/CardReultCongratulationsGraphic'
//Data
import { dataGraph, dataGraphDos } from '../../../Data'
//Assets
import { Icons } from '../../../assets/icons/IconProvider'
import { Imagenes } from '../../../assets//Images/ImagenProvider'

const { BackArrowIcon } = Icons; //Iconos
const { ImgOficinaazul } = Imagenes; //Iconos

export const PageCompanyResults = () => {

    const navigate = useNavigate(); // hook para navegar entre páginas

    // Obtenemos el estado del registro del store de Redux
    const { register: { centerCurrent, firstStep } } = useSelector(state => state.persistedData);

    // Obtenemos la data del reporte seleccionado
    const location = useLocation();

    const state = location.state;

    // const { calculo_details, partial_results } = state;

    console.log(state, 'state')

    return (
        <div className="PageCompanyResults flex flex-col items-center bg-whitesmoke-100 w-full min-h-screen text-left text-base text-gray-100 font-sora pb-16">

            <div className="flex items-center w-90 mt-6 text-darkgray">
                <img
                    className="mr-1 w-[5.59px] h-[10.05px]"
                    alt=""
                    src={BackArrowIcon}
                />
                <Link to="#" onClick={(e) => { e.preventDefault(); navigate(-1); }} className="text-[inherit] relative lg:ml-0 cursor-pointer flex items-center">
                    <b className="[text-decoration:underline] tracking-[0.08px] leading-[22px]">
                        Volver
                    </b>
                </Link>
            </div>

            <div className="flex items-center justify-between w-90 mt-10">
                <div className="flex items-center">
                    <img className="w-16 h-16" alt="" src={ImgOficinaazul} />
                    <div className="ml-4">
                        <h4 className="text-xl tracking-[0.1px] leading-[27px] font-bold font-inherit text-darkslategray-200">
                            {centerCurrent?.nombre}
                        </h4>
                        <p className="text-lg tracking-[0.09px] text-dimgray-200">
                            {firstStep?.startDate?.replace(/-/g, "/")} - {firstStep?.endDate?.replace(/-/g, "/")}
                        </p>
                    </div>
                </div>

                <div className="flex items-center">
                    <button className="rounded-3xs [border:none] p-0 bg-[transparent] top-[98px] right-[140px] w-[260px] h-[42px] bg-orangered-100">
                        <b className="top-[10px] left-[43px] text-lg tracking-[0.09px] font-sora text-white text-center">
                            Descargar informe
                        </b>
                    </button>
                </div>

            </div>

            <div className="flex items-center w-90 mt-4">
                <p className="text-lg tracking-[0.09px] text-dimgray-200">
                    Empleados
                </p>
                <p className="ml-2 text-lg tracking-[0.09px] font-bold text-darkslategray-200">
                    {centerCurrent?.numero_de_empleados}
                </p>
            </div>

            <div className="TotalEmisiones grid grid-cols-12 gap-4 bg-whitesmoke-100 w-90 text-left text-base text-gray-100 font-sora mt-3">

                <CardResultDetail
                    title="Total de emisiones"
                    cantCo2={state?.calculo_details?.valor_co2}
                    companyDetailId="1"
                    bg="bg-darkslategray-100"
                />
                <CardResultDetail
                    title="Emisiones directas"
                    subtitle="Alcance 1"
                    cantCo2={state?.partial_results?.Results_CO2[1]}
                    companyDetailId="1"
                />
                <CardResultDetail
                    title="Emisiones indirectas"
                    subtitle="Alcance 2"
                    cantCo2={state?.partial_results?.Results_CO2[2]}
                    companyDetailId="2"
                />
                <CardResultDetail
                    title="Otras Emisiones indirectas"
                    subtitle="Alcance 3"
                    cantCo2={state?.partial_results?.Results_CO2[3]}
                    companyDetailId="3"
                />

            </div>

            {/* grafica de torta */}
            <CardResultGraphicCategories dataGraph={dataGraph} />

            <div className="MetasEmisiones grid grid-cols-12 gap-4 bg-whitesmoke-100 text-left text-base text-gray-100 font-sora mt-3 w-90">

                {/* grafica de barras horizontal */}
                <CardResultGraphicComparison state={state} />

                {/* grafica de Meta  */}
                <CardReultCongratulationsGraphic state={state} />

            </div>

            <div className="grid grid-cols-12 gap-4 bg-whitesmoke-100 text-left text-base text-gray-100 font-sora mt-3 w-90 pb-10">

                {/* grafica de barras vertical */}
                <CardResultGraphicYear state={state} />

                {/* grafica de barras vertical */}
                <CardResultGraphicYearCat state={state} />

            </div>

        </div>
    );
}
