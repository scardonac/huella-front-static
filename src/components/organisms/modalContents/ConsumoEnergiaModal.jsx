
// Dependencias
import { useEffect, useState } from "react";

//Assets
import { Icons } from "../../../assets/icons/IconProvider";
//Components
import Modal from "../modals/Modal";

const { InformationIcon, TrushIcon } = Icons; //Iconos

export const ConsumoEnergiaModal = ({ closeModal, isOpen, dataModal, updateData = null }) => {

    const [valorKw, setValorKw] = useState(null);
    const [archivoAdjunto, setArchivoAdjunto] = useState(null);

    const handleChange = (e) => {
        setValorKw(e.target.value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setArchivoAdjunto(file?.name);
    };

    const { value, label, file } = dataModal;

    useEffect(() => {
        setValorKw(value ?? null);
        setArchivoAdjunto(file);
    }, [dataModal]);

    return (
        <>
            <Modal
                isOpen={isOpen}
                closeModal={closeModal}
                actionButtonFist={closeModal}
                actionButtonSecond={() => updateData(valorKw, archivoAdjunto)}
                buttons={true}
            >
                <p className="text-xl mb-4 font-bold">{label}</p>
                <label className="block mb-2 opacity-80" htmlFor="valor-kw">Valor en Kw:</label>
                <input
                    className="border border-primary-gris2 rounded-md p-2 mb-4 w-full"
                    id="valor-kw"
                    type="number"
                    value={valorKw}
                    onChange={handleChange}
                />
                <div className="flex items-center w-90 mt-2 mb-3 text-darkgray ">
                    <img
                        className="w-4 h-4"
                        alt=""
                        src={InformationIcon}
                    />
                    <b className="tracking-[0.08px] leading-[22px] ml-2">
                        Soporte
                    </b>
                </div>

                <div className="flex items-center w-90 mt-2 mb-3">
                    <label>
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                        <p className="underline font-semibold cursor-pointer mr-2">
                            {archivoAdjunto ? archivoAdjunto : 'Adjunta un archivo'}
                        </p>
                    </label>
                    {archivoAdjunto && (
                        <img
                            className="w-4 h-4 cursor-pointer"
                            alt=""
                            src={TrushIcon}
                            onClick={() => (setArchivoAdjunto(null))}
                        />
                    )}
                </div>
            </Modal >
        </>
    );
};