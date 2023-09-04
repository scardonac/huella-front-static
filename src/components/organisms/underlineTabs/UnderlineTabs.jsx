import React, { useEffect, useState } from "react";
import { Illustrations } from "../../../assets/Illustrations/IllustrationProvider";
import { StateIndicator } from "../stateIndicator/StateIndicator";
import { useSelector } from "react-redux";
import { updateEmissionsAction } from "../../../redux/actions/RegisterAction";
import { useAppDispatch } from "../../../redux/store";
import { Link } from "react-router-dom";

function UnderlineTabs({
    centersEarring = [],
    thTablea = [],
    dataIcons = {},
}) {

    const dispatch = useAppDispatch(); // Dispatch de acciones de Redux

    const { register: { centers } } = useSelector(state => state.persistedData); // selector para obtener los datos del registro

    const [activeTab, setActiveTab] = useState(0);
    const [nameCenter, setNameCenter] = useState(centersEarring[0] ? centersEarring[0].nameCenter : '');
    const [logsEarring, setLogsEarring] = useState([]);



    const getCalculations = async (idCalculo) => {
        const { data, error, verify } = await dispatch(updateEmissionsAction(idCalculo));
        if (!verify) return;
        console.log(data, 'data')
        const newData = data.logs_details.map((item) => {
            if (item.status === 2 || item.status === 1) {
                return {
                    categoryName: item.nombre,
                    status: item.status,
                    id: item.id,
                    log_id: item.log_id,
                };
            }
        }).filter((element) => element !== undefined);
        console.log(newData, 'newData')
        setLogsEarring(newData)
    };

    const handleActiveTab = (nameCenter, index, idCalculo) => {
        setActiveTab(index)
        setNameCenter(nameCenter)
        getCalculations(idCalculo)
    }

    useEffect(() => {
        if (centersEarring.length > 0) {
            setNameCenter(centersEarring[0].nameCenter)
            getCalculations(centersEarring[0].idCalculo)
        } else {
            console.log('El array está vacío');
        }
    }, [centersEarring]);

    return (
        <div>
            <div className="flex border-b border-blue-gray-50">
                {centersEarring.map(({ nameCenter, registrationDate, idCalculo }, index) => (
                    <div
                        key={index}
                        onClick={() => handleActiveTab(nameCenter, index, idCalculo)}
                        className={`cursor-pointer p-4 ${activeTab === index ? "text-gray-900 border-b-2 border-primary-title1 opacity-100" : "text-gray-500"
                            }`}
                    >
                        <p className='font-bold text-f20 text-darkslategray-200'>{nameCenter}</p>
                        <p className='text-dimgray-200 text-sm'>{registrationDate}</p>
                    </div>
                ))}
            </div>
            <div className="p-4">
                {logsEarring.slice(-3).map((item, index) => (
                    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md" key={index}>
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
                                                alt={item?.categoryName}
                                            />
                                        </div>
                                    </td>
                                    <td className="flex pl-6 py-8 text-gray-900">
                                        <p className="font-medium text-gray-700">{item?.categoryName}</p>
                                    </td>
                                    <td className="pl-6 py-4">
                                        <StateIndicator state={item?.status} />
                                    </td>
                                    <td className="pl-6 py-4">{"20/03/2022"}</td>
                                    <td className="pl-6 py-4 pr-4">
                                        <Link
                                            to={`/app/records/report/${item.categoryName}`}
                                            state={{ logId: item.log_id }} // Pasar el ID como parte del estado
                                            className="text-[inherit] relative lg:ml-0 cursor-pointer flex items-center">
                                            <b className="[text-decoration:underline] tracking-[0.08px] leading-[22px] text-black font-semibold">
                                                Completar
                                            </b>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
            {nameCenter.trim() && (
                <p className='text-right pt-2 font-bold pr-3 underline underline-offset-2 cursor-pointer'>Ir a Oficinas {nameCenter}</p>
            )}
        </div>
    );
}

export default UnderlineTabs;