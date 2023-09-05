//Dependencies
import React from 'react';
import { useForm } from 'react-hook-form';
//Testing-library
import { fireEvent, render, screen } from '@testing-library/react';
//utils-test-dom
import { act } from 'react-dom/test-utils';
//Component
import { TextInputController } from '../../../src/components/molecules/inputs/TextInputController';

//mocks svg
jest.mock('../../../src/assets/icons/IconProvider', () => ({
    Icons: {
        ViewPassword: 'ViewPassword',
        HidePassword: 'HidePassword',
    }
}));

// mocks react-hook-form
jest.mock('react-hook-form', () => ({
    useForm: () => ({
        register: jest.fn(),
        errors: {},
        control: {
            register: jest.fn(),
            errors: {},
            defaultValue: '',
        },
    }),
}));


describe('Pruebas en <TextInputController />', () => {

    const { control } = useForm(); // Configura un formulario

    test('entro al test', () => {
        expect(true).toBe(true);
    });

    // test('Debe renderizarse correctamente', () => {

    //     const { baseElement } = render(<TextInputController control={control} label={'test'} name={'test'} />);
    //     expect(baseElement).toMatchSnapshot();
    // });

    // test('Debe renderizarse correctamente con estilos', () => {

    //     render(<TextInputController control={control} label={'test'} name={'test'} style="test" />);

    //     const fnInput = screen.getByTestId('text_input_controller');

    //     act(() => {
    //         fireEvent.click(fnInput);
    //     });

    // });

});