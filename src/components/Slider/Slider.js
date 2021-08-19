import React, {useState} from 'react'
import dataSlider from '../../assets/data/slider';
import Arrow from './Arrow';
import './Slider.scss';
import '../../styles/buttons.scss';
import classNames from 'classnames';

function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
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
                        className={classNames("slide", slideIndex === index + 1 ? "active" : null)}
                    >
                        <div className="gradient">
                            <img
                                src={obj.img} alt ="slider image"
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
                        onClick={() => moveDot(index + 1)}
                        className={classNames("dot", slideIndex === index + 1 ? "active" : null)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider