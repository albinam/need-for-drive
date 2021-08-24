import React from 'react';
import PropTypes from 'prop-types';
import rightArrow from '../../assets/images/slider/RightArrow.svg';

function Arrow({direction, moveSlide}) {
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={rightArrow}  className={direction === "next" ? "arrow_right" : "arrow_left"} alt="arrow"/>
        </button>
    );
}
Arrow.propTypes = {
    direction: PropTypes.string,
    moveSlide: PropTypes.func
}

export default Arrow;