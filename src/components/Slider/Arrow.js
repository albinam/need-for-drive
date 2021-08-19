import rightArrow from '../../assets/images/slider/RightArrow.svg';
import leftArrow from '../../assets/images/slider/LeftArrow.svg';

function Arrow({direction, moveSlide}) {
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction === "next" ? rightArrow : leftArrow}/>
        </button>
    );
}

export default Arrow;