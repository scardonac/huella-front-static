//Note: Página de Inicio de la App (Primera página que ve el usuario al ingresar a la App)
//Components
import { Illustrations } from "../../../assets/Illustrations/IllustrationProvider";
import { ButtonTypeA } from "../../molecules/buttons/buttonTypeA/ButtonTypeA"
import { GoNextLink } from "../../molecules/goNextLink/GoNextLink"
//Assets

// Components
const { beginRegister } = Illustrations;

export const InitialFirstTemplate = () => {

    return (
        <div className='max-w-screen-sm ml-96 mt-16 text-center'>
        <GoNextLink top='-100px' left='-300px' />
        <p className='text-f28 text-primary-title1 font-bold mb-5'>Antes de comenzar, ingresar un año base</p>
        <p className='text-f18 text-primary-gris2 mb-7'>Es importante para la certificación. Sirve para comparar la eficacia en un plan de reducción de emisiones.</p>
        <p className='text-primary-gris3 mb-14'>Si no tienes los soportes para tu año base y es tu primer cálculo de emisiones, es importante informarlo para obtener la certificación.</p>
        <img className='mx-auto w-[450px] mb-14' src={beginRegister} alt='imagen de balanza ambiental' />
        <div className='w-full flex justify-center gap-10'>
            <ButtonTypeA text='Continuar sin año base' />
            <ButtonTypeA text='Agregar año base' bgColor='#FE5000' txColor='#FFFFFF' bdWidth='0px' bgHvColor='#E6500B' />
        </div>
    </div>
    )
}
