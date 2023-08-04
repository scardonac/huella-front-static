//Depencies
import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
//Components
import { ButtonGroupReportsU } from '../buttonGroupReportsU/ButtonGroupReportsU';
import { CustomAlert } from '../../molecules/customAlert/customAlert';
import { TextInputController } from '../../molecules/inputs/TextInputController';
import { Tooltip } from '../../molecules/tooltip/Tooltip';
import { WrapReports } from '../wrapReports/WrapReports'
//Illustrations & Icons
import { Illustrations } from '../../../assets/Illustrations/IllustrationProvider';
import { Icons } from '../../../assets/icons/IconProvider';
//Redux
import { useAppDispatch } from '../../../redux/store';
//Actions
import { createSupportsAction, getSupportsAction, saveDraftSupportsAction } from '../../../redux/actions/RegisterAction';
//Slices
import { resetTooltipCase, setTooltipCase } from '../../../redux/slices/HelpersSlice';
//Helpers
import { allowedExtensions } from '../../../helpers';

const { InformationIcon, TrushIcon, AddDocumentBlackIcon, PlusIcon } = Icons; //Iconos
const { ConsumoAgua_Azul } = Illustrations; //Illustrations

export const WaterSupplyReportU = () => {

    const dispatch = useAppDispatch(); //Inicializamos el dispatcher

    const navigate = useNavigate(); //Inicializamos el hook de navegación

    const { state } = useLocation(); //Obtenemos el estado de la ubicación

    const logId = state?.logId; //Obtenemos el id del log

    // Obtenemos el estado del tooltip del store de Redux
    const tooltip = useSelector(state => state.helpers.tooltip);
    // Obtenemos el estado del registro del store de Redux
    const { register: { firstStep, centerCurrent } } = useSelector(state => state.persistedData);

    const [textAlert, setTextAlert] = useState(null); //Estado local para setear el texto de la alerta

    // Objeto con los valores por defecto de los campos del formulario
    const defaultValues = {
        waterSupply: [
            {
                nameForm: 'Suministro de agua',
                flagNameForm: false,
                consumption: '',
                attachedFiles: [null],
                logId: logId,
            },
        ]
    };
    // Obtenemos los métodos del hook form
    const { control, handleSubmit, reset, clearErrors, setValue, setError, getValues, formState: { errors } } = useForm({
        defaultValues
    });
    // Obtenemos los métodos del hook useFieldArray
    const { fields } = useFieldArray({
        control,
        name: 'waterSupply'
    });

    const handleFileChange = (e, formIndex, fileIndex) => {
        const file = e.target.files[0];
        const fileExtension = file?.name.split('.').pop();

        if (file && allowedExtensions.includes(`.${fileExtension}`)) {
            const values = getValues();
            const updatedWaterSupply = [...values.waterSupply];
            updatedWaterSupply[formIndex].attachedFiles[fileIndex] = file;
            setValue('waterSupply', updatedWaterSupply);
            clearErrors('waterSupply.attachedFiles');
        } else {
            // El archivo seleccionado no tiene una extensión permitida
            // Puedes mostrar un mensaje de error o realizar alguna acción adicional aquí
            setError('waterSupply.attachedFiles', {
                type: 'manual',
                message: 'El archivo seleccionado no tiene una extensión permitida'
            });
        }
    };

    const addFile = (formIndex) => {
        const values = getValues();
        const updatedWaterSupply = [...values.waterSupply];
        updatedWaterSupply[formIndex].attachedFiles.push(null);
        setValue('waterSupply', updatedWaterSupply);
    };
    const removeFile = (formIndex, fileIndex) => {
        const values = getValues();
        const updatedWaterSupply = [...values.waterSupply];
        updatedWaterSupply[formIndex].attachedFiles.splice(fileIndex, 1);
        setValue('waterSupply', updatedWaterSupply);
        dispatch(resetTooltipCase());
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
        const { msg, verify } = await dispatch(createSupportsAction(data.waterSupply));
        msg && setTextAlert({ msg, type: verify ? 'success' : 'error' });
        verify && navigate(-1)
    }

    // Función para guardar el reporte como borrador
    const actionDraft = async () => {
        const { msg, verify } = await dispatch(saveDraftSupportsAction(getValues().waterSupply));
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
                waterSupply: data?.map((item) => ({
                    flagNameForm: false,
                    consumption: item?.consumo,
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
            title='Suministro de agua'
            subTitle={`${centerCurrent?.nombre} - ${firstStep?.startDate?.replace(/-/g, "/")} - ${firstStep?.endDate?.replace(/-/g, "/")}`}
            icon={ConsumoAgua_Azul}
            navigateTo={-1}
        >
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center'>
                {fields.map((_, formIndex) => (
                    <div className='flex flex-col items-center justify-center gap-4 pt-6 w-full' key={formIndex}>
                        <hr className={`w-2/4 border border-gray-400 opacity-100 ${formIndex !== 0 ? null : 'hidden'}`} />
                        <TextInputController
                            control={control}
                            name={`waterSupply[${formIndex}].consumption`}
                            rules={{ required: 'Por favor, ingresa el valor en metros cúbicos (m3)', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números positivos' } }}
                            label='Valor en metros cúbicos (m3)'
                            placeholder='Ingresa el valor en metros cúbicos (m3)'
                            type='number'
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
                        {errors?.waterSupply && errors?.waterSupply?.attachedFiles && (
                            <CustomAlert
                                message={errors?.waterSupply?.attachedFiles?.message}
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
