import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { GoBackLink } from '../../../src/components/molecules/goBackLink/GoBackLink';
//mocks svg
jest.mock('../../../src/assets/icons/IconProvider', () => ({
    Icons: {
        IconAlertWhite: 'IconAlertWhite',
        AddDocumentBlackIcon: 'AddDocumentBlackIcon',
    }
}));
jest.mock('../../../src/assets/Illustrations/IllustrationProvider', () => ({
    Illustrations: {
        Add_OtherCategory_Azul: 'Add_OtherCategory_Azul',
    }
}));
//mocks context
jest.mock('../../../src/context/NavigateAppContext', () => ({
    NavigateAppContext: {
        goBack: jest.fn(),
    }
}));

describe('Pruebas en <GoBackLink />', () => {

    test('Debe renderizarse correctamente', () => {

        // Mock the useContext hook
        const mockContext = {
            goBack: jest.fn()
        };
        jest.spyOn(React, 'useContext').mockReturnValue(mockContext);

        const { baseElement } = render(<GoBackLink />);
        expect(baseElement).toMatchSnapshot();
    });

    test('Debe renderizarse correctamente con estilos', () => {
        render(<GoBackLink style="test" />);

        const fnLink = screen.getByTestId('go_back_link');

        act(() => {
            fireEvent.click(fnLink);
        });

    });

});