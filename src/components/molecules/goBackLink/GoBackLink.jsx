//Dependencies
import { useContext } from 'react'
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext'

export const GoBackLink = ({ left = "30px", top = "30px" }) => {
    const { goBack } = useContext(NavigateAppContext)
    return (
        <div
            id='go_back_div'
            data-testid="go_back_div"
            className='relative'
        >
            <a
                className='text-primary-gris3 underline absolute cursor-pointer'
                style={{ left: left, top: top }}
                onClick={goBack}
                id='go_back_link'
                data-testid="go_back_link"
            >
                {"< Volver"}
            </a>
        </div>
    )
}