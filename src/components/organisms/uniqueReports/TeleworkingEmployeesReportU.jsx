//Depencies
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
//Components
import { ButtonGroupReportsU } from '../buttonGroupReportsU/ButtonGroupReportsU';
import { CustomAlert } from '../../molecules/customAlert/customAlert';
import { Tooltip } from '../../molecules/tooltip/Tooltip';
import { WrapReports } from '../wrapReports/WrapReports'
//Illustrations & Icons
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';
//Redux
import { useAppDispatch } from '../../../redux/store';
//Actions
import { resetTooltipCase, setTooltipCase } from '../../../redux/slices/HelpersSlice';
//Helpers
import { allowedExtensions } from '../../../helpers';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createSupportsAction, getSupportsAction, saveDraftSupportsAction } from '../../../redux/actions/RegisterAction';

const { HomeOffice_Azul } = Illustrations; //Illustrations

export const TeleworkingEmployeesReportU = () => {

    const dispatch = useAppDispatch(); //Inicializamos el dispatcher

    const navigate = useNavigate(); //Inicializamos el hook de navegación

    const { state } = useLocation(); //Obtenemos el estado de la ubicación

    const logId = state?.logId; //Obtenemos el id del log

    // Obtenemos el estado del tooltip del store de Redux
    const tooltip = useSelector(state => state.helpers.tooltip);

    const [textAlert, setTextAlert] = useState(null); //Estado local para setear el texto de la alerta
    const [flag, setFlag] = useState(true); //Estado local para setear el texto de la alerta

    // Objeto con los valores por defecto de los campos del formulario
    const defaultValues = {
        vehicles: [
            {
                nameForm: 'Empleados en teletrabajo',
                flagNameForm: false,
                typeInput: '',
                unitConsumption: '',
                kilometers: '',
                consumption: '',
                amountInput: '',
                id: null,
                attachedFiles: [null],
                logId: logId,
            },
        ]
    };
    // Obtenemos los métodos del hook form
    const { control, handleSubmit, reset, clearErrors, setValue, setError, getValues, formState: { errors } } = useForm({
        defaultValues: {
            teleworkingEmployees: [
                { nameForm: 'Empleados en teletrabajo', flagNameForm: false, WorkHours: '', WorkDays: '', NumberOfEmployees: '', attachedFiles: [null] },
            ]
        }
    });
    // Obtenemos los métodos del hook useFieldArray
    const { fields } = useFieldArray({
        control,
        name: 'teleworkingEmployees'
    });

    const handleFileChange = (e, formIndex, fileIndex) => {
        const file = e.target.files[0];
        const fileExtension = file?.name.split('.').pop();

        if (file && allowedExtensions.includes(`.${fileExtension}`)) {
            const values = getValues();
            const updatedTeleworkingEmployees = [...values.teleworkingEmployees];
            updatedTeleworkingEmployees[formIndex].attachedFiles[fileIndex] = file;
            setValue('teleworkingEmployees', updatedTeleworkingEmployees);
            clearErrors('teleworkingEmployees.attachedFiles');
        } else {
            // El archivo seleccionado no tiene una extensión permitida
            // Puedes mostrar un mensaje de error o realizar alguna acción adicional aquí
            setError('teleworkingEmployees.attachedFiles', {
                type: 'manual',
                message: 'El archivo seleccionado no tiene una extensión permitida'
            });
        }
    };

    const addFile = (formIndex) => {
        const values = getValues();
        const updatedTeleworkingEmployees = [...values.teleworkingEmployees];
        updatedTeleworkingEmployees[formIndex].attachedFiles.push(null);
        setValue('teleworkingEmployees', updatedTeleworkingEmployees);
    };
    const removeFile = (formIndex, fileIndex) => {
        const values = getValues();
        const updatedTeleworkingEmployees = [...values.teleworkingEmployees];
        updatedTeleworkingEmployees[formIndex].attachedFiles.splice(fileIndex, 1);
        setValue('teleworkingEmployees', updatedTeleworkingEmployees);
        dispatch(resetTooltipCase());
    };

    const toggleFlagNameForm = (formIndex) => {
        const values = getValues();
        const updatedTeleworkingEmployees = [...values.teleworkingEmployees];
        updatedTeleworkingEmployees[formIndex].flagNameForm = !updatedTeleworkingEmployees[formIndex].flagNameForm;
        setValue('teleworkingEmployees', updatedTeleworkingEmployees);
    };

    const handleUpdateNameForm = (formIndex, value) => {
        const values = getValues();
        const updatedTeleworkingEmployees = [...values.teleworkingEmployees];
        updatedTeleworkingEmployees[formIndex].nameForm = value;
        setValue('teleworkingEmployees', updatedTeleworkingEmployees);
        toggleFlagNameForm(formIndex);
    };

    const handleOnMouseEnter = (text) => {
        // Llamamos a la acción setTooltipCase para mostrar el tooltip con el texto deseado
        dispatch(setTooltipCase({ ...tooltip, showTooltip: true, textTooltip: text }));
    };

    const handleOnMouseLeave = () => {
        // Llamamos a la acción resetTooltipCase para esconder el tooltip y resetear su texto
        dispatch(resetTooltipCase());
    };

    const handleMouseMove = (e) => {
        // Llamamos a la acción setTooltipCase para actualizar la posición del tooltip
        dispatch(setTooltipCase({ ...tooltip, position: { x: e.pageX, y: e.pageY } }));
    };

    // Función para crear los soportes
    const onSubmit = async (data) => {
        const { msg, verify } = await dispatch(createSupportsAction(data.vehicles));
        msg && setTextAlert({ msg, type: verify ? 'success' : 'error' });
          verify && navigate(-1)
    }

    // Función para guardar el reporte como borrador
    const actionDraft = async () => {
        const { msg, verify } = await dispatch(saveDraftSupportsAction(fields));
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
                vehicles: data?.map((item) => ({
                    // nameForm: item?.nombre,
                    nameForm: 'Vehículo',
                    flagNameForm: false,
                    typeInput: item?.tipo_insumo,
                    unitConsumption: item?.unidad_consumo,
                    kilometers: item?.kilometros_recorridos,
                    consumption: item?.consumo,
                    amountInput: item?.cantidad_insumo,
                    id: item?.id,
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
                        <Controller
                            control={control}
                            name={`teleworkingEmployees[${formIndex}].WorkHours`}
                            rules={{ required: 'Por favor, ingresa las horas de trabajo', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números positivos' } }}
                            render={({ field }) =>
                                <div className='flex flex-col w-2/4'>
                                    <label className='text-left text-gray-600 font-normal leading-6 text-base opacity-100'>
                                        Horas de trabajo
                                    </label>
                                    <input
                                        {...field}
                                        className='bg-white rounded-8xs box-border w-full h-[37px] border-[0.5px] border-solid border-dimgray-200'
                                        placeholder='Ingresa las horas de trabajo'
                                        type='number'
                                    />
                                    {errors.teleworkingEmployees && errors.teleworkingEmployees[formIndex]?.WorkHours && (
                                        <CustomAlert
                                            message={errors.teleworkingEmployees[formIndex]?.WorkHours.message}
                                            type='error'
                                        />
                                    )}
                                </div>
                            }
                        />
                        <Controller
                            control={control}
                            name={`teleworkingEmployees[${formIndex}].WorkDays`}
                            rules={{ required: 'Por favor, ingresa los días de trabajo', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números positivos' } }}
                            render={({ field }) =>
                                <div className='flex flex-col w-2/4'>
                                    <label className='text-left text-gray-600 font-normal leading-6 text-base opacity-100'>
                                        Días de trabajo en la semana
                                    </label>
                                    <input
                                        {...field}
                                        className='bg-white rounded-8xs box-border w-full h-[37px] border-[0.5px] border-solid border-dimgray-200'
                                        placeholder='Ingresa los días de trabajo'
                                        type='number'
                                    />
                                    {errors.teleworkingEmployees && errors.teleworkingEmployees[formIndex]?.WorkDays && (
                                        <CustomAlert
                                            message={errors.teleworkingEmployees[formIndex]?.WorkDays.message}
                                            type='error'
                                        />
                                    )}
                                </div>
                            }
                        />
                        <Controller
                            control={control}
                            name={`teleworkingEmployees[${formIndex}].NumberOfEmployees`}
                            rules={{ required: 'Por favor, ingresa el número de empleados', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números positivos' } }}
                            render={({ field }) =>
                                <div className='flex flex-col w-2/4'>
                                    <label className='text-left text-gray-600 font-normal leading-6 text-base opacity-100'>
                                        Número de empleados en teletrabajo
                                    </label>
                                    <input
                                        {...field}
                                        className='bg-white rounded-8xs box-border w-full h-[37px] border-[0.5px] border-solid border-dimgray-200'
                                        placeholder='Ingresa el número de empleados'
                                        type='number'
                                    />
                                    {errors.teleworkingEmployees && errors.teleworkingEmployees[formIndex]?.NumberOfEmployees && (
                                        <CustomAlert
                                            message={errors.teleworkingEmployees[formIndex]?.NumberOfEmployees.message}
                                            type='error'
                                        />
                                    )}
                                </div>
                            }
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
                <Tooltip />
            </form>
        </WrapReports>
    )
}
