import { useState } from 'react'

export const ButtonTypeA = ({
    text = "defaultText",
    action = null,
    width = "264px",
    bgColor = "#f7f9f7",
    bgHvColor = "#FFFFFF",
    txColor = "#627173",
    bdType = "solid",
    bdWidth = "1px",
    bdColor = "#627173",
    fontSize = "18px",
    submitBtn = false,
    centrado = false,
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