import React from 'react';
import './Total.scss';
import {useSelector} from "react-redux";

function Total() {
    const order = useSelector(state => state.order);
    const baseUrl="https://api-factory.simbirsoft1.com";
    return (
        <div className="total">
            <div className="total_description">
                <div className="total_car">{order.car.name}</div>
                <div className="total_number">{order.car.number}</div>
                <div className="total_info">
                    <div className="total_text_bold">Топливо&nbsp;</div>
                    <div className="total_text_light"> {order.car.tank}%</div>
                </div>
                <div className="total_info">
                    <div className="total_text_bold">Доступна с&nbsp;</div>
                    <div className="total_text_light">{order.dateFrom.format("DD.MM.YYYY HH:mm")}</div>
                </div>
            </div>
            <div className="total_image">
                <img src={
                    order.car.thumbnail.path.includes('base64')
                        ? order.car.thumbnail.path
                        : (baseUrl + order.car.thumbnail.path)
                } alt={order.car.name}/>
            </div>
        </div>
    );
}

export default Total;