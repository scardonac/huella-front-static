// Modal.jsx
import { Icons } from "../../../assets/icons/IconProvider";
import { ButtonTypeA } from "../../molecules/buttons/buttonTypeA/ButtonTypeA";

const { CloseIcon } = Icons;

const Modal = ({
    actionButtonFist = null,
    actionButtonSecond = null,
    buttons = false,
    children,
    closeModal,
    isOpen,
    labelButtonFist = "Cancelar",
    labelButtonSecond = "Subir datos",
}) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-midnightBlue font-Sora">
                    <div className="bg-white w-2/5 h-[380px] rounded-lg p-8">
                        <div className="flex justify-end">
                            <img
                                className="w- h-4 cursor-pointer border border-gray-300 rounded-full opacity-50 hover:opacity-100"
                                alt=""
                                src={CloseIcon}
                                onClick={() => closeModal()}
                            />
                        </div>

                        {children}

                        {buttons && (
                            <div className="flex items-center justify-between mt-5">
                                <div className="pr-2 w-full">
                                    <ButtonTypeA text={labelButtonFist} action={() => actionButtonFist()} width="100%" />
                                </div>
                                <div className="pl-2 w-full">
                                    <ButtonTypeA
                                        width="100%"
                                        text={labelButtonSecond}
                                        bgColor='#FE5000'
                                        txColor='#FFFFFF'
                                        bdWidth='0px'
                                        bgHvColor='#E6500B'
                                        submitBtn={true}
                                        action={() => actionButtonSecond()}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
