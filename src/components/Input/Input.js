import React, {useState} from "react";
import './Input.scss';
import PropTypes from "prop-types";

function Input({placeholder, label, type, value, handleChange, disabled,clear}) {
    const [inputType, setInputType] = useState("text");

    const focusHandler = () => {
        if (type === "datetime-local") {
            setInputType("datetime-local");
        } else {
            setInputType("text");
        }
    }

    const handleChangeInputValue = event => {
        handleChange(event.target.value);
    }

    return (
        <div className="form_line">
            <div className="form_label">
                {label}
            </div>
            <div className="form_name">
                <input type={inputType}
                       value={value}
                       onChange={handleChangeInputValue}
                       onBlur={() => setInputType("text")}
                       onFocus={() => focusHandler()}
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
    type: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    disabled: PropTypes.string,
    clear: PropTypes.func,
}

export default Input;