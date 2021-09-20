import React from 'react';
import './Total.scss';
import {useSelector} from "react-redux";
import cars from "../../assets/data/cars";


function Total() {
    const order = useSelector(state => state.order);
    return (
        <div className="total">
            <div className="total_description">
                <div className="total_car">{order.car.name}</div>
                <div className="total_number">K 761 HA 73</div>
                <div className="total_info">

                    <div className="total_text_bold">Топливо&nbsp;</div>
                    <div className="total_text_light">100%</div>
                </div>
                <div className="total_info">
                    <div className="total_text_bold">Доступна с&nbsp;</div>
                    <div className="total_text_light">{order.dateFrom.format("DD.MM.YYYY HH:mm")}</div>
                </div>
            </div>
            <div className="total_image">
                <img src={cars[order.car.id].img} alt={order.car.name}/>
            </div>
        </div>
    );
}

export default Total;