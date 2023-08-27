//Components
import { ButtonTypeA } from "../../molecules/buttons/buttonTypeA/ButtonTypeA";
import { GoBackLink } from "../../molecules/goBackLink/GoBackLink";
//Assets
import { Illustrations } from "../../../assets/Illustrations/IllustrationProvider"

const { Planetgrown } = Illustrations; // importa las imágenes
export const MoreInformation = ({setMoreInformation}) => {
    return (
        <>
            <GoBackLink 
                functionNavigate={() => setMoreInformation(false)}
            />
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-2/4 flex  flex-col justify-center gap-5">
                    <b className="w-full font-bold text-5xl leading-[45px] tracking-[0.36px] text-primary-title1 text-center opacity-100">
                        Metas
                    </b>
                    <h1 className="tracking-[0.8px] text-lg text-forestGray opacity-100">
                        Las metas en un registro de emisiones son objetivos claros y medibles que se establecen para controlar las emisiones de gases de efecto invernadero. Su propósito es asegurar que los niveles de GEI se mantengan dentro de los límites deseados durante un período específico.
                    </h1>
                    <b className="w-full font-bold text-5xl leading-[45px] tracking-[0.36px] text-primary-title1 text-center opacity-100">
                        Tipos de metas
                    </b>
                    <b className="w-full font-bold text-5xl leading-[45px] tracking-[0.36px] text-primary-title1 text-start opacity-100">
                        Tipos de metas
                    </b>
                    <h1 className="tracking-[0.8px] text-lg text-forestGray opacity-100">
                        Es el porcentaje de CO2 equivalente que buscas reducir en comparación con un registro previo.
                    </h1>
                    <h1 className="tracking-[0.8px] text-lg text-forestGray opacity-100">
                        Está disponible únicamente para los centros de trabajo con un histórico de registros previos.
                    </h1>
                    <b className="w-full font-bold text-5xl leading-[45px] tracking-[0.36px] text-primary-title1 text-start opacity-100">
                        Ejemplo
                    </b>
                    <h1 className="tracking-[0.8px] text-lg text-forestGray opacity-100">
                        Una empresa del sector textil quiere medir su huella de carbono actual y <b className="font-bold">tiene como meta reducir un 10% las emisiones</b> en comparación con el año anterior.
                    </h1>
                    <b className="w-full font-bold text-5xl leading-[45px] tracking-[0.36px] text-primary-title1 text-start opacity-100">
                        Meta límite de emisión
                    </b>
                    <h1 className="tracking-[0.8px] text-lg text-forestGray opacity-100">
                        Es el máximo de emisiones (en toneladas de CO2 eq) que deseas evitar superar una empresa.
                    </h1>
                    <b className="w-full font-bold text-5xl leading-[45px] tracking-[0.36px] text-primary-title1 text-start opacity-100">
                        Ejemplo
                    </b>
                    <h1 className="tracking-[0.8px] text-lg text-forestGray opacity-100">
                        Una empresa del sector textil quiere medir su huella de carbono actual y ha establecido <b className="font-bold">un límite máximo de emisiones de 286 toneladas de CO2 equivalente.</b>
                    </h1>

                    <div className="w-full h-[300px] relative">
                        <img
                            className="w-full object-cover"
                            alt=""
                            src={Planetgrown}
                        />

                        {/* Botón */}
                        <div className="absolute top-1/4 left-2/3 w-[234px]">
                            <ButtonTypeA width="100%" text='Solicita una asesoría' bgColor='#FE5000' txColor='#FFFFFF' bdWidth='0px' bgHvColor='#E6500B' submitBtn={false} action={() => { }} />
                        </div>

                        {/* Etiqueta */}
                        <div className="absolute top-[12%] left-[70%] px-2 py-1">
                            <b className="w-full font-bold text-base leading-[45px] tracking-[0.36px] text-primary-title1 text-start opacity-100">
                                Deseas tener ayuda
                            </b>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
