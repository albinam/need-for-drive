import React from 'react';
import './Total.scss';
import car1 from '../../assets/images/cars/car1.png'

const car = {
    name: "Hyndai, i30 N",
    number: "K 761 HA 73",
    fuel: "100%",
    available: "12.06.2019 12:00",
    img: car1,
};

function Total() {

    return (
        <div className="total">
            <div className="total_description">
                <div className="total_car">{car.name}</div>
                <div className="total_number">{car.number}</div>
                <div className="total_info">
                    <div className="total_text_bold">Топливо&nbsp;</div>
                    <div className="total_text_light">{car.fuel}</div>
                </div>
                <div className="total_info">
                    <div className="total_text_bold">Доступна с&nbsp;</div>
                    <div className="total_text_light">{car.available}</div>
                </div>
            </div>
            <div className="total_image">
                <img src={car.img} alt={car.name}/>
            </div>
        </div>
    );
}

export default Total;