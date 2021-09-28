import React, { useEffect} from 'react';
import Menu from "../../components/Menu/Menu";
import MainPageContent from "../../components/MainPageContent/MainPageContent";
import "./Main.scss"
import Slider from "../../components/Slider/Slider";
import {useDispatch} from "react-redux";
import {usePosition} from "../../assets/utils/usePosition";
import {setLatLon} from "../../redux/actions/actions";

function Main() {
    const dispatch = useDispatch();

    useEffect(() => {
        usePosition().then(
            position => dispatch(setLatLon(position.coords.latitude,position.coords.longitude)))
    })

    return (
        <div className="main">
            <Menu/>
            <MainPageContent/>
            <Slider/>
        </div>
    );
}

export default Main;