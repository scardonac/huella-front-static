//Note: Página de Registro de la App

//Dependencies
import { useContext, useEffect } from 'react'
//Components
import { InitialFirstPage } from './InitialFirstPage'
import { RecalculationFormPage } from './RecalculationFormPage'
import { StepDirectEmissionsPage } from './StepDirectEmissionsPage'
import { StepIndirectEmissionsPage } from './StepIndirectEmissionsPage'
import { StepOtherEmissionsPage } from './StepOtherEmissionsPage'
import { StepScopeDashboardPage } from './StepScopeDashboardPage'
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext'
//Hooks
import useLocalStorage from '../../../hooks/useLocalStorage'

export const ScopeRecordPage = () => {

    const [page, setPage] = useLocalStorage('currentPage', 1);
    const { actualPage, setActualPage, state, setState } = useContext(NavigateAppContext)

    const contentPage = {
        0: <InitialFirstPage />,
        1: <RecalculationFormPage />,
        2: <StepDirectEmissionsPage />,
        3: <StepIndirectEmissionsPage />,
        4: <StepOtherEmissionsPage />,
        5: <StepScopeDashboardPage />,
    }

    useEffect(() => {
        setActualPage(page)
    }, [])

    return (
        <div className='AppContentPage w-full h-full'>
            {contentPage[actualPage] ? contentPage[actualPage] : null}
        </div>
    )
}