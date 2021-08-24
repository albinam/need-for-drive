import React from 'react';
import './MainPageContent.scss';
import '../../styles/buttons.scss'
import {ReactComponent as CityLogo} from '../../assets/images/icons/city.svg';

function MainPageContent() {

    const city = "Ульяновск";

    return (
        <div className="content-container">
            <header className="header">
                <div className="header_title">Need for drive</div>
                <div className="header_city">
                    <div className="header_city_logo">
                        <CityLogo/>
                    </div>
                    <div className="header_city_text">{city}</div>
                </div>
            </header>
            <div className="content">
                <div className="content_title">
                    <div className="content_title_1">Каршеринг</div>
                    <div className="content_title_2">Need for drive</div>
                </div>
                <div className="content_subtitle">Поминутная аренда авто твоего города</div>
                <button className="content_button"> Забронировать</button>
            </div>
            <footer className="footer">
                <div className="footer_copyright">&copy; 2016-2019 &laquo;Need for drive&raquo;</div>
                <a className="footer_phone" href="tel:8 (495) 234-22-44">8 (495) 234-22-44</a>
            </footer>
        </div>
    );
}


export default MainPageContent;