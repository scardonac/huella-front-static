// Dependencias
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
// Axios
import axiosClient from '../../../config/AxiosClient';
// Components
import { CustomAlert } from '../customAlert/customAlert';

export const SelectController = ({ control, name, apiUrl, valueKey, labelKey, placeholder, disabled, staticData }) => {

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

        if (apiUrl && !staticData) {
            fetchData();
        } else {
            setList(staticData || []);
        }
    }, [apiUrl, staticData]);

    return (
        <Controller
            control={control}
            name={name}
            rules={{ required: "Por favor, selecciona una opción" }}
            render={({ field, fieldState: { error } }) => (
                <div className='flex flex-col w-2/4'>
                    <label className='text-left text-gray-600 font-normal leading-6 text-base opacity-100'>
                        Tipo de vehículo
                    </label>
                    <select
                        {...field}
                        className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-[0.5px] border-[#627173] bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
                        disabled={disabled}
                    >
                        <option value='' style={{ display: 'none' }}>{placeholder}</option>
                        {list.map((item) => (
                            <option key={item[valueKey]} value={item[valueKey]}>
                                {item[labelKey]}
                            </option>
                        ))}
                    </select>
                    {error && (
                        <CustomAlert
                            message={error.message}
                            type='error'
                        />
                    )}
                </div>
            )}
        />
    );
};



// Como usarlo en un componente:

{/* <Controller
  control={control}
  name='vehicles[${formIndex}].vehicleType'
  rules={{ required: "Por favor, selecciona un tipo de vehículo" }}
  render={({ field, fieldState: { error } }) => (
    <ReusableList
      control={control}
      name='vehicles[${formIndex}].vehicleType'
      apiUrl='/api/vehicleTypes'
      valueKey='id'
      labelKey='name'
      placeholder='Seleccione un tipo'
      disabled={false}
    />
  )}
/> */}
