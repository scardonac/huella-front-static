//Dependencies
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//Routes
import { paths } from '../../../routes/paths'
//Redux
import { useAppDispatch } from '../../../redux/store'
import { useSelector } from 'react-redux'
//Assets
import { Icons } from '../../../assets/icons/IconProvider'
//Actions
import { signOffCase } from '../../../redux/slices/AuthSlice'
import { resetRegisterAction } from '../../../redux/slices/RegisterSlice'

//Data
const secciones = [
    { name: "", icon: Icons?.NotificationIcon, id: 1 },
    { name: "", icon: Icons?.SupportIcon, id: 2 },
    { name: "", icon: Icons?.UserIcon, id: 3 },
    { name: "", icon: Icons?.ArrowIcon, id: 4 },
]

export const Header = () => {

    const nav = useNavigate();

    const dispatch = useAppDispatch();

    const { auth: { username } } = useSelector((state) => state.persistedData);

    const [logOutVisible, setLogOutVisible] = useState(false)


    const showLogOut = () => {
        setLogOutVisible(prev => !prev)
    }

    const logOutAction = async () => {
        localStorage.clear();
        dispatch(signOffCase())
        dispatch(resetRegisterAction())
        setLogOutVisible(false)
        nav(paths.HOME)
    }

    return (
        <div className='Header bg-primary-white1 w-full h-16 flex justify-end fixed left-0 top-0 z-10'>
            {logOutVisible ?
                <div className='bg-indigo-500 w-[100vw] h-screen absolute z-30 right-0 bg-transparent' onClick={() => setLogOutVisible(false)}>
                    <div
                        className='absolute border border-gray-500 rounded-lg px-3 py-[4px] right-[90px] top-12 z-50 cursor-pointer bg-whitesmoke-300'
                        onClick={logOutAction}
                    >
                        Cerrar Sesión
                    </div>
                </div>
                : null}
            <div className='flex items-center gap-3 mr-12'>
                {secciones?.map((seccion, index) => (
                    <img key={seccion?.id} className={`w-5 h-5 cursor-pointer ${seccion?.id === 4 ? "w-4 h-2" : ""}`} src={seccion?.icon} onClick={seccion?.id === 4 ? showLogOut : null} />
                ))}
                <p>{username}</p>
            </div>
        </div>
    )
}