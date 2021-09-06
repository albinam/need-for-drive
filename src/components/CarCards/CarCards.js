import React, {useState} from 'react';
import './CarCards.scss';
import cars from "../../assets/data/cars";
import Card from "./Card/Card";

function CarCards() {
    const [selected,setSelected] = useState(0);
    const handleClick = car => setSelected(car);
    return (
        <div className="cards-container">
            {cars.map(car => {
                return (
                    <Card key={car.id} card={car} selected={selected} handleClick={handleClick}/>)
            })}
        </div>
    );
}

export default CarCards;