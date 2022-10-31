import React from "react";
import PropTypes from "prop-types";
import "./OrderConfirmation.scss";
import '../../styles/buttons.scss';
import {useDispatch, useSelector} from "react-redux";
import {setStep} from "../../redux/actions/actions";
import {placeOrder} from "../../assets/utils/orderServices";
import {useHistory} from "react-router-dom";

function OrderConfirmation({setOrderConfirmation}) {
    const dispatch = useDispatch();
    const order = useSelector(state => state.order);
    const api = useSelector(state => state.apiInfo);
    const history = useHistory();

    async function handleClickPlaceOrder(){
        const orderId = await placeOrder(order,api.status[0]);
        history.push(`/order/${orderId}`)
    }

    return (
        <div className="order_confirmation_tab">
            <div className="order_confirmation_tab_confirm">Подтвердить заказ</div>
            <div className="order_confirmation_tab_buttons">
                <button className="slider-button light-green" onClick={handleClickPlaceOrder}>Подтвердить</button>
                <button className="slider-button pink" onClick={() => {dispatch(setStep(3));setOrderConfirmation(false)}}>Вернуться</button>
            </div>
        </div>
    )
}

OrderConfirmation.propTypes = {
    setOrderConfirmation: PropTypes.func
}
export default OrderConfirmation;