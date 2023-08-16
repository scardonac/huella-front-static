
import { Controller } from "react-hook-form";
export default function CheckboxController({ control }) {
    return (
        // <div className="checkbox-container">
        //     <Controller
        //         name="checkbox"
        //         control={control}
        //         render={({ field }) => (
        //             <label>
        //                 <input
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
        <div
            className={`SelectionCard bg-primary-white1 border-2 border-solid w-full px-10 flex gap-4 items-center justify-between py-2 pl-2 pr-5 rounded-xl cursor-pointer`}
            // onClick={isActived && handleSelect}
        >
            <div className='flex items-center gap-4'>
                <div className='w-[60px] h-[60px]'>
                    {/* <img className='w-full h-full'
                        // src={urlImg}
                    /> */}
                </div>
                {/* <span>{name}</span> */}
            </div>
            <div>
                <input
                    className='checkbox'
                    type='checkbox'
                    // id={id}
                    // checked={isSelected}
                    readOnly
                />
                {/* {isActived && (
                    <label className='label' htmlFor={id}></label>
                )} */}
            </div>
        </div>
    );
};
