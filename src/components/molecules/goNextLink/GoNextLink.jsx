//Dependencies
import { useContext } from 'react'
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext'

export const GoNextLink = ({ left = "120px", top = "30px" }) => {
    const { goNext } = useContext(NavigateAppContext)
    return (
        <div className='relative'>
            <a
                className='text-primary-gris3 underline absolute cursor-pointer'
                style={{ left: left, top: top }}
                onClick={goNext}
            >
                {"Siguiente >"}
            </a>
        </div>
    )
}