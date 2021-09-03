import React from 'react';
import './OrderSteps.scss';
import classNames from "classnames";
import PropTypes from "prop-types";
import steps from "../../assets/data/steps";

function OrderSteps({step, setStepChange}) {

    return (
        <nav className="steps">
            {steps.map((link) => (
                <a  className={classNames("steps_link", (link.id === step) ? "active" : (link.id < step) ? "filled" : null)}
                    key={link.id} onClick={()=>setStepChange(link.id)} >{link.name}</a>
            ))}
        </nav>
    )
}
OrderSteps.propTypes = {
    step: PropTypes.array,
    setStepChange: PropTypes.func
}

export default OrderSteps;