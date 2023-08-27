import { Icons } from "../../../assets/icons/IconProvider";
import { SelectSimple } from "../../molecules/selects/SelectSimple"
//Hooks
import useTooltip from "../../../Hooks/useTooltip";
import { Tooltip } from "../../molecules/tooltip/Tooltip";
import { TextInputSimple } from "../../molecules/inputs/TextInputSimple";

const { InformationIcon } = Icons; //Iconos

export const RecalculationPurposeForm = ({
    errors,
    register,
    setMoreInformation,
    watch,
}) => {

    const { tooltip, handleOnMouseEnter, handleOnMouseLeave, handleMouseMove } = useTooltip();

    const textTooltip = 'Establecer una meta de emisiones ayuda a permanecer alineado con los objetivos iniciales del registro. Se calcula con relación a las emisiones previas o del año base.';

    return (
        <>
            <div className='mt-10 flex flex-col'>
                <div className='flex gap-2'>
                    <img
                        className='w-4 h-4 mt-[6px] cursor-pointer'
                        alt='Icono de información'
                        src={InformationIcon}
                        onMouseMove={(e) => handleMouseMove(e)}
                        onMouseEnter={() => handleOnMouseEnter(textTooltip)}
                        onMouseLeave={() => handleOnMouseLeave()}
                    />
                    <p className='text-f19 font-bold text-primary-title1 mb-4'>Establecer Meta de emisiones <span className='font-normal'>(opcional)</span></p>
                </div>
                <SelectSimple
                    errors={errors}
                    label='Elegir tipo de meta'
                    nameRegister='typePurpose'
                    optionLabel='nombre'
                    options={[{ id: '0', nombre: 'Meta de reducción' }, { id: '1', nombre: 'Meta límite de emisión' }]}
                    optionValue='id'
                    placeholder='Selecciona una opción'
                    register={register}
                // validations={{ required: 'El centro de trabajo es requerido' }}
                />
                <b
                    onClick={() => setMoreInformation(true)}
                    className="ml-1 mt-2 cursor-pointer font-bold text-base leading-[22px] tracking-[0.08px] text-primary-title1 text-left underline">
                    Más información sobre las metas
                </b>

                {watch('typePurpose') === '0' && (
                    <>
                        <label className='text-f18 text-primary-gris2 mt-6 mb-5'>Es el porcentaje de CO2 equivalente que buscas reducir en comparación con un registro previo.</label>
                        <SelectSimple
                            errors={errors}
                            label='Selecciona registro anterior'
                            nameRegister='lastRegister'
                            optionLabel='nombre'
                            options={[{ id: '0', nombre: 'Registro 1' }, { id: '1', nombre: 'Registro 2' }]}
                            optionValue='id'
                            placeholder='Selecciona una opción'
                            register={register}
                            validations={{ required: 'El registro es requerido' }}
                        />
                        <div className='flex flex-col mt-6'>
                            <TextInputSimple
                                errors={errors}
                                label='Escribe el porcentaje (%) que esperas reducir'
                                nameRegister='percentage'
                                register={register}
                                placeholder="Escribe el %"
                                validations={{
                                    required: 'El nombre es requerido',
                                    pattern: {
                                        value: /^[0-9]*$/,
                                        message: 'Solo se permiten números'
                                    },
                                }}
                            />
                        </div>
                    </>
                )}

                {watch('typePurpose') === '1' && (
                    <>
                        <label className='text-f18 text-primary-gris2 mt-6 mb-5'>Es el máximo de emisiones (en toneladas de CO2 eq) que deseas evitar superar.</label>
                        <div className='flex flex-col mt-6'>
                            <TextInputSimple
                                errors={errors}
                                label='Escribe tu meta'
                                nameRegister='purpose'
                                register={register}
                                placeholder="Tu meta"
                                validations={{ required: 'El nombre es requerido' }}
                            />
                        </div>
                    </>
                )}
            </div>
            <Tooltip
                width='[341px]'
            />
        </>
    )
}
