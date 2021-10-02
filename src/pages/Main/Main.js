import React from 'react';
import Menu from "../../components/Menu/Menu";
import MainPageContent from "../../components/MainPageContent/MainPageContent";
import "./Main.scss"
import Slider from "../../components/Slider/Slider";

function Main() {

    return (
        <div className="main">
            <Menu/>
            <MainPageContent/>
            <Slider/>
        </div>
    );
}

export default Main;