//Dependencies
import React from 'react';
//Testing-library
import { fireEvent, render, screen } from '@testing-library/react';
//utils-test-dom
import { act } from 'react-dom/test-utils';
//Component
import { GoNextLink } from '../../../src/components/molecules/goNextLink/GoNextLink';

//mocks context
jest.mock('../../../src/context/NavigateAppContext', () => ({
    NavigateAppContext: {
        goNext: jest.fn(),
    }
}));
//mocks react-router-dom
jest.mock('react-router-dom', () => ({
    Link: 'Link',
}));
//mocks functionNavigate
const functionNavigate = jest.fn();

describe('Pruebas en <GoNextLink />', () => {

    test('Debe renderizarse correctamente', () => {

        // Mock the useContext hook
        const mockContext = {
            goNext: jest.fn()
        };
        jest.spyOn(React, 'useContext').mockReturnValue(mockContext);

        const { baseElement } = render(<GoNextLink functionNavigate={functionNavigate} />);
        expect(baseElement).toMatchSnapshot();
    });

    test('Debe renderizarse correctamente con estilos', () => {
        render(<GoNextLink style="test" />);

        const fnLink = screen.getByTestId('go_next_link');

        act(() => {
            fireEvent.click(fnLink);
        });

    });

});