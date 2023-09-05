import { useState } from 'react'

export const ButtonTypeA = ({
    action = null,
    bdColor = "#627173",
    bdType = "solid",
    bdWidth = "1px",
    bgColor = "#f7f9f7",
    bgHvColor = "#FFFFFF",
    centrado = false,
    fontSize = "18px",
    styles = '',
    submitBtn = false,
    text = "defaultText",
    txColor = "#627173",
    width = "264px",
}) => {

    const buttonStyle = {
        border: `${bdWidth} ${bdType} ${bdColor}`,
        backgroundColor: bgColor,
        color: txColor,
        width: width,
        fontSize: fontSize,
        padding: "7px 0px",
        borderRadius: "10px",
        fontWeight: "bold",
        margin: centrado ? "0 auto" : "inehirt",
        height: "fit-content",
        ...styles
    };

    const hoverStyle = {
        backgroundColor: bgHvColor
    };

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <button
            id='button_type_a'
            data-testid="button_type_a"
            className='ButtonTypeA'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
            onClick={action}
            type={submitBtn ? "submit" : "button"}
        >{text}
        </button>
    )
}