//Note: Página de Inicio de la App (Segunda página que ve el usuario al ingresar a la App)
//Dependencies
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useState, useEffect, useContext } from 'react'
//Components
import { ButtonNextRegistrosPage } from '../../organisms/buttonNextRegistrosPage/ButtonNextRegistrosPage';
import { ButtonTypeA } from '../../molecules/buttons/buttonTypeA/ButtonTypeA';
import { CustomAlert } from '../../molecules/customAlert/customAlert';
import { SedeDetailCard } from '../../organisms/sedeDetailCard/SedeDetailCard';
import { SelectionCard } from '../../organisms/selectionCard/SelectionCard';
import { SelectSimple } from '../../molecules/selects/SelectSimple';
import { StepIndicator } from '../../organisms/stepIndicator/StepIndicator';
import { TextareaInputSimple } from '../../molecules/textarea/TextareaInputSimple';
import { TextInputSimple } from '../../molecules/inputs/TextInputSimple';
//Routes
import { paths } from '../../../routes/paths';
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext';
//Redux
import { useAppDispatch } from '../../../redux/store';
//Actions
import { createCenterAction, getCentersAction, getSectorProductivoAction } from '../../../redux/actions/RegisterAction';
//Slice
import { getCenterCurrentCase, updateFirstStepCase } from '../../../redux/slices/RegisterSlice';

export const RecalculationFormTemplate = () => {

    const nav = useNavigate(); // hook para navegar entre páginas
    const dispatch = useAppDispatch(); // hook para ejecutar acciones de redux

    const { goNext } = useContext(NavigateAppContext); // hook para navegar entre páginas

    const { register: { firstStep, centers, productiveSector, centerCurrent } } = useSelector(state => state.persistedData); // selector para obtener los datos del registro

    const [centerSelected, setCenterSelected] = useState(null);
    const [textAlert, setTextAlert] = useState(null);
    const [dataSectors, setDataSectors] = useState([])
    const [defaultValues] = useState({
        address: "",
        center: "",
        city: "",
        country: "",
        customName: "",
        department: "",
        description: "",
        endDate: null,
        NumberEmployees: "",
        startDate: null,
        typeSpace: [],
    });

    const {
        handleSubmit,
        register,
        reset,
        setValue,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues // se inicializa el formulario con los valores por defecto
    });

    const dataForm = watch();

    const onSubmit = async () => {
        dispatch(updateFirstStepCase(dataForm)); // Actualizar el slice con los datos del formulario
        if (centerCurrent) return goNext(); // Validar si el usuario ya seleccionó un centro de trabajo
        const { error, verify } = await dispatch(createCenterAction(dataForm)); // Crear un nuevo centro de trabajo
        if (error) return setTextAlert(error); // Validar si hubo un error al crear el centro de trabajo
        // if (verify) return dispatch(updateFirstStepCase({})); // Validar si el centro de trabajo se creó correctamente
        if (verify) return goNext(); // Validar si el centro de trabajo se creó correctamente
    };

    useEffect(() => {
        if (centerCurrent) {
            setCenterSelected(centerCurrent)
            // dispatch(updateFirstStepCase({}))
            reset(defaultValues)
            setValue('center', centerCurrent.id); // Actualizar el valor del centro de trabajo seleccionado
        }
    }, [centerCurrent])

    useEffect(() => {
        if (dataForm.center === '0') {
            setCenterSelected(null)
            dispatch(getCenterCurrentCase(null))  // Validar si el usuario selecciona la opción de agregar un nuevo centro de trabajo
            return
        }
        if (!centers) return setCenterSelected(null)
        const centerSelected = centers.find(center => center.id === dataForm.center) // Obtener el centro de trabajo seleccionado
        centerSelected && setCenterSelected(centerSelected) // Actualizar el valor del centro de trabajo seleccionado
        centerSelected && dispatch(getCenterCurrentCase(centerSelected))
    }, [dataForm.center])

    useEffect(() => {
        // Actualizar el valor del input typeSpace con los datos del array dataSectors
        const arryIsChecked = dataSectors.filter(item => item.isChecked === true)
        setValue('typeSpace', arryIsChecked.map(item => item.id))
    }, [dataSectors])

    useEffect(() => {
        // Validar si hay datos en el registro para mostrarlos en el formulario
        if (Object.keys(firstStep).length > 0 && !centerCurrent) reset(firstStep)
    }, [firstStep])

    useEffect(() => {
        // Obtener los centros de trabajo de la base de datos
        dispatch(getCentersAction());
    }, [])

    useEffect(() => {
        // Obtener las emisiones directas de la base de datos
        dispatch(getSectorProductivoAction());
    }, [])

    useEffect(() => {
        // Actualizar el valor del array dataSectors con los datos de la base de datos
        if (productiveSector.length > 0) setDataSectors(productiveSector)
    }, [productiveSector])

    return (
        <div className='RecalculationFormTemplate bg-primary-gris1 min-h-full'>
            <StepIndicator step={1} />
            <form onSubmit={handleSubmit(onSubmit)} className='FormularioRegistro w-[550px] mx-auto pt-2' autoComplete='off'>
                <p className='text-f19 font-bold text-primary-title1 mb-4'>Definir el tiempo de la medición</p>
                <div className='flex gap-12'>
                    <div className='w-1/2 flex flex-col'>
                        <TextInputSimple
                            label='Inicio del registro'
                            type='date'
                            register={register}
                            nameRegister='startDate'
                            errors={errors}
                            validations={{ required: 'La fecha es requerida' }}
                            disabled={dataForm.center === ''}
                        />
                    </div>
                    <div className='w-1/2 flex flex-col'>
                        <TextInputSimple
                            label='Final del registro'
                            type='date'
                            register={register}
                            nameRegister='endDate'
                            errors={errors}
                            validations={{ required: 'La fecha es requerida' }}
                            disabled={dataForm.center === ''}
                        />
                    </div>
                </div>
                <div className='mt-10 flex flex-col'>
                    <p className='text-f19 font-bold text-primary-title1 mb-4'>Elige el centro de trabajo para tu cálculo</p>
                    <SelectSimple
                        errors={errors}
                        label='Centro de trabajo'
                        nameRegister='center'
                        optionLabel='nombre'
                        options={[{ id: '0', nombre: 'Agregar nueva sede' }, ...centers]}
                        optionValue='id'
                        register={register}
                        validations={{ required: 'El centro de trabajo es requerido' }}
                    />
                </div>
                {centerSelected && (
                    <SedeDetailCard
                        address={centerSelected?.direccion}
                        description={centerSelected?.descripcion}
                        employees={centerSelected?.numero_de_empleados}
                        sector_productivo_id={centerSelected?.sector_productivo_id}
                    />
                )}
                {dataForm.center === '0' && !centerSelected && (
                    <div className='sedeCustomContainer'>
                        <div className='flex flex-col mt-10'>
                            <TextInputSimple
                                errors={errors}
                                label='Nombre personalizado'
                                nameRegister='customName'
                                register={register}
                                validations={{ required: 'El nombre es requerido' }}
                            />
                        </div>
                        <div className='flex flex-col mt-7'>
                            <TextInputSimple
                                errors={errors}
                                label='Número de empleados'
                                nameRegister='NumberEmployees'
                                register={register}
                                validations={{ required: 'El número de empleados es requerido', pattern: { value: /^[0-9]+$/, message: 'Por favor, ingresa solo números positivos' } }}
                            />
                        </div>
                        <div className='flex mt-10 justify-between'>
                            <div className='flex flex-col gap-2'>
                                <SelectSimple
                                    apiUrl='/ubicacion/paises'
                                    errors={errors}
                                    label='País'
                                    nameRegister='country'
                                    optionLabel='nombre'
                                    optionValue='id'
                                    register={register}
                                    validations={{ required: 'requerido' }}
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <SelectSimple
                                    apiUrl={dataForm.country !== '' ? `/ubicacion/departamentos/${dataForm.country}` : null}
                                    disabled={dataForm.country !== '' ? false : true}
                                    errors={errors}
                                    label='Departamentos'
                                    nameRegister='department'
                                    optionLabel='nombre'
                                    optionValue='id'
                                    register={register}
                                    validations={{ required: 'requerido' }}
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <SelectSimple
                                    apiUrl={dataForm.department !== '' ? `/ubicacion/ciudades/${dataForm.department}` : null}
                                    disabled={dataForm.department !== '' ? false : true}
                                    errors={errors}
                                    label='Ciudad'
                                    nameRegister='city'
                                    optionLabel='nombre'
                                    optionValue='id'
                                    register={register}
                                    validations={{ required: 'requerido' }}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col mt-5'>
                            <TextInputSimple
                                errors={errors}
                                label='Dirección'
                                nameRegister='address'
                                register={register}
                                validations={{ required: 'La dirección es requerida' }}
                                placeholder='Escribe la dirección'
                            />
                        </div>
                        <div className='flex flex-col mt-5'>
                            <TextareaInputSimple
                                errors={errors}
                                label='Descripción de la sede'
                                nameRegister='description'
                                register={register}
                                validations={{ required: 'La descripción es requerida' }}
                                placeholder='Escribe una descripción'
                                rows={4}
                            />
                        </div>
                        <div className='flex flex-col mt-5'>
                            <label className='text-f18 text-primary-gris2'>Sector productivo</label>
                            <ul className='flex flex-col gap-4  px-2'>
                                {dataSectors.map((espacio) => (
                                    <div key={espacio.id} >
                                        <SelectionCard
                                            icon={espacio?.icon}
                                            iconChecked={espacio?.iconChecked}
                                            id={espacio?.id}
                                            isActived={espacio?.isActived}
                                            isSelected={espacio?.isChecked}
                                            name={espacio.nombre}
                                            setData={setDataSectors}
                                            type='radio'
                                        />
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                {textAlert && (
                    <div className='mt-10 flex justify-center'>
                        <CustomAlert
                            message={textAlert}
                            type='error'
                        />
                    </div>
                )}
                <div className='flex justify-between mt-16 pb-10'>
                    <ButtonTypeA text='Cancelar' action={() => nav(paths.APPHOME)} />
                    <ButtonNextRegistrosPage />
                </div>
            </form >
        </div >
    )
}
