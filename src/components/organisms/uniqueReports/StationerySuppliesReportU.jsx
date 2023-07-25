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
import { Icons } from '../../../assets/icons/IconProvider';
//Redux
import { useAppDispatch } from '../../../redux/store';
//Actions
import { resetTooltipCase, setTooltipCase } from '../../../redux/slices/HelpersSlice';
//Helpers
import { allowedExtensions } from '../../../helpers';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createSupportsAction, getSupportsAction, saveDraftSupportsAction } from '../../../redux/actions/RegisterAction';

const { InformationIcon, TrushIcon, AddDocumentBlackIcon, PlusIcon, EditIcon } = Icons; //Iconos
const { Papeleria_Azul } = Illustrations; //Illustrations

export const StationerySuppliesReportU = () => {

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
                nameForm: 'Suministros de papelería',
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
            stationerySupplies: [
                { nameForm: 'Suministros de papelería', flagNameForm: false, supplyType: '', Amount: '', attachedFiles: [null] },
            ]
        }
    });
    // Obtenemos los métodos del hook useFieldArray
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'stationerySupplies'
    });

    const handleFileChange = (e, formIndex, fileIndex) => {
        const file = e.target.files[0];
        const fileExtension = file?.name.split('.').pop();

        if (file && allowedExtensions.includes(`.${fileExtension}`)) {
            const values = getValues();
            const updatedStationerySupplies = [...values.stationerySupplies];
            updatedStationerySupplies[formIndex].attachedFiles[fileIndex] = file;
            setValue('stationerySupplies', updatedStationerySupplies);
            clearErrors('stationerySupplies.attachedFiles');
        } else {
            // El archivo seleccionado no tiene una extensión permitida
            // Puedes mostrar un mensaje de error o realizar alguna acción adicional aquí
            setError('stationerySupplies.attachedFiles', {
                type: 'manual',
                message: 'El archivo seleccionado no tiene una extensión permitida'
            });
        }
    };

    const addFile = (formIndex) => {
        const values = getValues();
        const updatedStationerySupplies = [...values.stationerySupplies];
        updatedStationerySupplies[formIndex].attachedFiles.push(null);
        setValue('stationerySupplies', updatedStationerySupplies);
    };
    const removeFile = (formIndex, fileIndex) => {
        const values = getValues();
        const updatedStationerySupplies = [...values.stationerySupplies];
        updatedStationerySupplies[formIndex].attachedFiles.splice(fileIndex, 1);
        setValue('stationerySupplies', updatedStationerySupplies);
        dispatch(resetTooltipCase());
    };

    const toggleFlagNameForm = (formIndex) => {
        const values = getValues();
        const updatedStationerySupplies = [...values.stationerySupplies];
        updatedStationerySupplies[formIndex].flagNameForm = !updatedStationerySupplies[formIndex].flagNameForm;
        setValue('stationerySupplies', updatedStationerySupplies);
    };

    const handleUpdateNameForm = (formIndex, value) => {
        const values = getValues();
        const updatedStationerySupplies = [...values.stationerySupplies];
        updatedStationerySupplies[formIndex].nameForm = value;
        setValue('stationerySupplies', updatedStationerySupplies);
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

    // Función para manejar la eliminación de un campo
    const handleRemoveField = (formIndex) => {
        remove(formIndex);
        setFlag(false);
        setTimeout(() => {
            setFlag(true); //Esto es para que se vuelva a renderizar el componente y se actualicen los índices de los campos
        }, 20);
    };
    return (
        <WrapReports
            title='Suministros de papelería'
            subTitle='Sier centro de control - 01/01/2023 - 31/12/2023'
            icon={Papeleria_Azul}
            navigateTo={-1}
        >
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center'>
                {(flag) && (
                    fields.map((_, formIndex) => (
                        <div className='flex flex-col items-center justify-center gap-4 pt-6 w-full' key={formIndex}>
                            <hr className={`w-2/4 border border-gray-400 opacity-100 ${formIndex !== 0 ? null : 'hidden'}`} />
                            <Controller
                                control={control}
                                name={`stationerySupplies[${formIndex}].nameForm`}
                                render={({ field }) =>
                                    <div className='flex items-center justify-between w-2/4'>
                                        <div className='flex items-center justify-start w-full'>
                                            {fields[formIndex].flagNameForm
                                                ?
                                                <button
                                                    className='mr-[6px] bg-primary-green2 bg-no-repeat px-4 py-2 rounded-[10px] opacity-100 cursor-pointer'
                                                    onClick={() => handleUpdateNameForm(formIndex, field.value)}
                                                >
                                                    <b className='tracking-tighter leading-6 text-primary-80 font-bold text-left text-base text-primary-title1 opacity-100'>
                                                        Guardar
                                                    </b>
                                                </button>
                                                :
                                                <img
                                                    className='w-4 h-4 mr-[3px] cursor-pointer'
                                                    alt=''
                                                    src={EditIcon}
                                                    onClick={() => {
                                                        toggleFlagNameForm(formIndex)
                                                    }}
                                                />
                                            }
                                            {fields[formIndex].flagNameForm ?
                                                <input
                                                    {...field}
                                                    className='bg-white rounded-8xs box-border w-full h-[37px] border-[0.5px] border-solid border-dimgray-200 text-lg text-gray-700 font-bold'
                                                    type='text'
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter') {
                                                            e.preventDefault();
                                                            // Aquí puedes llamar a tu función para actualizar el nombre del formulario.
                                                            handleUpdateNameForm(formIndex, e.target.value);
                                                        }
                                                    }}
                                                />
                                                :
                                                <label className='text-left text-gray-700 opacity-100 text-lg leading-7 font-bold tracking-tighter ml-1'>
                                                    {field.value}
                                                </label>
                                            }
                                        </div>

                                        <div className={`flex items-end justify-end ${fields.length !== 1 ? null : 'hidden'}`}>
                                            <img
                                                className='w-5 h-5 cursor-pointer'
                                                alt=''
                                                onMouseMove={(e) => handleMouseMove(e)}
                                                onMouseEnter={() => handleOnMouseEnter('Eliminar formulario')}
                                                onMouseLeave={() => handleOnMouseLeave()}
                                                src={TrushIcon}
                                                onClick={() => {
                                                    // remove(formIndex);
                                                    handleRemoveField(formIndex);
                                                    dispatch(resetTooltipCase());
                                                }}
                                            />
                                        </div>

                                    </div>
                                }
                            />
                            <Controller
                                control={control}
                                name={`stationerySupplies[${formIndex}].supplyType`}
                                rules={{ required: "Por favor, selecciona un tipo de suministro" }}
                                render={({ field }) =>
                                    <div className='flex flex-col w-2/4'>
                                        <label className='text-left text-gray-600 font-normal leading-6 text-base opacity-100'>
                                            Tipo de suministro
                                        </label>
                                        <select {...field} className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-[0.5px] border-[#627173] bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                                            <option value="">Selecciona un tipo</option>
                                            <option value="1">Resma tamaño carta 1</option>
                                            <option value="2">Resma tamaño carta 2</option>
                                            <option value="3">Resma tamaño carta 3</option>
                                            <option value="4">Resma tamaño carta 4</option>
                                        </select>
                                        {errors.stationerySupplies && errors.stationerySupplies[formIndex]?.supplyType && (
                                            <CustomAlert
                                                message={errors.stationerySupplies[formIndex]?.supplyType.message}
                                                type='error'
                                            />
                                        )}
                                    </div>
                                }
                            />
                            <Controller
                                control={control}
                                name={`stationerySupplies[${formIndex}].Amount`}
                                rules={{ required: 'Por favor, ingresa la cantidad', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números positivos' } }}
                                render={({ field }) =>
                                    <div className='flex flex-col w-2/4'>
                                        <label className='text-left text-gray-600 font-normal leading-6 text-base opacity-100'>
                                            Cantidad de suministros
                                        </label>
                                        <input
                                            {...field}
                                            className='bg-white rounded-8xs box-border w-full h-[37px] border-[0.5px] border-solid border-dimgray-200'
                                            placeholder='Ingresa la cantidad de suministros'
                                            type='number'
                                        />
                                        {errors.stationerySupplies && errors.stationerySupplies[formIndex]?.Amount && (
                                            <CustomAlert
                                                message={errors.stationerySupplies[formIndex]?.Amount.message}
                                                type='error'
                                            />
                                        )}
                                    </div>
                                }
                            />
                            <div className='flex w-2/4 text-darkgray'>
                                <img
                                    className='w-4 h-4 mt-[2px]'
                                    alt=''
                                    src={InformationIcon}
                                />
                                <b className='tracking-[0.08px] leading-[22px] ml-2'>
                                    Soporte
                                </b>
                            </div>
                            {fields[formIndex].attachedFiles.map((file, fileIndex) => (
                                <div className='flex justify-between items-center w-2/4' key={fileIndex}>
                                    <div className='flex items-center'>
                                        <img
                                            className='w-5 h-5 mt-[2px]'
                                            alt=''
                                            src={AddDocumentBlackIcon}
                                        />
                                        <label>
                                            <input
                                                type='file'
                                                className='hidden'
                                                onChange={(e) => handleFileChange(e, formIndex, fileIndex)}
                                            />
                                            <p className={`underline text-left leading-5 tracking-tighter ${file
                                                ? "text-gray-800 font-bold text-base"
                                                : "text-gray-500 font-semibold text-base"
                                                }`}>
                                                {file ? file.name : 'Adjunta un archivo'}
                                            </p>
                                        </label>
                                    </div>
                                    {file && (
                                        <div className='flex items-center'>
                                            <img
                                                className='w-5 h-5 cursor-pointer'
                                                onMouseMove={(e) => handleMouseMove(e)}
                                                onMouseEnter={() => handleOnMouseEnter('Eliminar archivo')}
                                                onMouseLeave={() => handleOnMouseLeave()}
                                                alt=''
                                                src={TrushIcon}
                                                onClick={() => removeFile(formIndex, fileIndex)}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                            {errors?.stationerySupplies && errors?.stationerySupplies?.attachedFiles && (
                                <CustomAlert
                                    message={errors?.stationerySupplies?.attachedFiles?.message}
                                    type='error'
                                />
                            )}
                            <div className='flex justify-end items-center w-2/4 text-darkgray'>
                                <img
                                    className='w-[10px] h-[10px] mr-[3px] mb-1 cursor-pointer opacity-100'
                                    alt=''
                                    src={PlusIcon}
                                    onClick={() => addFile(formIndex)}
                                />
                                <button type='button' onClick={() => addFile(formIndex)}>Agregar otro soporte</button>
                            </div>
                            <div className={`flex items-center w-2/4 text-darkgray ${formIndex !== fields.length - 1 ? 'hidden' : null}`}>
                                <img
                                    className='w-4 h-4 mr-[3px]'
                                    alt=''
                                    src={InformationIcon}
                                />
                                <div className='bg-primary-green2 bg-no-repeat px-4 py-2 rounded-lg opacity-100 cursor-pointer' onClick={() =>
                                    append(defaultValues.stationerySupplies)}>
                                    <b className='tracking-tighter leading-6 text-primary-80 font-bold text-left text-base text-primary-title1 opacity-100'>
                                        Agregar otro tipo de suministro
                                    </b>
                                </div>
                            </div>
                        </div>
                    ))
                )}
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
