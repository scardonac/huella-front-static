import { useSelector } from 'react-redux';
import { resetTooltipCase, setTooltipCase } from '../redux/slices/HelpersSlice';
import { useAppDispatch } from '../redux/store';

const useTooltip = () => {

    // Obtenemos el estado del tooltip del store de Redux
    const tooltip = useSelector(state => state.helpers.tooltip);

    const dispatch = useAppDispatch(); //Inicializamos el dispatcher

    const handleOnMouseEnter = (text) => {
        console.log('handleOnMouseEnter', text);
        // Llamamos a la acción setTooltipCase para mostrar el tooltip con el texto deseado
        dispatch(setTooltipCase({ ...tooltip, showTooltip: true, textTooltip: text }));
    };

    const handleOnMouseLeave = () => {
        console.log('handleOnMouseLeave');
        // Llamamos a la acción resetTooltipCase para esconder el tooltip y resetear su texto
        dispatch(resetTooltipCase());
    };

    const handleMouseMove = (e) => {
        console.log('handleMouseMove');
        // Llamamos a la acción setTooltipCase para actualizar la posición del tooltip
        dispatch(setTooltipCase({ ...tooltip, position: { x: e.pageX, y: e.pageY } }));
    };

    return {
        tooltip,
        handleOnMouseEnter,
        handleOnMouseLeave,
        handleMouseMove
    };
};

export default useTooltip;
