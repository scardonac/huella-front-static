//Dependencies
import { useContext } from 'react'
import { Link } from 'react-router-dom';
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext'
//Assets
import { Icons } from '../../../assets/icons/IconProvider';

const { BackArrowIcon } = Icons; //Iconos

export const GoBackLink = ({ functionNavigate = null }) => {
    const { goBack } = useContext(NavigateAppContext)
    return (
        <div className='flex items-center mb-3 p-2 text-darkgray' id='go_back_div' data-testid="go_back_div">
            <img
                className="mr-1 w-[5.59px] h-[10.05px]"
                alt=""
                src={BackArrowIcon}
            />
            <Link
                to="#"
                id='go_back_link'
                data-testid="go_back_link"
                onClick={functionNavigate ? functionNavigate : goBack}
                className="text-[inherit] relative lg:ml-0 cursor-pointer flex items-center"
            >
                <b className="[text-decoration:underline] tracking-[0.08px] leading-[22px]">
                    Volver
                </b>
            </Link>
        </div>
    )
}