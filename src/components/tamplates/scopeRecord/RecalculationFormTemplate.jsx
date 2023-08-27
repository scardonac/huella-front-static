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
import { RecalculationCenterForm } from '../../organisms/forms/RecalculationCenterForm';
import { RecalculationPurposeForm } from '../../organisms/forms/RecalculationPurposeForm';
import { StepIndicator } from '../../organisms/stepIndicator/StepIndicator';
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
import { MoreInformation } from '../../organisms/moreAbout/MoreInformation';

export const RecalculationFormTemplate = () => {

    const nav = useNavigate(); // hook para navegar entre páginas
    const dispatch = useAppDispatch(); // hook para ejecutar acciones de redux

    const { goNext } = useContext(NavigateAppContext); // hook para navegar entre páginas

    const { register: { firstStep, centers, productiveSector, centerCurrent } } = useSelector(state => state.persistedData); // selector para obtener los datos del registro

    const [centerSelected, setCenterSelected] = useState(null);
    const [textAlert, setTextAlert] = useState(null);
    const [moreInformation, setMoreInformation] = useState(false);
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
        typePurpose: "",
        purpose: "",
        lastRegister: "",
        percentage: "",
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

    if (moreInformation) return <MoreInformation setMoreInformation={setMoreInformation} />

    return (
        <div className='bg-primary-gris1 min-h-full'>
            <StepIndicator step={1} />
            <form onSubmit={handleSubmit(onSubmit)} className='FormularioRegistro w-[550px] mx-auto pt-2'>
                <RecalculationCenterForm
                    dataForm={dataForm}
                    errors={errors}
                    register={register}
                    setValue={setValue}
                    textAlert={textAlert}
                    watch={watch}
                    centerSelected={centerSelected}
                    setDataSectors={setDataSectors}
                    dataSectors={dataSectors}
                    centers={centers}
                />
                {textAlert && (
                    <div className='mt-10 flex justify-center'>
                        <CustomAlert
                            message={textAlert}
                            type='error'
                        />
                    </div>
                )}
                <RecalculationPurposeForm
                    errors={errors}
                    register={register}
                    watch={watch}
                    setMoreInformation={setMoreInformation}
                />
                <div className='flex justify-between mt-16 pb-10'>
                    <ButtonTypeA text='Cancelar' action={() => nav(paths.APPHOME)} />
                    <ButtonNextRegistrosPage />
                </div>
            </form >
        </div >
    )
}
