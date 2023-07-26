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
//Slice
import { resetTooltipCase, setTooltipCase } from '../../../redux/slices/HelpersSlice';
//Helpers
import { allowedExtensions } from '../../../helpers';

const { InformationIcon, TrushIcon, AddDocumentBlackIcon, PlusIcon } = Icons; //Iconos
const { Residuos_Azul } = Illustrations; //Illustrations

export const ResidueRecolectionReportU = () => {

    const dispatch = useAppDispatch(); //Inicializamos el dispatcher

    const navigate = useNavigate(); //Inicializamos el hook de navegación

    const { state } = useLocation(); //Obtenemos el estado de la ubicación

    const logId = state?.logId; //Obtenemos el id del log

    // Obtenemos el estado del tooltip del store de Redux
    const tooltip = useSelector(state => state.helpers.tooltip);

    const [textAlert, setTextAlert] = useState(null); //Estado local para setear el texto de la alerta

    // Objeto con los valores por defecto de los campos del formulario
    const defaultValues = {
        residueRecolection: [
            {
                nameForm: 'Recolección de residuos',
                flagNameForm: false,
                amountInput: '',
                id: null,
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
        name: 'residueRecolection'
    });

    const handleFileChange = (e, formIndex, fileIndex) => {
        const file = e.target.files[0];
        const fileExtension = file?.name.split('.').pop();

        if (file && allowedExtensions.includes(`.${fileExtension}`)) {
            const values = getValues();
            const updatedResidueRecolection = [...values.residueRecolection];
            updatedResidueRecolection[formIndex].attachedFiles[fileIndex] = file;
            setValue('residueRecolection', updatedResidueRecolection);
            clearErrors('residueRecolection.attachedFiles');
        } else {
            // El archivo seleccionado no tiene una extensión permitida
            // Puedes mostrar un mensaje de error o realizar alguna acción adicional aquí
            setError('residueRecolection.attachedFiles', {
                type: 'manual',
                message: 'El archivo seleccionado no tiene una extensión permitida'
            });
        }
    };

    const addFile = (formIndex) => {
        const values = getValues();
        const updatedResidueRecolection = [...values.residueRecolection];
        updatedResidueRecolection[formIndex].attachedFiles.push(null);
        setValue('residueRecolection', updatedResidueRecolection);
    };
    const removeFile = (formIndex, fileIndex) => {
        const values = getValues();
        const updatedResidueRecolection = [...values.residueRecolection];
        updatedResidueRecolection[formIndex].attachedFiles.splice(fileIndex, 1);
        setValue('residueRecolection', updatedResidueRecolection);
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
        console.log(data)
        const { msg, verify } = await dispatch(createSupportsAction(data.residueRecolection));
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
                residueRecolection: data?.map((item) => ({
                    // nameForm: item?.nombre,
                    nameForm: 'Recolección de residuos',
                    flagNameForm: false,
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
            title='Recolección de residuos'
            subTitle='Sier centro de control - 01/01/2023 - 31/12/2023'
            icon={Residuos_Azul}
            navigateTo={-1}
        >
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center'>
                {fields.map((_, formIndex) => (
                    <div className='flex flex-col items-center justify-center gap-4 pt-6 w-full' key={formIndex}>
                        <hr className={`w-2/4 border border-gray-400 opacity-100 ${formIndex !== 0 ? null : 'hidden'}`} />
                        <TextInputController
                            control={control}
                            name={`residueRecolection[${formIndex}].amountInput`}
                            rules={{ required: 'Por favor, ingresa el valor en toneladas', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números positivos' } }}
                            label='Valor en toneladas'
                            placeholder='Ingresa el valor en toneladas'
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
                        {errors?.residueRecolection && errors?.residueRecolection?.attachedFiles && (
                            <CustomAlert
                                message={errors?.residueRecolection?.attachedFiles?.message}
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
