//Dependencies
import { createContext, useState, useMemo } from "react";
//Hooks
import useLocalStorage from "../hooks/useLocalStorage";
//Data
import { meses } from "../Data";
//Context
export const NavigateAppContext = createContext();

const initialPage = 1;
const initialState = 1;
const initialConsumoEnergiaArray = [...meses];

export const NavigateAppProvider = ({ children }) => {
    const [actualPage, setActualPage] = useState(initialPage);
    const [state, setState] = useState(initialState);
    const [monthsArray, setMonthsArray] = useState(initialConsumoEnergiaArray)

    const [page, setPage] = useLocalStorage('currentPage', 1);
    const [stateLS, setStateLS] = useLocalStorage('state', 1);
    const [mArrayLS, setMArrayLS] = useLocalStorage('months', [...initialConsumoEnergiaArray]);

    const goNext = async () => {
        await setPage(actualPage + 1)
        setActualPage(actualPage + 1)
    }

    const goBack = async () => {
        await setPage(actualPage - 1)
        setActualPage(actualPage - 1)
    }

    const resetPage = async () => {
        await setPage(1)
        setActualPage(1)
    }

    const setPendienteState = async () => {
        await setStateLS(2)
        setState(2)
    }

    const setEmptyState = async () => {
        await setStateLS(1)
        setState(1)
    }

    const updateMonths = async (Arr) => {
        await setMArrayLS(Arr)
        setMonthsArray(Arr)
    }

    const contextValue = useMemo(() => {
        return {
            //States
            actualPage,
            state,
            stateLS,
            monthsArray,
            mArrayLS,
            //Functions
            goBack,
            goNext,
            resetPage,
            setActualPage,
            setEmptyState,
            setMArrayLS,
            setMonthsArray,
            setPendienteState,
            setState,
            updateMonths,
        };
    }, [actualPage, setActualPage, state, setState, monthsArray, setMonthsArray]);

    return (
        <NavigateAppContext.Provider value={contextValue}>
            {children}
        </NavigateAppContext.Provider>
    );
};