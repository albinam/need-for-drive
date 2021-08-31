import React from "react";
import './Input.scss';
import PropTypes from "prop-types";

function Input({placeholder}) {

    return (
        <input type="text" className="location_form_input" placeholder={placeholder}/>
    )
}
Input.propTypes = {
    placeholder: PropTypes.string
}

export default Input;