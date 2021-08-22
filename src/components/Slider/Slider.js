import React, {useState} from 'react'
import dataSlider from '../../assets/data/slider';
import Arrow from './Arrow';
import './Slider.scss';
import '../../styles/buttons.scss';
import classNames from 'classnames';

function Slider() {

    const [slideIndex, setSlideIndex] = useState(0)

    const nextSlide = () => {
        if (slideIndex === 3) {
            setSlideIndex(0)
        } else {
            setSlideIndex(slideIndex + 1)
        }
    }

    const prevSlide = () => {
        if (slideIndex === 0) {
            setSlideIndex(3)
        } else {
            setSlideIndex(slideIndex - 1)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">

            <div
                key={dataSlider[slideIndex].id}
                className="slide"
            >
                <img
                    src={dataSlider[slideIndex].img} alt="slider image"
                />
                <div className="slide_content">
                    <div className="slide_content_title">{dataSlider[slideIndex].title}</div>
                    <p className="slide_content_subtitle">{dataSlider[slideIndex].subtitle}</p>
                    <button className={classNames("slider-button", dataSlider[slideIndex].color)}>Подробнее</button>
                </div>
            </div>
            <Arrow moveSlide={nextSlide} direction={"next"}/>
            <Arrow moveSlide={prevSlide} direction={"prev"}/>
            <div className="container-dots">
                {Array.from({length: dataSlider.length}).map((item, index) => (
                    <div
                        onClick={() => moveDot(index)}
                        className={classNames("dot", slideIndex === index ? "active" : null)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider