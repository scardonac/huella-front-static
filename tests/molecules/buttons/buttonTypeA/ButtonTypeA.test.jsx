//Testing-library
import { fireEvent, render, screen } from "@testing-library/react";
//utils-test-dom
import { act } from "react-dom/test-utils";
//Component
import { ButtonTypeA } from "../../../../src/components/molecules/buttons/buttonTypeA/ButtonTypeA";

describe('Pruebas en <ButtonTypeA />', () => {

    test('Debe renderizarse correctamente', () => {
        const { baseElement } = render(<ButtonTypeA />);
        expect(baseElement).toMatchSnapshot();
    });

    test('Debe renderizarse correctamente con estilos', () => {
        render(<ButtonTypeA style="test" />);

        const fnButton = screen.getByTestId('button_type_a');

        act(() => {
            fireEvent.click(fnButton);
        });

    });

    test('Debe renderizarse correctamente con estilos centrado', () => {
        render(<ButtonTypeA centrado />);

        const fnButton = screen.getByTestId('button_type_a');

        act(() => {
            fireEvent.click(fnButton);
        });

    });

    test('Debe renderizarse correctamente con estilos centrado y submit', () => {
        render(<ButtonTypeA centrado={true} submitBtn={() => { }} />);

        const fnButton = screen.getByTestId('button_type_a');

        act(() => {
            fireEvent.click(fnButton);
        });

    });

    test('Debe renderizarse correctamente con onMouseLeave y onMouseEnter', () => {
        render(<ButtonTypeA />);

        const fnButton = screen.getByTestId('button_type_a');

        act(() => {
            fireEvent.mouseEnter(fnButton);
        });

        act(() => {
            fireEvent.mouseLeave(fnButton);
        });

    });

});