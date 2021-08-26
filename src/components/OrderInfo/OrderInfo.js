import React from "react";
import "./OrderInfo.scss";
import '../../styles/buttons.scss';

function OrderInfo() {
    return (
        <div className="order_info_container">
        <div className="order_info">
            <div className="order_info_title">Ваш заказ:</div>
            <ul className="order_info_items">
                <li className="order_info_items_item">
                    <div className="order_info_items_item_element">Пункт выдачи</div>
                    <div className="order_info_items_item_dots"/>
                    <div className="order_info_items_item_value">Ульяновск, Нариманова 42</div>
                </li>
            </ul>
            <div className="order_info_price">Цена: от 8 000 до 12 000 &#8381;</div>
            <button className="content_button">Выбрать модель</button>
        </div>
        </div>
    )
}

export default OrderInfo;
