import clsx from 'clsx';
import { useSelector } from 'react-redux';

// offsetX = 12, offsetY = 12
export const Tooltip = ({ width = null, offsetX = 5, offsetY = 5 }) => {

    // Obtenemos el estado del tooltip del store de Redux
    const tooltip = useSelector(state => state.helpers.tooltip);

    // Clases del tooltip
    const classes = clsx(`absolute z-10 w-${width ? width : 'fit'} p-2 bg-primary-title1 text-white text-sm rounded-[10px] top-0 right-0`);

    return (
        tooltip.showTooltip && (
            <div
                className={classes}
                style={{ left: `${tooltip.position.x + offsetX}px`, top: `${tooltip.position.y + offsetY}px` }}
            >
                {tooltip.textTooltip}
            </div>
        )
    );
};