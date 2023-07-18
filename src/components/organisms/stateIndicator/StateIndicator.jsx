export const StateIndicator = ({ state = 1 }) => {
    return (
        <div className="StateIndicator flex justify-center">
            {state === 1 ?
                (<span className=" flex justify-center items-center h-8 w-8 rounded-full bg-whitesmoke-100 mx-auto">
                    <span className=" block h-4 w-4 rounded-full bg-lightgray-200 mx-auto"></span>
                </span>):
            state === 2 ?
                (
                    <span className='px-2 py-2 bg-primary-yellow1 text-gray-100 font-bold rounded-lg'>Pendiente</span>
                ):
                (
                    <span className='px-2 py-2 bg-primary-green1 text-white font-bold rounded-lg'>Completo</span>
                )
            }
        </div>
    )
}