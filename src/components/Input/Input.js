import React, {useState} from "react";
import './Input.scss';
import PropTypes from "prop-types";

function Input({placeholder, label, type}) {
    const [inputType, setInputType] = useState("text");

    const focusHandler = () => {
        if (type === "datetime-local") {
            setInputType("datetime-local");
        } else {
            setInputType("text");
        }
    }

    return (
        <div className="form_line">
            <div className="form_label">
                {label}
            </div>
            <div className="form_name">
                <input type={inputType}  onBlur={() => setInputType("text")} onFocus={() => focusHandler()} className="form_input" placeholder={placeholder}/>
                <a className="form_button">&#215;</a>
            </div>
        </div>
    )
}
Input.propTypes = {
    placeholder: PropTypes.string,
    label:PropTypes.string,
    type:PropTypes.string
}

export default Input;