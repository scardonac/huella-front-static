//Dependencies
import { useNavigate, useLocation, Link } from 'react-router-dom'
//Routes
import { paths } from '../../../routes/paths'
//Assets
import { Imagenes } from "../../../assets/Images/wImagenProvider";
// Components
const { Grupo2522 } = Imagenes;

export const LandingHeader = () => {
    const { pathname } = useLocation()

    const navigate = useNavigate()

    return (
        <nav className="LandingHeader fixed z-50 w-full bg-darkslategray-100 h-20 min-w-[1500px] lg:min-w-[1200px] flex justify-center items-center gap-64" id="N">
            <div className="">
                <img className='' src={Grupo2522} />
            </div>
            <div className='flex gap-12'>
                <Link to={paths.HOME}>
                    <b className={`text-primary-white1 text-f16 hover:text-primary-green2  ${pathname === "/" ? "underline font-bold text-primary-green2" : ""}`}>Inicio</b>
                </Link>
                <Link to={paths.CONTACT}>
                    <b className={`text-primary-white1 text-f16 hover:text-primary-green2  ${pathname === "/contact" ? "underline font-bold text-primary-green2" : ""}`}>Contáctanos</b>
                </Link>
                <Link to={paths.PRECIOS}>
                    <b className={`text-primary-white1 text-f16 hover:text-primary-green2  ${pathname === "/precios" ? "underline font-bold text-primary-green2" : ""}`}>Precios</b>
                </Link>
            </div>
            <div className='flex gap-8'>
                <button
                    onClick={() => navigate(paths.LOGIN)}
                    className={`text-primary-white1 text-f16 border px-4 py-2 rounded-lg border-primary-white1 ${pathname === "/login" ? " font-bold text-primary-green2" : ""}`}
                >Iniciar sesión
                </button>
                <button className='text-primary-title1 font-bold text-f16 border px-4 py-2 rounded-lg bg-primary-green2'>Regístrate</button>
            </div>
        </nav>
    )
}