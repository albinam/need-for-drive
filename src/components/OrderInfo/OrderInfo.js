import React from "react";
import "./OrderInfo.scss";
import '../../styles/buttons.scss';
import OrderInfoItem from "./OrderInfoItem/OrderInfoItem";

function OrderInfo() {
    return (
        <div className="order_info_container">
            <div className="order_info">
                <div className="order_info_title">Ваш заказ:</div>
                <ul className="order_info_items">
                    <OrderInfoItem value="Ульяновск, Нариманова 42" element="Пункт выдачи"/>
                </ul>
                <div className="order_info_price">Цена: от 8 000 до 12 000 &#8381;</div>
                <button className="content_button">Выбрать модель</button>
            </div>
        </div>
    )
}

export default OrderInfo;
