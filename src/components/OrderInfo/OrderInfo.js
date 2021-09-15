import React from "react";
import "./OrderInfo.scss";
import '../../styles/buttons.scss';
import OrderInfoItem from "./OrderInfoItem/OrderInfoItem";
import PropTypes from "prop-types";
import stepsButtons from "../../assets/data/stepsButtons";
import {useDispatch, useSelector} from "react-redux";
import {setStep} from "../../redux/actions/actions";

function OrderInfo({setOrderConfirmation}) {
    const step = useSelector(state => state.step);
    const order = useSelector(state => state.order);
    const dispatch = useDispatch();

    const setStepChange = step => {
        dispatch(setStep(step));
    };

    return (
        <div className="order_info_container">
            <div className="order_info">
                <div className="order_info_title">Ваш заказ:</div>
                <ul className="order_info_items">
                    <OrderInfoItem value={order.city+", "+order.point} element="Пункт выдачи"/>
                    <OrderInfoItem value={order.car} element="Модель"/>
                    <OrderInfoItem value={order.color} element="Цвет"/>
                    <OrderInfoItem value={order.rentDates.dateTo} element="Длительность аренды"/>
                    <OrderInfoItem value={order.tariff} element="Тариф"/>
                    {order.additions.map(
                        (service => {
                            return (
                                <OrderInfoItem key ={service} value="Да" element={service}/>
                            )
                        }))}
                </ul>
                <div className="order_info_price">Цена: {order.price} &#8381;</div>
                {(stepsButtons[step].id < 3)?
                <button onClick={() => setStepChange(stepsButtons[step].id + 1)}
                        className="content_button">{stepsButtons[step].buttonName}</button>
                    :
                    <button onClick={() => setOrderConfirmation(true)} className="content_button">Заказать</button>}
            </div>
        </div>
    )
}

OrderInfo.propTypes = {
    setOrderConfirmation: PropTypes.func
}

export default OrderInfo;
