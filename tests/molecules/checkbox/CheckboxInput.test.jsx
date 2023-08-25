import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { CheckboxInput } from "../../../src/components/molecules/checkbox/CheckboxInput";
import { act } from 'react-dom/test-utils';

describe('Pruebas en <CheckboxInput />', () => {

    test('Debe renderizarse correctamente', () => {
        const { baseElement } = render(<CheckboxInput label="Test" name="test" setValue={() => { }} isChecked={false} />);
        expect(baseElement).toMatchSnapshot();
    });

    test('Debe renderizarse correctamente con estilos', () => {
        render(<CheckboxInput label="Test" name="test" setValue={() => { }} isChecked={false} styleDivTrue="testTrue" styleDivFalse="testFalse" styleLabel="test" />);

        const fnCheckbox = screen.getByTestId('checkbox_input');
        const fnDiv = screen.getByTestId('checkbox_div');

        act(() => {
            fireEvent.click(fnCheckbox);
        });

        act(() => {
            expect(fnCheckbox.getAttribute('class')).toMatch('custom-checkbox checked');
            expect(fnDiv.getAttribute('class')).toMatch('testTrue');
        });
    });

});
