//Componets
import { Icons } from "../../../assets/icons/IconProvider";
import { SedeDetailCard } from "../sedeDetailCard/SedeDetailCard"
import { SelectSimple } from "../../molecules/selects/SelectSimple"
import { TextareaInputSimple } from "../../molecules/textarea/TextareaInputSimple"
import { TextInputSimple } from "../../molecules/inputs/TextInputSimple"
import { SelectionCard } from "../selectionCard/SelectionCard";

const { InformationIcon } = Icons; //Iconos

export const RecalculationCenterForm = ({
    centerSelected,
    dataForm,
    errors,
    register,
    setDataSectors,
    dataSectors,
    centers,
}) => {
    return (
        <>
            <div className='flex gap-2'>
                <img className='w-4 h-4 mt-[6px] cursor-pointer' alt='Icono de información' src={InformationIcon} />
                <p className='text-f19 font-bold text-primary-title1 mb-4'>Definir el tiempo de la medición</p>
            </div>
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
                    label='Elige un centro de trabajo'
                    nameRegister='center'
                    optionLabel='nombre'
                    options={[{ id: '0', nombre: 'Agregar nueva sede' }, ...centers]}
                    optionValue='id'
                    placeholder='Selecciona uno'
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
        </>
    )
}
