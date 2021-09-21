import React from "react";
import './Input.scss';
import PropTypes from "prop-types";

function Input({placeholder, label, value, handleChange, disabled,clear}) {

    const handleChangeInputValue = event => {
        handleChange(event.target.value);
    }

    return (
        <div className="form_line">
            <div className="form_label">
                {label}
            </div>
            <div className="form_name">
                <input type="text"
                       value={value}
                       onChange={handleChangeInputValue}
                       className="form_input"
                       placeholder={placeholder}
                       disabled={disabled}
                />
                <button onClick={clear} className="form_button">&#215;</button>
            </div>
        </div>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    disabled: PropTypes.bool,
    clear: PropTypes.func,
}

export default Input;