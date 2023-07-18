//Dependencies
import { createContext, useState, useMemo } from "react";
//Hooks
import useLocalStorage from "../hooks/useLocalStorage";
//Data
import { meses } from "../Backend";
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
        console.log("goNext");
        await setPage(actualPage + 1)
        setActualPage(actualPage + 1)
    }

    const goBack = async () => {
        console.log("goBack");
        await setPage(actualPage - 1)
        setActualPage(actualPage - 1)
    }

    const setPendienteState = async () => {
        console.log("setPendienteState");
        await setStateLS(2)
        setState(2)
    }

    const setEmptyState = async () => {
        console.log("setEmptyState");
        await setStateLS(1)
        setState(1)
    }

    const updateMonths = async (Arr) => {
        console.log("updateMonths");
        await setMArrayLS(Arr)
        setMonthsArray(Arr)
    }

    const contextValue = useMemo(() => {
        return {
            actualPage, setActualPage, goNext, goBack,
            state, setState, stateLS, setPendienteState, setEmptyState,
            monthsArray, setMonthsArray, mArrayLS, setMArrayLS, updateMonths
        };
    }, [actualPage, setActualPage, state, setState, monthsArray, setMonthsArray]);

    return (
        <NavigateAppContext.Provider value={contextValue}>
            {children}
        </NavigateAppContext.Provider>
    );
};