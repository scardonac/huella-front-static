//Dependencies
import { Link } from "react-router-dom";
//Routes
import { paths } from "../../../routes/paths";
//Assets
import { Illustrations } from "../../../assets/Illustrations/IllustrationProvider";

const { SendEmail } = Illustrations; // importa las imágenes

export const SuccessfulMailing = ({ setTab }) => {

    return (
        <>
            <img
                className="w-[123px] h-[73px] object-cover"
                alt=""
                src={SendEmail}
            />

            <b className="fzp font-bold text-4xl leading-[45px] tracking-[0.36px] text-primary-title1 text-left">
                ¡Envío exitoso!
            </b>

            <div className="w-2/3">
                <p className="font-normal text-base leading-[22px] tracking-[0.08px] text-darkslategray-200 text-left opacity-100 mb-4">
                    Revisa tu correo electrónico, te enviamos las instrucciones para restablecer la contraseña.
                </p>
                <p className="font-normal text-base leading-[22px] tracking-[0.08px] text-darkslategray-200 text-left opacity-100">
                    ¿No recibiste el correo? Revisa en la sección de spam o
                    <b
                        onClick={() => setTab(2)}
                        className="ml-1 cursor-pointer font-bold text-base leading-[22px] tracking-[0.08px] text-primary-title1 text-left underline">
                        intenta nuevamente con otro correo
                    </b>
                </p>
            </div>

            <Link
                to={paths.CONTACT}
                state={{ scroll: 730 }}
            >
                <h1
                    className="mt-16 cursor-pointer text-base [text-decoration:underline] tracking-[0.08px] leading-[22px] font-sora text-gray-100 text-center">
                    ¿Aún no tienes una cuenta? Regístrate
                </h1>
            </Link>

        </>
    )
}
