//Dependencies
import { useContext } from 'react'
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext';
//Components
import UnderlineTabs from '../underlineTabs/UnderlineTabs';
//Data
import { emisionesDirectasIcons, emisionesIndirectasIcons, otrasEmisionesIndirectasIcons } from '../../../Data';

export const DashboardInicioTableA = ({
    centersEarring = [],
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
        <div className='EmisionesTable mt-6'>
            <h3 className='mb-2'>Procesos en curso</h3>
            <UnderlineTabs
                centersEarring={centersEarring}
                thTablea={thTablea}
                navigationActive={navigationActive}
                goNext={goNext}
                dataIcons={dataIcons}
            />
        </div>
    )
}