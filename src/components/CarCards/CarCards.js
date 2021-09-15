import React, {useState} from 'react';
import './CarCards.scss';
import cars from "../../assets/data/cars";
import Card from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {setCar} from "../../redux/actions/actions";

function CarCards() {

    const dispatch = useDispatch();
    const carInfo = useSelector(state => state.order.car);
    const [selected,setSelected] = useState(carInfo.id)

    const handleClick = (id,name) => {
        dispatch(setCar(id, name));
        setSelected(id);
    };

    return (
        <div className="cards-container">
            {cars.map(car => {
                return (
                    <Card key={car.id} card={car} selected={selected} handleClick={handleClick}/>
                )
            })}
                </div>
                );
            }

export default CarCards;