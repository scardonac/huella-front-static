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

const { InformationIcon, TrushIcon, AddDocumentBlackIcon, PlusIcon, EditIcon } = Icons; //Iconos
const { ConsumoEnergia_Azul } = Illustrations; //Illustrations

export const ElectricPowerConsumptionReportU = () => {

    const dispatch = useAppDispatch();

    // Obtenemos el estado del tooltip del store de Redux
    const tooltip = useSelector(state => state.helpers.tooltip);

    const { control, handleSubmit, reset, clearErrors, setValue, setError, getValues, formState: { errors } } = useForm({
        defaultValues: {
            electricPowerConsumption: [
                { nameForm: 'Consumo de energía eléctrica', flagNameForm: false, valueInTons: '', attachedFiles: [null] },
            ]
        }
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'electricPowerConsumption'
    });

    const handleFileChange = (e, formIndex, fileIndex) => {
        const file = e.target.files[0];
        const fileExtension = file?.name.split('.').pop();

        if (file && allowedExtensions.includes(`.${fileExtension}`)) {
            const values = getValues();
            const updatedElectricPowerConsumption = [...values.electricPowerConsumption];
            updatedElectricPowerConsumption[formIndex].attachedFiles[fileIndex] = file;
            setValue('electricPowerConsumption', updatedElectricPowerConsumption);
            clearErrors('electricPowerConsumption.attachedFiles');
        } else {
            // El archivo seleccionado no tiene una extensión permitida
            // Puedes mostrar un mensaje de error o realizar alguna acción adicional aquí
            setError('electricPowerConsumption.attachedFiles', {
                type: 'manual',
                message: 'El archivo seleccionado no tiene una extensión permitida'
            });
        }
    };

    const addFile = (formIndex) => {
        const values = getValues();
        const updatedElectricPowerConsumption = [...values.electricPowerConsumption];
        updatedElectricPowerConsumption[formIndex].attachedFiles.push(null);
        setValue('electricPowerConsumption', updatedElectricPowerConsumption);
    };
    const removeFile = (formIndex, fileIndex) => {
        const values = getValues();
        const updatedElectricPowerConsumption = [...values.electricPowerConsumption];
        updatedElectricPowerConsumption[formIndex].attachedFiles.splice(fileIndex, 1);
        setValue('electricPowerConsumption', updatedElectricPowerConsumption);
        dispatch(resetTooltipCase());
    };

    const toggleFlagNameForm = (formIndex) => {
        const values = getValues();
        const updatedElectricPowerConsumption = [...values.electricPowerConsumption];
        updatedElectricPowerConsumption[formIndex].flagNameForm = !updatedElectricPowerConsumption[formIndex].flagNameForm;
        setValue('electricPowerConsumption', updatedElectricPowerConsumption);
    };

    const handleUpdateNameForm = (formIndex, value) => {
        const values = getValues();
        const updatedElectricPowerConsumption = [...values.electricPowerConsumption];
        updatedElectricPowerConsumption[formIndex].nameForm = value;
        setValue('electricPowerConsumption', updatedElectricPowerConsumption);
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

    const onSubmit = data => console.log(data);

    const actionDraft = () => {
        console.log('Guardado como borrador');
    };

    return (
        <WrapReports
            title='Consumo de energía eléctrica'
            subTitle='Sier centro de control - 01/01/2023 - 31/12/2023'
            icon={ConsumoEnergia_Azul}
            navigateTo={-1}
        >
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center'>
                {[...fields].sort().map((_, formIndex) => (
                    <div className='flex flex-col items-center justify-center gap-4 pt-6 w-full' key={formIndex}>
                        <hr className={`w-2/4 border border-gray-400 opacity-100 ${formIndex !== 0 ? null : 'hidden'}`} />
                        <Controller
                            control={control}
                            name={`extinguisher[${formIndex}].valueInTons`}
                            rules={{ required: 'Por favor, ingresa el valor en kw/h', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números positivos' } }}
                            render={({ field }) =>
                                <div className='flex flex-col w-2/4'>
                                    <label className='text-left text-gray-600 font-normal leading-6 text-base opacity-100'>
                                        Valor en kw/h
                                    </label>
                                    <input
                                        {...field}
                                        className='bg-white rounded-8xs box-border w-full h-[37px] border-[0.5px] border-solid border-dimgray-200'
                                        placeholder='Ingresa el valor en kw/h'
                                        type='number'
                                    />
                                    {errors.extinguisher && errors.extinguisher[formIndex]?.valueInTons && (
                                        <CustomAlert
                                            message={errors.extinguisher[formIndex]?.valueInTons.message}
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
                        {errors?.electricPowerConsumption && errors?.electricPowerConsumption?.attachedFiles && (
                            <CustomAlert
                                message={errors?.electricPowerConsumption?.attachedFiles?.message}
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

                <ButtonGroupReportsU actionDraft={actionDraft} />
                <Tooltip />
            </form>
        </WrapReports>
    )
}
