import { useState } from 'react';

export const CheckboxInput = ({ label, name, setValue, styleDivTrue = '', styleDivFalse = null, styleLabel = '', isChecked }) => {
    const [isCheckedState, setIsCheckedState] = useState(isChecked);

    const toggleCheckbox = () => {
        setIsCheckedState(!isCheckedState);
        setValue(name, !isCheckedState);
    };

    return (
        <div
            className={isCheckedState ? styleDivTrue : (styleDivFalse || styleDivTrue)}
            id='checkbox_div'
            data-testid="checkbox_div"
        >
            <div
                className={`custom-checkbox ${isCheckedState ? 'checked' : ''}`}
                onClick={toggleCheckbox}
                id='checkbox_input'
                data-testid="checkbox_input"
            ></div>
            <label className={styleLabel} onClick={toggleCheckbox} htmlFor={name}>
                {label}
            </label>
        </div>
    );
};
