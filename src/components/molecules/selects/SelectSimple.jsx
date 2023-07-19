// Dependencias
import { useEffect, useState } from 'react';
// Axios
import axiosClient from '../../../config/AxiosClient';
// Components
import { CustomAlert } from '../customAlert/customAlert';

export const SelectSimple = ({
    apiUrl,
    disabled = false,
    errors,
    label,
    nameRegister,
    optionLabel,
    options = [],
    optionValue,
    placeholder = 'Seleccione',
    register,
    validations,
}) => {

    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosClient.get(apiUrl);
                const data = response.data.data ? response.data.data : [];
                setList(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (apiUrl) {
            fetchData();
        }
    }, [apiUrl]);

    useEffect(() => {
        if (options.length > 0) {
            setList(options);
        }
    }, [options]);

    // console.log(nameRegister, 'nameRegister')
    // console.log(register, 'register')
    // console.log(list, 'list')

    return (
        <>
            {/* <select {...register("Title", { required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select> */}

            <label className='text-f18 text-primary-gris2'>{label}</label>
            <select
                className='px-2 py-2 rounded-md border border-dimgray-200'
                disabled={disabled}
                {...register(nameRegister, validations)}
            >
                <option value='' style={{ display: 'none' }}>{placeholder}</option>
                {list.map((item) => (
                    <option key={item[optionValue]} value={item[optionValue]}>
                        {item[optionLabel]}
                    </option>
                ))}
            </select>
            {errors && errors[nameRegister] && (
                <CustomAlert
                    message={errors[nameRegister].message}
                    type='error'
                />
            )}
        </>
    );
};

// Como usarlo en un componente:

{/* <SelectSimple
    label='País'
    register={register}
    nameRegister='country'
    validations={{ required: 'Por favor, selecciona un país' }}
    options={dataPaises} || apiUrl='https://api.example.com/paises'
    optionValue='id'
    optionLabel='nombre'
    errors={errors}
/> */}
