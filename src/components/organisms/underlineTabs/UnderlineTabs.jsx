import React, { useEffect, useState } from "react";
import { Illustrations } from "../../../assets/Illustrations/IllustrationProvider";
import { StateIndicator } from "../stateIndicator/StateIndicator";

function UnderlineTabs({
    emissionsEarring = [],
    thTablea = [],
    label = "Tipo de Emisiones",
    navigationActive = false,
    goNext = null,
    dataIcons = {},
}) {
    console.log(emissionsEarring, 'emissionsEarring')
    const data = [
        {
            label: "HTML",
            value: "html",
            desc: `It really matters and then like it really doesn't matter...
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
        },
        {
            label: "React",
            value: "react",
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Vue",
            value: "vue",
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes...
      We're constantly trying to express ourselves and actualize our dreams.`,
        },
        {
            label: "Angular",
            value: "angular",
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Svelte",
            value: "svelte",
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes...
      We're constantly trying to express ourselves and actualize our dreams.`,
        },
    ];

    const [activeTab, setActiveTab] = useState(emissionsEarring[0] ? emissionsEarring[0].categoryName : '');

    // useEffect(() => {
    //     if (data.length > 0) {
    //         setActiveTab(data[0])
    //     } else {
    //         console.log('El array está vacío');
    //     }
    // }, [data]);

    console.log(activeTab, 'activeTab')
    return (
        <div>
            <div className="flex border-b border-blue-gray-50">
                {emissionsEarring.map(({ categoryName, id }) => (
                    <div
                        key={id}
                        onClick={() => setActiveTab(categoryName)}
                        className={`cursor-pointer p-4 ${activeTab === categoryName ? "text-gray-900 border-b-2 border-primary-title1 opacity-100" : "text-gray-500"
                            }`}
                    >
                        {categoryName}
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