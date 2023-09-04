import { useNavigate } from "react-router";
import { Illustrations } from "../../../assets/Illustrations/IllustrationProvider";
import { getCenterCurrentCase } from "../../../redux/slices/RegisterSlice";
import { useAppDispatch } from "../../../redux/store";
import { paths } from "../../../routes/paths";
import { ButtonTypeA } from "../../molecules/buttons/buttonTypeA/ButtonTypeA";

const stepsData = [
    {
        title: 'Paso 1',
        description: 'Dirígete a la sección "Registros" del menú.',
    },
    {
        title: 'Paso 2',
        description: 'Sigue las instrucciones detalladas para registrar tus datos.',
    },
    {
        title: 'Paso 3',
        description: 'Completa el formulario de medición de huella de carbono.',
    },
    {
        title: 'Paso 4',
        description: 'Revisa y confirma tus resultados.',
    },
];

export const StartMeasurTemplate = () => {

    const navigation = useNavigate(); // hook para navegar entre páginas

    const dispatch = useAppDispatch(); // Dispatch de acciones de Redux

    const handleOnClick = () => {
        dispatch(getCenterCurrentCase(null));
        navigation(paths.APPREGISTROS)
    }

    return (
        <div className='bg-white h-full'>
            <div className='w-[90%] max-w-[1400px] min-w-[1000px] mx-auto pt-10 flex flex-col'>
                <div className='flex justify-between'>
                    <div>
                        <h3 className="text-3xl">¡Es un gusto que estés aquí!</h3>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center bg-primary-gris1 rounded-3xs p-8 mt-8'>
                    <div className='flex justify-between items-center w-full'>
                        <span>
                            <h3 className='mb-2 text-xl'>Inicia tu medición de huella de carbono</h3>
                        </span>
                        <ButtonTypeA text='Nuevo cálculo' bgColor='#FE5000' txColor='#FFFFFF' bdWidth='0px' bgHvColor='#E6500B' submitBtn={true} action={() => handleOnClick()} />
                    </div>
                    <div className='flex flex-row justify-center w-full'>
                        {stepsData.map((step, index) => (
                            <div className='flex justify-center mt-8 w-full ml-2' key={index}>
                                <div className='text-left items-center'>
                                    <span>
                                        <p className='font-bold text-darkslategray-200 text-lg'>{step.title}</p>
                                        <h2 className='text-primary-gris2 opacity-100 text-base'>{step.description}</h2>
                                    </span>
                                    <img
                                        src={Illustrations[`Illustration_onboarding_step${index + 1}`]}
                                        alt={`Paso ${index + 1}`}
                                        className="w-[300px] h-[213px]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
