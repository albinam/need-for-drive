import React from "react";
import './Input.scss';
import PropTypes from "prop-types";

function Input({placeholder, label}) {

    return (
        <div className="location_form_line">
            <div className="location_form_label">
                {label}
            </div>
            <div className="location_form_name">
                <input type="text" className="location_form_input" placeholder={placeholder}/>
                <a className="location_form_button">&#215;</a>
            </div>
        </div>
    )
}
Input.propTypes = {
    placeholder: PropTypes.string,
    label:PropTypes.string
}

export default Input;