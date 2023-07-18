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
const { Car_Azul } = Illustrations; //Illustrations

export const VehiclesReportU = () => {

    const dispatch = useAppDispatch();

    // Obtenemos el estado del tooltip del store de Redux
    const tooltip = useSelector(state => state.helpers.tooltip);

    const { control, handleSubmit, reset, clearErrors, setValue, setError, getValues, formState: { errors } } = useForm({
        defaultValues: {
            vehicles: [
                { nameForm: 'Vehículo', flagNameForm: false, vehicleType: '', fuelType: '', kilometers: '', gallons: '', numberOfVehicles: '', attachedFiles: [null] },
            ]
        }
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'vehicles'
    });

    const handleFileChange = (e, formIndex, fileIndex) => {
        const file = e.target.files[0];
        const fileExtension = file?.name.split('.').pop();

        if (file && allowedExtensions.includes(`.${fileExtension}`)) {
            const values = getValues();
            const updatedVehicles = [...values.vehicles];
            updatedVehicles[formIndex].attachedFiles[fileIndex] = file;
            setValue('vehicles', updatedVehicles);
            clearErrors('vehicles.attachedFiles');
        } else {
            // El archivo seleccionado no tiene una extensión permitida
            // Puedes mostrar un mensaje de error o realizar alguna acción adicional aquí
            setError('vehicles.attachedFiles', {
                type: 'manual',
                message: 'El archivo seleccionado no tiene una extensión permitida'
            });
        }
    };

    const addFile = (formIndex) => {
        const values = getValues();
        const updatedVehicles = [...values.vehicles];
        updatedVehicles[formIndex].attachedFiles.push(null);
        setValue('vehicles', updatedVehicles);
    };
    const removeFile = (formIndex, fileIndex) => {
        const values = getValues();
        const updatedVehicles = [...values.vehicles];
        updatedVehicles[formIndex].attachedFiles.splice(fileIndex, 1);
        setValue('vehicles', updatedVehicles);
        dispatch(resetTooltipCase());
    };

    const toggleFlagNameForm = (formIndex) => {
        const values = getValues();
        const updatedVehicles = [...values.vehicles];
        updatedVehicles[formIndex].flagNameForm = !updatedVehicles[formIndex].flagNameForm;
        setValue('vehicles', updatedVehicles);
    };

    const handleUpdateNameForm = (formIndex, value) => {
        const values = getValues();
        const updatedVehicles = [...values.vehicles];
        updatedVehicles[formIndex].nameForm = value;
        setValue('vehicles', updatedVehicles);
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
            title='Vehículos'
            subTitle='Sier centro de control - 01/01/2023 - 31/12/2023'
            icon={Car_Azul}
            navigateTo={-1}
        >
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center'>
                {[...fields].sort().map((_, formIndex) => (
                    <div className='flex flex-col items-center justify-center gap-4 pt-6 w-full' key={formIndex}>
                        <hr className={`w-2/4 border border-gray-400 opacity-100 ${formIndex !== 0 ? null : 'hidden'}`} />
                        <Controller
                            control={control}
                            name={`vehicles[${formIndex}].nameForm`}
                            render={({ field }) =>
                                <div className='flex items-center justify-between w-2/4 mr-9'>
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
                                                remove(formIndex);
                                                dispatch(resetTooltipCase());
                                            }}
                                        />
                                    </div>

                                </div>
                            }
                        />
                        <Controller
                            control={control}
                            name={`vehicles[${formIndex}].vehicleType`}
                            rules={{ required: "Por favor, selecciona un tipo de vehículo" }}
                            render={({ field }) =>
                                <div className='flex flex-col w-2/4'>
                                    <label className='text-left text-gray-600 font-normal leading-6 text-base opacity-100'>
                                        Tipo de vehículo
                                    </label>
                                    <select {...field} className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-[0.5px] border-[#627173] bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                                        <option value="">Selecciona un tipo</option>
                                        <option value="1">Camioneta 1</option>
                                        <option value="2">Camioneta 2</option>
                                        <option value="3">Camioneta 3</option>
                                        <option value="4">Camioneta 4</option>
                                    </select>
                                    {errors.vehicles && errors.vehicles[formIndex]?.vehicleType && (
                                        <CustomAlert
                                            message={errors.vehicles[formIndex]?.vehicleType.message}
                                            type='error'
                                        />
                                    )}
                                </div>
                            }
                        />
                        <Controller
                            control={control}
                            name={`vehicles[${formIndex}].fuelType`}
                            rules={{ required: "Por favor, selecciona un tipo de combustible" }}
                            render={({ field }) =>
                                <div className='flex flex-col w-2/4'>
                                    <label className='text-left text-gray-600 font-normal leading-6 text-base opacity-100'>
                                        Tipo de combustible
                                    </label>
                                    <select {...field} className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-[0.5px] border-[#627173] bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                                        <option value="">Selecciona un tipo</option>
                                        <option value="1">Gasolina 1</option>
                                        <option value="2">Gasolina 2</option>
                                        <option value="3">Gasolina 3</option>
                                        <option value="4">Gasolina 4</option>
                                    </select>
                                    {errors.vehicles && errors.vehicles[formIndex]?.fuelType && (
                                        <CustomAlert
                                            message={errors.vehicles[formIndex]?.fuelType.message}
                                            type='error'
                                        />
                                    )}
                                </div>
                            }
                        />
                        {/* <Controller
                            control={control}
                            name={`vehicles[${formIndex}].kilometers`}
                            render={({ field }) =>
                                <div className='flex flex-col w-2/4'>
                                    <label className='text-left text-gray-600 font-normal leading-6 text-base opacity-100'>
                                        kms recorridos <span className='text-left text-gray-400 opacity-100 text-base leading-6 tracking-widest'>
                                            (opcional)
                                        </span>
                                    </label>
                                    <input
                                        {...field}
                                        className='bg-white rounded-8xs box-border w-full h-[37px] border-[0.5px] border-solid border-dimgray-200'
                                        placeholder='Ingresa los kms recorridos'
                                        type='number'
                                    />
                                </div>
                            }
                        /> */}
                        <Controller
                            control={control}
                            name={`vehicles[${formIndex}].gallons`}
                            rules={{ required: 'Por favor, ingresa los galones consumidos', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números positivos' } }}
                            render={({ field }) =>
                                <div className='flex flex-col w-2/4'>
                                    <label className='text-left text-gray-600 font-normal leading-6 text-base opacity-100'>
                                        Galones consumidos
                                    </label>
                                    <input
                                        {...field}
                                        className='bg-white rounded-8xs box-border w-full h-[37px] border-[0.5px] border-solid border-dimgray-200'
                                        placeholder='Ingresa los galones consumidos'
                                        type='number'
                                    />
                                    {errors.vehicles && errors.vehicles[formIndex]?.gallons && (
                                        <CustomAlert
                                            message={errors.vehicles[formIndex]?.gallons.message}
                                            type='error'
                                        />
                                    )}
                                </div>
                            }
                        />
                        <Controller
                            control={control}
                            name={`vehicles[${formIndex}].numberOfVehicles`}
                            rules={{ required: 'Por favor, ingresa la cantidad de vehículos', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números positivos' } }}
                            render={({ field }) =>
                                <div className='flex flex-col w-2/4'>
                                    <label className='text-left text-gray-600 font-normal leading-6 text-base opacity-100'>
                                        Cantidad de vehículos
                                    </label>
                                    <input
                                        {...field}
                                        className='bg-white rounded-8xs box-border w-full h-[37px] border-[0.5px] border-solid border-dimgray-200'
                                        placeholder='Ingresa la cantidad de vehículos'
                                        type='number'
                                    />
                                    {errors.vehicles && errors.vehicles[formIndex]?.numberOfVehicles && (
                                        <CustomAlert
                                            message={errors.vehicles[formIndex]?.numberOfVehicles.message}
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
                                            accept='image/*, .pdf'
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
                        {errors?.vehicles && errors?.vehicles?.attachedFiles && (
                            <CustomAlert
                                message={errors?.vehicles?.attachedFiles?.message}
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
                            <button onClick={() => addFile(formIndex)}>Agregar otro soporte</button>
                        </div>
                        <div className={`flex items-center w-2/4 text-darkgray ${formIndex !== fields.length - 1 ? 'hidden' : null}`}>
                            <img
                                className='w-4 h-4 mr-[3px]'
                                alt=''
                                src={InformationIcon}
                            />
                            <div className='bg-primary-green2 bg-no-repeat px-4 py-2 rounded-lg opacity-100 cursor-pointer' onClick={() =>
                                append({ nameForm: 'Vehículo', flagNameForm: false, vehicleType: '', fuelType: '', kilometers: '', gallons: '', numberOfVehicles: '', attachedFiles: [null] })}>
                                <b className='tracking-tighter leading-6 text-primary-80 font-bold text-left text-base text-primary-title1 opacity-100'>
                                    Agregar otro tipo de vehículo
                                </b>
                            </div>
                        </div>
                    </div>
                ))}

                <ButtonGroupReportsU actionDraft={actionDraft} />

                <Tooltip />
            </form>
        </WrapReports>
    )
}
