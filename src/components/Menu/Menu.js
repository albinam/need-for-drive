import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import './Menu.scss'
import {ReactComponent as Telegram} from '../../assets/images/icons/telegram.svg'
import {ReactComponent as Facebook} from '../../assets/images/icons/facebook.svg'
import {ReactComponent as Instagram} from '../../assets/images/icons/instagram.svg'

const menuItems = ['Парковка', 'Страховка', 'Бензин', 'Обслуживание'];
const icons = [<Telegram key ="telegram"/>, <Facebook key ="facebook"/>, <Instagram key="instagram"/>];

function Menu() {
    const [langState, setLang] = useState("Рус");
    const [menuState, setMenuState] = useState(false);
    const openedMenu = menuState ? "open" : null;

    useEffect(() => {
        if(openedMenu){
            document.body.style.overflow='hidden';
        }
        else{
            document.body.style.overflow='auto';
        }
    });

    return (
        <div className={classNames("hamburger-menu", openedMenu)}>
            <div
                className={classNames("hamburger-menu_button", openedMenu)}
                onClick={() => setMenuState(!openedMenu)}
            >
                <div className="one"/>
                <div className="two"/>
                <div className="three"/>
            </div>
            <button
                className={classNames("hamburger-menu_lang", openedMenu)}
                onClick={() => setLang(langState ==="Eng" ? "Рус" : "Eng")}
            >{langState}
            </button>
            <div
                className={classNames("hamburger-menu_full", openedMenu)}>
                {menuItems.map(item =>
                    <a
                        key={item}
                        href='#'
                        className={classNames("hamburger-menu_link", openedMenu)}
                    >{item}</a>)}
                <div className={classNames("hamburger-menu_icons", openedMenu)}>
                    {icons.map(icon =>
                        <a
                            key={icon}
                            href='#'
                            className={classNames("hamburger-menu_icon", openedMenu)}
                        > {icon}
                        </a>)}
                </div>
            </div>
        </div>
    );
}

export default Menu;