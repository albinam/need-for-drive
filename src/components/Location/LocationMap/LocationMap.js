import React from 'react';
import './LocationMap.scss';
import GoogleMapReact from 'google-map-react';
import {useSelector} from "react-redux";
import {displayPoints} from "../../../assets/utils/getMarkers";

function LocationMap() {
    const position = useSelector(state => state.userLocation);
    const pointCoords = displayPoints();
    const key = process.env.REACT_APP_MAP_API_KEY;
    const defaultProps = {
        center: {
            lat: position.latLon.latitude,
            lng: position.latLon.longitude
        },
        zoom: 11
    };

    return (
        <div className="location-map">
            <div className="location-map_label">Выбрать на карте:</div>
            {console.log(pointCoords)}
            <div className="location-map_map">
                <GoogleMapReact
                    bootstrapURLKeys={{key: key}}
                    center={defaultProps.center}
                    defaultZoom={defaultProps.zoom}>
                    {pointCoords.map(obj => {
                        console.log(obj)
                        return (
                            <Marker key={obj.pointId} lat={obj.lat} lng={obj.lng}/>
                        )
                    })}
                </GoogleMapReact>
            </div>
        </div>
    );
}

const Marker = () => {
    return <div className="location-map_marker"/>
}

export default LocationMap;