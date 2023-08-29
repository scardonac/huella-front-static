import React, { useEffect, useState } from "react";
import { Illustrations } from "../../../assets/Illustrations/IllustrationProvider";
import { StateIndicator } from "../stateIndicator/StateIndicator";
import { useSelector } from "react-redux";

function UnderlineTabs({
    emissionsEarring = [],
    thTablea = [],
    label = "Tipo de Emisiones",
    navigationActive = false,
    goNext = null,
    dataIcons = {},
}) {

    const { register: { centers } } = useSelector(state => state.persistedData); // selector para obtener los datos del registro

    console.log(emissionsEarring, 'emissionsEarring')

    const [activeTab, setActiveTab] = useState(centers[0] ? centers[0].nombre : '');

    // useEffect(() => {
    //     if (data.length > 0) {
    //         setActiveTab(data[0])
    //     } else {
    //         console.log('El array está vacío');
    //     }
    // }, [data]);

    const filterCenters = (id) => centers.filter((center) => center.id === id)[0]?.nombre; //Función para filtrar los centros de trabajo

    console.log(activeTab, 'activeTab')
    return (
        <div>
            <div className="flex border-b border-blue-gray-50">
                {centers.map(({ nombre, id }) => (
                    <div
                        key={id}
                        onClick={() => setActiveTab(nombre)}
                        className={`cursor-pointer p-4 ${activeTab === nombre ? "text-gray-900 border-b-2 border-primary-title1 opacity-100" : "text-gray-500"
                            }`}
                    >
                        {/* {filterCenters(id)} */}
                        {nombre}
                    </div>
                ))}
            </div>
            <div className="p-4">
                {emissionsEarring.slice(-3).map((item) => (
                    // <div
                    //     key={value}
                    //     className={`${activeTab === value ? "" : "hidden"}`}
                    // >
                    //     {desc}
                    // </div>
                    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md ">
                        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                            <thead className="">
                                <tr >
                                    {thTablea.map((th, index) => (
                                        <th key={index} scope="col" className={th.className}>{th.label}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className=" divide-y divide-lightgray-200">
                                <tr className="">
                                    <td className="pl-6 py-4">
                                        <div className="relative h-[60px] w-[60px]">
                                            <img
                                                className="h-full w-full rounded-lg object-cover object-center"
                                                src={Illustrations[dataIcons[item?.categoryName].iconChecked]}
                                                // src={Illustrations.ViajesNegocios_VSuave}
                                                alt={item?.categoryName}
                                            />
                                        </div>
                                    </td>
                                    <td className="flex pl-6 py-8 text-gray-900">
                                        <p className="font-medium text-gray-700">{item?.categoryName}</p>
                                    </td>
                                    <td className="pl-6 py-4">
                                        <StateIndicator state={item?.status} /* state={3} */ />
                                    </td>
                                    <td className="pl-6 py-4">{"20/03/2022"}</td>
                                    <td className="pl-6 py-4 pr-4">
                                        <a onClick={navigationActive ? goNext : null} className='underline cursor-pointer text-black font-semibold'>Completar</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UnderlineTabs;