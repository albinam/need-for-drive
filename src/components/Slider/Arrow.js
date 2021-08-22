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

export default Arrow;