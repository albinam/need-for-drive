import React from "react";
import PropTypes from "prop-types";
import "./OrderConfirmation.scss";
import '../../styles/buttons.scss';
import {useDispatch} from "react-redux";
import {setStep} from "../../redux/actions/actions";

function OrderConfirmation({setOrderConfirmation}) {
    const dispatch = useDispatch();
    return (
        <div className="order_confirmation_tab">
            <div className="order_confirmation_tab_confirm">Подтвердить заказ</div>
            <div className="order_confirmation_tab_buttons">
                <button className="slider-button light-green">Подтвердить</button>
                <button className="slider-button pink" onClick={() => {dispatch(setStep(3));setOrderConfirmation(false)}}>Вернуться</button>
            </div>
        </div>
    )
}

OrderConfirmation.propTypes = {
    setOrderConfirmation: PropTypes.func
}
export default OrderConfirmation;