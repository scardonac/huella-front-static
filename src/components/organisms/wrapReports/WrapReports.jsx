
import { useNavigate } from 'react-router-dom';
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';
import { SedeInfo } from '../sedeInfo/SedeInfo'

const { ConsumoEnergia_Azul } = Illustrations; //Illustrations

export const WrapReports = ({
    title = 'título',
    subTitle = 'subtítulo',
    icon = ConsumoEnergia_Azul,
    navigateTo = -1,
    children,
}) => {

    const navigate = useNavigate();

    const functionNavigate = () => {
        navigate(navigateTo);
    }

    return (
        <div className='EnergyConsumptionReportP bg-primary-gris1 min-h-full pt-10'>
            <div className='ConsumoEnergiaElectrica w-[90%] max-w-[1400px] mb-12 mx-auto'>
                <div className='flex justify-between'>
                    <SedeInfo
                        name={title}
                        subName={subTitle}
                        icon={icon}
                        functionNavigate={functionNavigate}
                    />
                </div>
                {children}
            </div>
        </div>
    )
}
