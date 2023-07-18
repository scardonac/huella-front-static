//Dependencies
import { useState } from 'react';
// Components
import { Icons } from "../../../../assets/icons/IconProvider";

// Destructuring Icons
const { ArrowDownOrangeIcon } = Icons; // Iconos

export const Accordion = ({ title, sons }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (index === expandedIndex) {
            setExpandedIndex(null); // Cierra el elemento si ya está abierto
        } else {
            setExpandedIndex(index); // Abre el elemento seleccionado
        }
    };

    return (
        <div className="Accordion max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
            <div className="flex flex-col items-center">
                <h2 className="fzp text-26xl tracking-[0.83px] leading-[60px] text-primary-title1 inline-block font-bold mt-4 whitespace-nowrap">
                    {title}
                </h2>
            </div>
            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                {sons.map((son, index) => {
                    const isOpen = index === expandedIndex;

                    return (
                        <div className="py-5" key={son.id}>
                            <details
                                className={`group ${isOpen ? 'open' : ''}`}
                            >
                                <summary
                                    className="flex justify-between items-center font-medium cursor-pointer list-none"
                                    onClick={() => toggleAccordion(index)} // Llama a la función de alternancia al hacer clic en el título
                                >
                                    <span className="tracking-[0.12px] font-bold font-Sora text-primary-title1">
                                        {son.title}
                                    </span>
                                    <span className={`transition ${isOpen ? 'rotate-180' : ''} ml-1`}>
                                        <img
                                            className="w-[15.94px] h-[8.72px]"
                                            alt="icono flecha"
                                            src={ArrowDownOrangeIcon}
                                        />
                                    </span>
                                </summary>
                                {isOpen && (
                                    <div
                                        className="mt-3 animate-fadeIn tracking-[0.09px] leading-[26px] text-f18 text-dimgray-200"
                                        dangerouslySetInnerHTML={{ __html: son.description }}
                                    ></div>
                                )}
                            </details>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
