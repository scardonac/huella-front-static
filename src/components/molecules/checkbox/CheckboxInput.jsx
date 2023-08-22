import { useState } from 'react';

export const CheckboxInput = ({ label, name, setValue, styleDivTrue = '', styleDivFalse = null, styleLabel = '', isChecked }) => {
    const [isCheckedState, setIsCheckedState] = useState(isChecked);

    const toggleCheckbox = () => {
        setIsCheckedState(!isCheckedState);
        setValue(name, !isCheckedState);
    };

    return (
        <div className={isCheckedState ? styleDivTrue : (styleDivFalse || styleDivTrue)}>
            <div
                className={`custom-checkbox ${isCheckedState ? 'checked' : ''}`}
                onClick={toggleCheckbox}
            ></div>
            <label className={styleLabel} onClick={toggleCheckbox}>
                {label}
            </label>
        </div>
    );
};
