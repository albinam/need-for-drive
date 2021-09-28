import React, {useEffect} from 'react';
import './LocationMap.scss';
import GoogleMapReact from 'google-map-react';
import {useSelector} from "react-redux";
import {getPoints} from "../../../assets/utils/locationApi";

function LocationMap() {
    const position = useSelector(state => state.userLocation);
    const key = process.env.REACT_APP_MAP_API_KEY;
    const defaultProps = {
        center: {
            lat: position.latLon.latitude,
            lng: position.latLon.longitude
        },
        zoom: 11
    };

    useEffect(() => {
        getPoints().then(result =>
            console.log(result)
        );
    })

    return (
        <div className="location-map">
            <div className="location-map_label">Выбрать на карте:</div>
            <div className="location-map_map">
                <GoogleMapReact
                    bootstrapURLKeys={{key: key}}
                    center={defaultProps.center}
                    defaultZoom={defaultProps.zoom}>
                    <Marker lat={position.latLon.latitude} lng={position.latLon.longitude}/>
                </GoogleMapReact>
            </div>
        </div>
    );
}

const Marker = () => {
    return <div className="location-map_marker"/>
}

export default LocationMap;