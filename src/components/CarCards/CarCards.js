import React from 'react';
import './CarCards.scss';
import Card from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {setCar} from "../../redux/actions/actions";
import PropTypes from "prop-types";

function CarCards({cars}) {

    const dispatch = useDispatch();
    const carInfo = useSelector(state => state.order.car);

    const handleClick = (car) => {
        dispatch(setCar(car));
    };

    return (
        <div className="cards-container">
            {cars.map(car => {
                return (
                    <Card key={car.id} card={car} selected={(carInfo)?carInfo.id:null} handleClick={handleClick}/>
                )
            })}
                </div>
                );
            }
CarCards.propTypes = {
    cars: PropTypes.array
}
export default CarCards;