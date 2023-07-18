export const StepIndicator = ({ step = 1 }) => {
    const colorNotSelected = "bg-primary-green2"
    const colorSelected = "bg-primary-green1"
    const stepsConfig = {
        1: {
            1: colorSelected,
            2: colorNotSelected,
            3: colorNotSelected,
            4: colorNotSelected,
        },
        2: {
            1: colorSelected,
            2: colorSelected,
            3: colorNotSelected,
            4: colorNotSelected,
        },
        3: {
            1: colorSelected,
            2: colorSelected,
            3: colorSelected,
            4: colorNotSelected,
        },
        4: {
            1: colorSelected,
            2: colorSelected,
            3: colorSelected,
            4: colorSelected,
        },
    }

    return (
        <div className='StepIndicator flex gap-2 py-3 mx-auto w-fit'>
            <div className={`w-3 h-3 rounded-full  ${stepsConfig[step][1]}`}></div>
            <div className={`w-3 h-3 rounded-full  ${stepsConfig[step][2]}`}></div>
            <div className={`w-3 h-3 rounded-full  ${stepsConfig[step][3]}`}></div>
            <div className={`w-3 h-3 rounded-full  ${stepsConfig[step][4]}`}></div>
        </div>
    )
}