//Dependencies
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
//Components
import { ButtonNextRegistrosPage } from '../../organisms/buttonNextRegistrosPage/ButtonNextRegistrosPage';
import { ButtonTypeA } from '../../molecules/buttons/buttonTypeA/ButtonTypeA';
import { CustomAlert } from '../../molecules/customAlert/customAlert';
import { GoBackLink } from '../../molecules/goBackLink/GoBackLink';
import { SelectionCard } from '../../organisms/selectionCard/SelectionCard';
import { StepIndicator } from '../../organisms/stepIndicator/StepIndicator';
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext';
//Routes
import { paths } from '../../../routes/paths';
//Actions
import { updateFourthStepCase } from '../../../redux/slices/RegisterSlice';
//Redux
import { useAppDispatch } from '../../../redux/store';
//Slice
import { createCalculationAction } from '../../../redux/actions/RegisterAction';

export const StepOtherEmissionsTemplate = () => {

  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const { goNext } = useContext(NavigateAppContext);


  const { register: { fourthStep, otherEmissions } } = useSelector(state => state.persistedData);

  const [dataOtrasEmisionesIndirectas, setDataOtrasEmisionesIndirectas] = useState([])
  const [textAlert, setTextAlert] = useState(null)

  const [defaultValues] = useState({
    categories: [],
  });

  const {
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues // se inicializa el formulario con los valores por defecto
  });

  const dataForm = watch();

  const onSubmit = async () => {
    dispatch(updateFourthStepCase(dataForm));
    const { error, verify } = await dispatch(createCalculationAction(dataForm));
    if (error) return setTextAlert(error);
    if (verify) return goNext();
  };

  useEffect(() => {
    // Actualizar el valor del input categories con los datos del array dataOtrasEmisionesIndirectas
    const arryIsChecked = dataOtrasEmisionesIndirectas.filter(item => item.isChecked === true)
    setValue('categories', arryIsChecked.map(item => item.id))
  }, [dataOtrasEmisionesIndirectas])

  useEffect(() => {
    // Validar si hay datos en el registro para mostrarlos en el formulario
    if (Object.keys(fourthStep).length > 0) reset(fourthStep)
  }, [fourthStep])

  useEffect(() => {
    // Actualizar el valor del array dataEmisiones con los datos de la base de datos
    if (otherEmissions.length > 0) setDataOtrasEmisionesIndirectas(otherEmissions)
  }, [otherEmissions])

  return (
    <div className='StepOtherEmissionsTemplate bg-primary-gris1 min-h-full'>
      <GoBackLink />
      <StepIndicator step={4} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='OtrasEmisionesIndirectas w-[550px] mx-auto pt-2'>
          <h3>Otras emisiones indirectas</h3>
          <p className='label_ my-7'>Conocidas como de alcance 3, son generadas por fuentes externas a la propiedad de la empresa.</p>
          <p>Selecciona las categorías</p>
          <ul className='flex flex-col gap-4 mt-3'>
            {dataOtrasEmisionesIndirectas.map((eDirecta, index) => (
              <div key={eDirecta.id} >
                <SelectionCard
                  icon={eDirecta?.icon}
                  iconChecked={eDirecta?.iconChecked}
                  id={eDirecta?.id}
                  isSelected={eDirecta?.isChecked}
                  name={eDirecta.nombre}
                  setData={setDataOtrasEmisionesIndirectas}
                />
              </div>
            ))}
          </ul>
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
        </div>
      </form>
    </div>
  )
}
