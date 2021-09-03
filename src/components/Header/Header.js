import React from 'react';
import './Header.scss';
import '../../styles/buttons.scss'
import {ReactComponent as CityLogo} from '../../assets/images/icons/city.svg';
import PropTypes from "prop-types";

const city = "Ульяновск";

function Header() {
    return (
        <header className="header">
            <div className="header_title">Need for drive</div>
            <div className="header_city">
                <div className="header_city_logo">
                    <CityLogo/>
                </div>
                <div className="header_city_text">{city}</div>
            </div>
        </header>
    );
}
Header.propTypes = {
    city: PropTypes.string,
}

export default Header;