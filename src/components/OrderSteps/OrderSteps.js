import React from 'react';
import './OrderSteps.scss';
import classNames from "classnames";
import steps from "../../assets/data/steps";
import {setStep} from "../../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";


function OrderSteps() {
    const dispatch = useDispatch();
    const step = useSelector(state => state.step);

    const setStepChange = step => {
        dispatch(setStep(step));
    };

    return (
        <nav className="steps">
            {steps.map((link) => (
                <a  className={classNames("steps_link", (link.id === step) ? "active" : (link.id < step) ? "filled" : null)}
                    key={link.id} onClick={()=>setStepChange(link.id)} >{link.name}</a>
            ))}
        </nav>
    )
}

export default OrderSteps;