import React from 'react';
import { render } from '@testing-library/react';
import { CustomAlert } from '../../../src/components/molecules/customAlert/customAlert';
//mocks svg
jest.mock('../../../src/assets/icons/IconProvider', () => ({
    Icons: {
        IconAlertWhite: 'IconAlertWhite',
    }
}));
describe('Pruebas en <CustomAlert />', () => {

    test('Debe renderizarse correctamente', () => {
        const { baseElement } = render(<CustomAlert message="Test" type="success" />);
        expect(baseElement).toMatchSnapshot();
    });

});


