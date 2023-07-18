//Dependencies
import { useNavigate } from "react-router-dom";
//Components
import { ButtonTypeA } from "../../molecules/buttons/buttonTypeA/ButtonTypeA"

export const ButtonGroupReportsU = ({ actionDraft }) => {

    const navigate = useNavigate();

    return (
        <div className='flex sm:flex-col sm:items-center md:flex-row justify-evenly gap-4 pt-6 w-2/4'>
            <ButtonTypeA
                text='Cancelar'
                width='138px'
                submitBtn={false}
                action={() => navigate(-1)}
            />
            <ButtonTypeA
                text='Borrador'
                width='138px'
                bgColor='#FE5000'
                txColor='#FFFFFF'
                bdWidth='0px'
                bgHvColor='#E6500B'
                submitBtn={false}
                action={actionDraft}
            />
            <ButtonTypeA
                text='Finalizar'
                width='230px'
                bgColor='#9CA09F'
                txColor='#FFFFFF'
                bdWidth='0px'
                bgHvColor='#E6500B'
                submitBtn={true}
                action={null}
            />
        </div>
    )
}
