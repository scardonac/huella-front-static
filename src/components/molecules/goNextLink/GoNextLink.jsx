//Dependencies
import { useContext } from 'react'
import { Link } from 'react-router-dom'
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext'

export const GoNextLink = ({ left = "120px", top = "30px" }) => {

    const { goNext } = useContext(NavigateAppContext) //Contexto de navegación

    return (
        <div className='relative'>
            <Link
                to="#"
                id='go_next_link'
                data-testid="go_next_link"
                className='text-primary-gris3 underline absolute'
                style={{ left: left, top: top }}
                onClick={goNext}
            >
                {"Siguiente >"}
            </Link>
        </div>
    )
}
// export const GoNextLink = ({ left = "120px", top = "30px" }) => {
//     const { goNext } = useContext(NavigateAppContext)
//     return (
//         <div className='relative'>
//             <a
//                 className='text-primary-gris3 underline absolute cursor-pointer'
//                 style={{ left: left, top: top }}
//                 onClick={goNext}
//             >
//                 {"Siguiente >"}
//             </a>
//         </div>
//     )
// }