//Dependencies
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
//Components
import { ButtonNextRegistrosPage } from '../../../components/organisms/buttonNextRegistrosPage/ButtonNextRegistrosPage';
import { ButtonTypeA } from '../../../components/molecules/buttons/buttonTypeA/ButtonTypeA';
import { GoBackLink } from '../../../components/molecules/goBackLink/GoBackLink';
import { SelectionCard } from '../../../components/organisms/selectionCard/SelectionCard';
import { StepIndicator } from '../../../components/organisms/stepIndicator/StepIndicator';
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext';
//Routes
import { paths } from '../../../routes/paths';
//Actions
import { updateSecondStepCase } from '../../../redux/slices/RegisterSlice';
//Redux
import { useAppDispatch } from '../../../redux/store';
import { useSelector } from 'react-redux';
import { getEmissionsAction } from '../../../redux/actions/RegisterAction';
export const StepDirectEmissionsTemplate = () => {

  const nav = useNavigate()
  const dispatch = useAppDispatch();
  const { goNext } = useContext(NavigateAppContext)

  const { register: { secondStep, directEmissions } } = useSelector(state => state.persistedData);

  const [dataEmisiones, setDataEmisiones] = useState([])


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

  const onSubmit = () => {
    dispatch(updateSecondStepCase(dataForm));
    goNext();
  };

  useEffect(() => {
    // Actualizar el valor del input categories con los datos del array dataEmisiones
    const arryIsChecked = dataEmisiones.filter(item => item.isChecked === true)
    setValue('categories', arryIsChecked.map(item => item.id))
  }, [dataEmisiones])

  useEffect(() => {
    // Validar si hay datos en el registro para mostrarlos en el formulario
    if (Object.keys(secondStep).length > 0) reset(secondStep)
  }, [secondStep])

  useEffect(() => {
    // Obtener las emisiones directas de la base de datos
    dispatch(getEmissionsAction());
  }, [])

  useEffect(() => {
    // Actualizar el valor del array dataEmisiones con los datos de la base de datos
    if (directEmissions.length > 0) setDataEmisiones(directEmissions)
  }, [directEmissions])

  return (
    <div className='StepDirectEmissionsTemplate bg-primary-gris1 min-h-full'>
      <GoBackLink />
      <StepIndicator step={2} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='FormularioEmisionesDirectas w-[550px] mx-auto pt-2'>
          <h3>Emisiones directas</h3>
          <p className='label_ my-7'>También conocidas de alcance 1, son las emisiones de propiedad o controladas por la empresa.</p>
          <p>Selecciona las categorías</p>
          <ul className='flex flex-col gap-4 mt-3'>
            {dataEmisiones.map((eDirecta) => (
              <div key={eDirecta.id} >
                <SelectionCard
                  icon={eDirecta?.icon}
                  iconChecked={eDirecta?.iconChecked}
                  id={eDirecta?.id}
                  isSelected={eDirecta?.isChecked}
                  name={eDirecta.nombre}
                  setData={setDataEmisiones}
                />
              </div>
            ))}
          </ul>
          <div className='flex justify-between mt-16 pb-10'>
            <ButtonTypeA text='Cancelar' action={() => nav(paths.APPHOME)} />
            <ButtonNextRegistrosPage />
          </div>
        </div>
      </form>
    </div>
  )
}
