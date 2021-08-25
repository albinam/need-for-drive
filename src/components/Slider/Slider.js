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
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={classNames("slide", slideIndex === index ? "active" : null)}
                    >
                        <div className="gradient">
                            <img
                                src={obj.img}
                            />
                        </div>
                        <div className="slide_content">
                            <div className="slide_content_title">{obj.title}</div>
                            <p className="slide_content_subtitle">{obj.subtitle}</p>
                            <button className={classNames("slider-button", obj.color)}>Подробнее</button>
                        </div>

                    </div>
                )
            })}
            <Arrow moveSlide={nextSlide} direction={"next"}/>
            <Arrow moveSlide={prevSlide} direction={"prev"}/>
            <div className="container-dots">
                {Array.from({length: dataSlider.length}).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => moveDot(index)}
                        className={classNames("dot", slideIndex === index ? "active" : null)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider