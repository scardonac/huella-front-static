import clsx from 'clsx';
import { useSelector } from 'react-redux';

export const Tooltip = () => {

    // Obtenemos el estado del tooltip del store de Redux
    const tooltip = useSelector(state => state.helpers.tooltip);

    const classes = clsx('absolute z-10 w-fit p-2 bg-[#0E555C] text-white text-sm rounded-[10px]');

    const offsetX = 12; // you can adjust this value
    const offsetY = 12; // you can adjust this value

    return (
        tooltip.showTooltip && (
            <div
                className={classes}
                // style={{ left: `${tooltip.position.x}px`, top: `${tooltip.position.y}px` }}
                style={{ left: `${tooltip.position.x + offsetX}px`, top: `${tooltip.position.y + offsetY}px` }}
            >
                {tooltip.textTooltip}
            </div>
        )
    );
};

