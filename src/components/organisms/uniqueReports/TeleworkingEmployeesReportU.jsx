//Depencies
import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
//Components
import { ButtonGroupReportsU } from '../buttonGroupReportsU/ButtonGroupReportsU';
import { CustomAlert } from '../../molecules/customAlert/customAlert';
import { TextInputController } from '../../molecules/inputs/TextInputController';
import { WrapReports } from '../wrapReports/WrapReports'
//Illustrations & Icons
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';
//Redux
import { useAppDispatch } from '../../../redux/store';
//Actions
import { createSupportsAction, getSupportsAction, saveDraftSupportsAction } from '../../../redux/actions/RegisterAction';

const { HomeOffice_Azul } = Illustrations; //Illustrations

export const TeleworkingEmployeesReportU = () => {

    const dispatch = useAppDispatch(); //Inicializamos el dispatcher

    const navigate = useNavigate(); //Inicializamos el hook de navegación

    const { state } = useLocation(); //Obtenemos el estado de la ubicación

    const logId = state?.logId; //Obtenemos el id del log

    const [textAlert, setTextAlert] = useState(null); //Estado local para setear el texto de la alerta

    // Objeto con los valores por defecto de los campos del formulario
    const defaultValues = {
        teleworkingEmployees: [
            {
                nameForm: 'Empleados en teletrabajo',
                flagNameForm: false,
                hoursUse: '',
                daysWeek: '',
                amountInput: '',
                attachedFiles: [null],
                logId: logId,
            },
        ]
    };
    // Obtenemos los métodos del hook form
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues
    });
    // Obtenemos los métodos del hook useFieldArray
    const { fields } = useFieldArray({
        control,
        name: 'teleworkingEmployees'
    });

    // Función para crear los soportes
    const onSubmit = async (data) => {
        const { msg, verify } = await dispatch(createSupportsAction(data.teleworkingEmployees));
        msg && setTextAlert({ msg, type: verify ? 'success' : 'error' });
        verify && navigate(-1)
    }

    // Función para guardar el reporte como borrador
    const actionDraft = async () => {
        const { msg, verify } = await dispatch(saveDraftSupportsAction(getValues().teleworkingEmployees));
        msg && setTextAlert({ msg, type: verify ? 'success' : 'error' });
        verify && navigate(-1)
    };

    // Función para obtener los soportes por logId
    const getSupportsByLogId = async () => {
        if (!logId) return;
        const { msg, verify, data } = await dispatch(getSupportsAction(logId));
        msg && setTextAlert({ msg, type: verify ? 'success' : 'error' });
        if (verify && data?.length > 0) {
            reset(defaultValues);
            reset({
                teleworkingEmployees: data?.map((item) => ({
                    // nameForm: item?.nombre,
                    nameForm: 'Empleados en teletrabajo',
                    flagNameForm: false,
                    typeInput: item?.tipo_insumo,
                    hoursUse: item?.horas_de_uso,
                    daysWeek: item?.dias_por_semana,
                    amountInput: item?.cantidad_insumo,
                    // attachedFiles: item?.soportes?.map((soporte) => soporte?.url),
                    attachedFiles: [null],
                    logId,
                }))
            });
        }
    };

    //UseEffect para obtener los soportes por logId
    useEffect(() => {
        getSupportsByLogId();
    }, [logId]);

    return (
        <WrapReports
            title='Empleados en teletrabajo'
            subTitle='Sier centro de control - 01/01/2023 - 31/12/2023'
            icon={HomeOffice_Azul}
            navigateTo={-1}
        >
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center'>
                {fields.map((_, formIndex) => (
                    <div className='flex flex-col items-center justify-center gap-4 pt-6 w-full' key={formIndex}>
                        <hr className={`w-2/4 border border-gray-400 opacity-100 ${formIndex !== 0 ? null : 'hidden'}`} />
                        <TextInputController
                            control={control}
                            name={`teleworkingEmployees[${formIndex}].hoursUse`}
                            rules={{ required: 'Por favor, ingresa las horas de trabajo', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números positivos' } }}
                            label='Horas de trabajo'
                            placeholder='Ingresa las horas de trabajo'
                            type='number'
                        />
                        <TextInputController
                            control={control}
                            name={`teleworkingEmployees[${formIndex}].daysWeek`}
                            rules={{ required: 'Por favor, ingresa los días de trabajo', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números positivos' } }}
                            label='Días de trabajo en la semana'
                            placeholder='Ingresa los días de trabajo'
                            type='number'
                        />
                        <TextInputController
                            control={control}
                            name={`teleworkingEmployees[${formIndex}].amountInput`}
                            rules={{ required: 'Por favor, ingresa el número de empleados', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números positivos' } }}
                            label='Número de empleados en teletrabajo'
                            placeholder='Ingresa el número de empleados'
                            type='number'
                        />
                    </div>
                ))}
                {textAlert && (
                    <CustomAlert
                        message={textAlert.msg}
                        type={textAlert.type}
                    />
                )}
                <ButtonGroupReportsU actionDraft={actionDraft} />
            </form>
        </WrapReports>
    )
}
