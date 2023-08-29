//Dependencies
import { useContext } from 'react'
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext';
//Components
import { StateIndicator } from '../stateIndicator/StateIndicator';
//Assets
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';
//Data
import { emisionesDirectasIcons, emisionesIndirectasIcons, otrasEmisionesIndirectasIcons } from '../../../Data';
import UnderlineTabs from '../underlineTabs/UnderlineTabs';

export const DashboardInicioTableA = ({
    emissionsEarring = [],
    thTablea = [],
    navigationActive = false,
}) => {

    const { actualPage, setActualPage } = useContext(NavigateAppContext)
    const goNext = () => setActualPage(actualPage + 1)

    const dataIcons = {
        ...emisionesDirectasIcons,
        ...emisionesIndirectasIcons,
        ...otrasEmisionesIndirectasIcons
    };

    return (
        <div className='EmisionesTable mt-8'>
            <h3 className='mb-2'>Procesos en curso</h3>
            <UnderlineTabs
                emissionsEarring={emissionsEarring}
                thTablea={thTablea}
                navigationActive={navigationActive}
                goNext={goNext}
                dataIcons={dataIcons}
            />
            {/* <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md ">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="">
                        <tr >
                            {thTablea.map((th, index) => (
                                <th key={index} scope="col" className={th.className}>{th.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className=" divide-y divide-lightgray-200">
                        {emissionsEarring.map(item => (
                            <tr key={item?.id} className="">
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
                                    <a onClick={navigationActive ? goNext : null} className='underline cursor-pointer text-black font-semibold'>Completar</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
        </div>
    )
}