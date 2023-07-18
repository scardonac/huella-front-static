//Dependencies
import { useContext } from 'react'
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext'

export const GoBackLink = ({ left = "30px", top = "30px" }) => {
    const { goBack } = useContext(NavigateAppContext)
    return (
        <div className='relative'>
            <a
                className='text-primary-gris3 underline absolute cursor-pointer'
                style={{ left: left, top: top }}
                onClick={goBack}
            >
                {"< Volver"}
            </a>
        </div>
    )
}