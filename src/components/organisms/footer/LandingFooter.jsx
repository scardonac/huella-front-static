
//Assets
import { Imagenes } from "../../../assets/Images/ImagenProvider";
// Components
const { Grupo2923, Grupo2905 } = Imagenes;
import { Contact } from '../landingComponents/landingHomeComponents/Contact'

export const LandingFooter = () => {
    return (
        <footer className="LandingFooter w-full h-[461px] text-honeydew">

            <article className="h-[398px] bg-darkslategray-100 text-left text-lg text-white font-sora flex flex-row">

                <div className="flex w-3/5 h-auto text-base justify-center items-center">
                    <div className="tracking-[0.08px] leading-[22px] w-3/4 sm:w-4/5 lg:w-2/3 text-left">
                        <img className="w-[197.61px] h-[64.42px]" alt="Logo de Carbonlytics" src={Grupo2905} />
                        <p className="m-0 mt-6">
                            <b className="font-sora">Carbonlytics</b>
                            <span> es una suite de productos que usa la tecnología para brindar soluciones hacia un mundo más sostenible. </span>
                        </p>
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">
                            <b className="font-sora">La plataforma Footprint</b>
                            <span> te permite generar informes y reportes confiables de tu huella de carbono en los alcances 1, 2 y 3 a unos pocos clics, ahorrar tiempo y recursos, y contar con un equipo de profesionales a disposición para ayudarte en el camino a cerrar el ciclo de la mitigación y la compensación de tus emisiones de GEI. </span>
                        </p>
                    </div>
                </div>

                <Contact
                    contactFlag={true}
                    title={'Contáctanos'}
                />

            </article>

            <article className="bg-darkcyan h-[63px] w-full">
                <div className="flex items-center justify-center h-full">
                    <span>Desarrollado por </span>
                    <b className="ml-1"> Sistemas Inteligentes en Red</b>
                    <img className="ml-16" alt="Ícono de redes sociales" src={Grupo2923} />
                </div>
            </article>

        </footer>


    )
}