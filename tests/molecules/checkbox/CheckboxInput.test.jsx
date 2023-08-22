import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CheckboxInput } from "../../../src/components/molecules/checkbox/CheckboxInput";

describe('Pruebas en <CheckboxInput />', () => {

    test('renders CheckboxInput component with default state', () => {
        // Arrange
        const setValue = jest.fn();
        const name = 'checkbox';
        const label = 'Label Prueba';
        const styleDivTrue = 'div-true';
        const styleDivFalse = 'div-false';
        const styleLabel = 'label';
        const isChecked = false;

        // Act
        const { container, getByLabelText } = render(
            <CheckboxInput
                label={label}
                name={name}
                setValue={setValue}
                styleDivTrue={styleDivTrue}
                styleDivFalse={styleDivFalse}
                styleLabel={styleLabel}
                isChecked={isChecked}
            />
        );
        const checkbox = getByLabelText(label);


        // Assert
        expect(checkbox.checked).toEqual(isChecked);

        // Act
        fireEvent.click(checkbox);

        // Assert
        expect(checkbox.checked).toBe(true);
        expect(setValue).toHaveBeenCalledWith(name, true);
    });

    // Tests that the checkbox is rendered with a label and the initial state is set correctly
    // it('should render checkbox with label and correct initial state', () => {
    //     // Arrange
    //     const label = 'Test Label';
    //     const name = 'testName';
    //     const setValue = jest.fn();
    //     const styleDivTrue = 'divTrue';
    //     const styleDivFalse = null;
    //     const styleLabel = '';
    //     const isChecked = true;

    //     // Act
    //     const { container, getByLabelText } = render(
    //         <CheckboxInput
    //             label={label}
    //             name={name}
    //             setValue={setValue}
    //             styleDivTrue={styleDivTrue}
    //             styleDivFalse={styleDivFalse}
    //             styleLabel={styleLabel}
    //             isChecked={isChecked}
    //         />
    //     );

    //     // Assert
    //     expect(screen.getByLabelText(label)).toBeInTheDocument();
    //     expect(screen.getByLabelText(label).checked).toBe(isChecked);
    // });

    // // Tests that the checkbox state changes when it is clicked
    // it('should change checkbox state when clicked', () => {
    //     // Arrange
    //     const label = 'Test Label';
    //     const name = 'testName';
    //     const setValue = jest.fn();
    //     const styleDivTrue = 'divTrue';
    //     const styleDivFalse = null;
    //     const styleLabel = '';
    //     const isChecked = true;

    //     render(
    //         <CheckboxInput
    //             label={label}
    //             name={name}
    //             setValue={setValue}
    //             styleDivTrue={styleDivTrue}
    //             styleDivFalse={styleDivFalse}
    //             styleLabel={styleLabel}
    //             isChecked={isChecked}
    //         />
    //     );

    //     // Act
    //     userEvent.click(screen.getByLabelText(label));

    //     // Assert
    //     expect(screen.getByLabelText(label).checked).toBe(!isChecked);
    // });

    // Tests that the checkbox value is passed to the parent component when it is changed
    // it('should pass checkbox value to parent component when changed', () => {
    //     // Arrange
    //     const label = 'Test Label';
    //     const name = 'testName';
    //     const setValue = jest.fn();
    //     const styleDivTrue = 'divTrue';
    //     const styleDivFalse = null;
    //     const styleLabel = '';
    //     const isChecked = true;

    //     render(
    //         <CheckboxInput
    //             label={label}
    //             name={name}
    //             setValue={setValue}
    //             styleDivTrue={styleDivTrue}
    //             styleDivFalse={styleDivFalse}
    //             styleLabel={styleLabel}
    //             isChecked={isChecked}
    //         />
    //     );

    //     // Act
    //     userEvent.click(screen.getByLabelText(label));

    //     // Assert
    //     expect(setValue).toHaveBeenCalledWith(name, !isChecked);
    // });
});
