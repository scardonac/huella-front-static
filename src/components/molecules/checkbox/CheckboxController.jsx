
import { Controller } from "react-hook-form";
export default function CheckboxController({ control }) {
    return (
        // <div
        //     className="checkbox-container"
        // >
        //     <Controller
        //         name="checkbox"
        //         control={control}
        //         render={({ field }) => (
        //             <label  htmlFor={'1_1'}>
        //                 <input
        //                     id={'1_1'}
        //                     type="checkbox"
        //                     {...field}
        //                     className="checkbox"
        //                 />
        //                 Acepta el uso de datos personales y acuerdos de confidencialidad
        //                 <span className="checkmark"></span>
        //             </label>
        //         )}
        //     />
        // </div>
        // <div
        //     className={`SelectionCard bg-primary-white1 border-2 border-solid w-full px-10 flex gap-4 items-center justify-between py-2 pl-2 pr-5 rounded-xl cursor-pointer`}
        // // onClick={isActived && handleSelect}
        // >

        //     <div>
        //         <input
        //             className='checkbox'
        //             type='checkbox'
        //             id={'1_1'}
        //             checked={true}
        //             readOnly
        //         />
        //         {true && (
        //             <label className='label' htmlFor={'1_1'}>
        //                 <div className='flex ml-6'>
        //                     <span> Acepta el uso de datos personales y acuerdos de confidencialidad</span>
        //                 </div>
        //             </label>
        //         )}
        //     </div>
        // </div>
        <Controller
            name="checkboxField" // Nombre del campo en el formulario
            control={control}
            defaultValue={false} // Valor inicial del checkbox
            render={({ field }) => (
                <label className="custom-checkbox">
                    <input
                        type="checkbox"
                        className="checkbox"
                        {...field}
                    />
                    <div className="checkmark"></div>
                    Acepta el uso de datos personales y acuerdos de confidencialidad
                </label>
            )}
        />
    );
};
