//Assets
import { Imagenes } from "../../../assets/Images/ImagenProvider";

const { SuccessfulRegistration, } = Imagenes; // importa las imágenes

export const BackgroundTemplate = ({ children }) => {

    return (
        <>
            <img
                className="w-full h-screen object-cover"
                alt=""
                src={SuccessfulRegistration}
            />
            {children}
        </>
    )
}
