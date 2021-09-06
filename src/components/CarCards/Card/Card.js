import React from 'react';
import './Card.scss';
import PropTypes from "prop-types";
import classNames from "classnames";

function Card({card, handleClick, selected}) {

    return (
        <div  className={classNames("card", (selected === card.id) ? "active" :null)} onClick={() => handleClick(card.id)}>
            <div className="card_title">{card.title}</div>
            <div className="card_price">{card.price}</div>
            <div className="card_image">
                <img src={card.img} alt={card.title}/>
            </div>
        </div>
    );
}

Card.propTypes = {
    card:  PropTypes.array,
    handleClick: PropTypes.func,
    selected: PropTypes.number
}
export default Card;