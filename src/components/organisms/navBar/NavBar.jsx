//Dependencies
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
//Components
import { SectionComponent } from '../sectionComponent/SectionComponent'
//Data
import { secciones } from '../../../Backend'
//Assets
import { Imagenes } from "../../../assets/Images/wImagenProvider";
// Components
const { Grupo2522 } = Imagenes;
//Styles
import './NavBar.css'

export const NavBar = () => {

    const { pathname } = useLocation(); //Obtiene la ruta actual
    const navigate = useNavigate() //Permite navegar entre rutas

    const [sectionSelected, setSectionSelected] = useState(1);

    const selectSection = (e) => {
        const id = Number(e?.currentTarget?.dataset?.id)
        const path = (e?.currentTarget?.dataset?.path)
        setSectionSelected(id)
        navigate(path)
    }

    return (
        <div className='NavBar min-h-screen h-full flex flex-col items-center justify-between fixed left-0 top-0 z-20 px-3'>
            <ul className=' w-48 mt-24 flex flex-col gap-0 text-primary-title2'>
                {secciones.map((seccion) => (
                    <div key={seccion?.id} data-id={seccion?.id} data-path={seccion?.path} onClick={selectSection} >
                        <SectionComponent name={seccion?.name} icon={seccion?.icon} isSelected={pathname.includes(seccion.name.toLowerCase())} />
                    </div>
                ))}
            </ul>
            <div className=' mb-16'>
                {/* <p className='text-primary-white1'>Plataforma HCero</p> */}
                <img src={Grupo2522} />
            </div>
        </div>
    )
}