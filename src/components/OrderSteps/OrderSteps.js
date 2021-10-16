import React from 'react';
import './OrderSteps.scss';
import classNames from "classnames";
import steps from "../../assets/data/steps";
import {setStep} from "../../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {disabled} from "../../assets/utils/utils";


function OrderSteps() {
    const dispatch = useDispatch();
    const step = useSelector(state => state.step);
    const order = useSelector(state => state.order);

    const setStepChange = step => {
        dispatch(setStep(step));
    };

    return (
        <nav className="steps">
            {(order.orderStatusId)?
                <div className="order_text">Заказ номер {order.id}</div>:
                steps.map((link) => (
                <button className={classNames("steps_link", (link.id === step) ? "active" : (link.id < step) ? "filled" : null)}
                    key={link.id} onClick={()=>setStepChange(link.id)} disabled={disabled(link.id,order)} >{link.name}</button>
            ))}
        </nav>
    )
}

export default OrderSteps;