//Dependencies
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
//Components
import { ButtonNextRegistrosPage } from '../../organisms/buttonNextRegistrosPage/ButtonNextRegistrosPage';
import { ButtonTypeA } from '../../molecules/buttons/buttonTypeA/ButtonTypeA';
import { GoBackLink } from '../../molecules/goBackLink/GoBackLink';
import { SelectionCard } from '../../organisms/selectionCard/SelectionCard';
import { StepIndicator } from '../../organisms/stepIndicator/StepIndicator';
//Context
import { NavigateAppContext } from '../../../context/NavigateAppContext';
//Routes
import { paths } from '../../../routes/paths';
//Actions
import { updateThirdStepCase } from '../../../redux/slices/RegisterSlice';
//Redux
import { useAppDispatch } from '../../../redux/store';

export const StepIndirectEmissionsTemplate = () => {

  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const { goNext } = useContext(NavigateAppContext);

  const { register: { thirdStep, inDirectEmissions } } = useSelector(state => state.persistedData);

  const [dataEmisionesIndirect, setDataEmisionesIndirect] = useState([])

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
    dispatch(updateThirdStepCase(dataForm));
    goNext();
  };

  useEffect(() => {
    // Actualizar el valor del input categories con los datos del array dataEmisionesIndirect
    const arryIsChecked = dataEmisionesIndirect.filter(item => item.isChecked === true)
    setValue('categories', arryIsChecked.map(item => item.id))
  }, [dataEmisionesIndirect])

  useEffect(() => {
    // Validar si hay datos en el registro para mostrarlos en el formulario
    if (Object.keys(thirdStep).length > 0) reset(thirdStep)
  }, [thirdStep])

  useEffect(() => {
    // Actualizar el valor del array dataEmisiones con los datos de la base de datos
    if (inDirectEmissions.length > 0) setDataEmisionesIndirect(inDirectEmissions)
  }, [inDirectEmissions])

  return (
    <div className='StepIndirectEmissionsPage bg-primary-gris1 min-h-full'>
      <GoBackLink />
      <StepIndicator step={3} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='FormularioEmisionesIndirectas w-[550px] mx-auto pt-2'>
          <h3>Emisiones Indirectas</h3>
          <p className='label_ my-7'>También conocidas de alcance 2, son las emisiones generadas por el consumo de energía eléctrica.</p>
          <p>Selecciona las categorías</p>
          <ul className='flex flex-col gap-4 mt-3'>
            {dataEmisionesIndirect.map((eIndirecta) => (
              <div key={eIndirecta.id} >
                <SelectionCard
                  icon={eIndirecta?.icon}
                  iconChecked={eIndirecta?.iconChecked}
                  id={eIndirecta?.id}
                  isSelected={eIndirecta?.isChecked}
                  name={eIndirecta.nombre}
                  setData={setDataEmisionesIndirect}
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
