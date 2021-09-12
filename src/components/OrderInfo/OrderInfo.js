import React from "react";
import "./OrderInfo.scss";
import '../../styles/buttons.scss';
import OrderInfoItem from "./OrderInfoItem/OrderInfoItem";
import PropTypes from "prop-types";

function OrderInfo({order, setStepChange, button}) {
    return (
        <div className="order_info_container">
            <div className="order_info">
                <div className="order_info_title">Ваш заказ:</div>
                <ul className="order_info_items">
                    <OrderInfoItem value={order[0].point} element="Пункт выдачи"/>
                    <OrderInfoItem value={order[0].car} element="Модель"/>
                    <OrderInfoItem value={order[0].color} element="Цвет"/>
                    <OrderInfoItem value={order[0].rentDates} element="Длительность аренды"/>
                    <OrderInfoItem value={order[0].tariff} element="Тариф"/>
                    {order[0].additional.map(
                        (service => {
                            return (
                                <OrderInfoItem key ={service} value="Да" element={service}/>
                            )
                        }))}
                </ul>
                <div className="order_info_price">Цена: {order[0].price} &#8381;</div>
                <button onClick={() => setStepChange(button.id + 1)}
                        className="content_button">{button.buttonName}</button>
            </div>
        </div>
    )
}

OrderInfo.propTypes = {
    setStepChange: PropTypes.func,
    button: PropTypes.object,
    order: PropTypes.array
}

export default OrderInfo;
