import React from 'react';
import './LocationMap.scss';
import map from "../../../assets/images/Location.png";

function LocationMap() {

    return (
        <div className="location-map">

                <div className="location-map_label">Выбрать на карте:</div>
               <img src={map} alt="map"/>
        </div>
    );
}

export default LocationMap;