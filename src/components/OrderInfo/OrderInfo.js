import React from "react";
import "./OrderInfo.scss";
import '../../styles/buttons.scss';
import OrderInfoItem from "./OrderInfoItem/OrderInfoItem";
import PropTypes from "prop-types";
import stepsButtons from "../../assets/data/stepsButtons";
import {useDispatch, useSelector} from "react-redux";
import {setStep} from "../../redux/actions/actions";
import {disabled} from "../../assets/utils/utils";
import classNames from "classnames";

function OrderInfo({setOrderConfirmation}) {
    const step = useSelector(state => state.step);
    const order = useSelector(state => state.order);
    const dispatch = useDispatch();
    const disabledButton = (disabled(step + 1, order)) ? 'disabled' : null;

    const setStepChange = step => {
        dispatch(setStep(step));
    };

    const cityPointInfo = () => {
        let info = null;
        if (order.city) {
            info = order.city;
            if (order.point) {
                info = order.city + ", " + order.point;
            }
        }
        return info;
    }

    return (
        <div className="order_info_container">
            <div className="order_info">
                <div className="order_info_title">Ваш заказ:</div>
                <ul className="order_info_items">
                    <OrderInfoItem value={cityPointInfo()} element="Пункт выдачи"/>
                    <OrderInfoItem value={order.car.name} element="Модель"/>
                    <OrderInfoItem value={order.color} element="Цвет"/>
                    <OrderInfoItem value={order.rentDates.dateTo} element="Длительность аренды"/>
                    <OrderInfoItem value={(order.tariff) ? (order.tariff.split(",")[0]) : null} element="Тариф"/>
                    {order.additions.map(
                            (service => {
                                return (
                                    <OrderInfoItem key={service} value="Да" element={service.split(",")[0]}/>
                                )
                            }))}
                </ul>
                <div className="order_info_price">Цена: {order.price} &#8381;</div>
                {(stepsButtons[step].id < 3) ?
                    <button onClick={() => setStepChange(stepsButtons[step].id + 1)}
                            className={classNames("content_button", disabledButton)}
                            disabled={disabled(step + 1, order)}>{stepsButtons[step].buttonName}</button>
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
