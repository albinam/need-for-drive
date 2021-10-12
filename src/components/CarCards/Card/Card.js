import React from 'react';
import './Card.scss';
import PropTypes from "prop-types";
import classNames from "classnames";

function Card({card, handleClick, selected}) {
    const baseUrl="https://api-factory.simbirsoft1.com";

    return (
        <div  className={classNames("card", (selected === card.id) ? "active" :null)} onClick={() => handleClick(card)}>
            <div className="card_title">{card.name}</div>
            <div className="card_price">{card.priceMin.toLocaleString()} - {card.priceMax.toLocaleString()} &#8381;</div>
            <div className="card_image">
                <img src={
                    card.thumbnail.path.includes('base64')
                        ? card.thumbnail.path
                        : (baseUrl + card.thumbnail.path)
                } alt={card.name}/>
            </div>
        </div>
    );
}

Card.propTypes = {
    card:  PropTypes.object,
    handleClick: PropTypes.func,
    selected: PropTypes.number
}
export default Card;