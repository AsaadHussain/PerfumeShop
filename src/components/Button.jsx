import React from "react";
import './Button.css'
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    onClick,
    type,
    buttonStyle,
    buttonSize,
    path
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : STYLES[0];

    return (
        <Link to={path} className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSizes}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    );
}