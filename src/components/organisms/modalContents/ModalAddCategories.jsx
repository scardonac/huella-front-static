//Components
import { ButtonTypeA } from "../../molecules/buttons/buttonTypeA/ButtonTypeA";
import { CustomAlert } from "../../molecules/customAlert/customAlert";
import { SelectionCard } from "../selectionCard/SelectionCard";
//Icons
import { Icons } from "../../../assets/icons/IconProvider";

const { CloseIcon } = Icons;

export const ModalAddCategories = ({
    actionButtonFist = null,
    actionButtonSecond = null,
    buttons = false,
    children,
    closeModal,
    emisiones = [],
    isOpen,
    setEmisiones = null,
    textAlert = null,
}) => {

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-midnightBlue font-Sora ">
                    <div className="bg-blancoMisty w-2/5  rounded-lg p-8 ">
                        <div className="flex justify-end">
                            <img
                                className="w- h-4 cursor-pointer border border-gray-300 rounded-full opacity-50 hover:opacity-100"
                                alt=""
                                src={CloseIcon}
                                onClick={() => closeModal()}
                            />
                        </div>
                        <ul className='flex flex-col gap-4 mt-3'>
                            {emisiones.map((eDirecta) => (
                                <div key={eDirecta.id} >
                                    <SelectionCard
                                        icon={eDirecta?.icon}
                                        iconChecked={eDirecta?.iconChecked}
                                        id={eDirecta?.id}
                                        isSelected={eDirecta?.isChecked}
                                        name={eDirecta.name}
                                        setData={setEmisiones}
                                    />
                                </div>
                            ))}
                        </ul>
                        {textAlert && (
                            <div className='mt-10 flex justify-center'>
                                <CustomAlert
                                    message={textAlert}
                                    type='error'
                                />
                            </div>
                        )}
                        {buttons && (
                            <div className="flex items-center justify-between mt-5">
                                <div className="pr-2 w-full">
                                    <ButtonTypeA text='Cancelar' action={() => actionButtonFist()} width="100%" />
                                </div>
                                <div className="pl-2 w-full">
                                    <ButtonTypeA width="100%" text='Subir datos' bgColor='#FE5000' txColor='#FFFFFF' bdWidth='0px' bgHvColor='#E6500B' submitBtn={true} action={() => actionButtonSecond()} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};