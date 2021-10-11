import React from 'react';
import './LocationMap.scss';
import GoogleMapReact from 'google-map-react';
import {useDispatch, useSelector} from "react-redux";
import {setCity, setPoint} from "../../../redux/actions/actions";
import Marker from "./Marker";

function LocationMap() {
    const position = useSelector(state => state.userLocation);
    const location = useSelector(state => state.apiInfo);
    const order = useSelector(state => state.order);
    const key = process.env.REACT_APP_MAP_API_KEY;
    const dispatch = useDispatch();
    const defaultZoom = 11;

    const getCenter = () => {
        if (order.city === null && order.point === null) return {
            lat: position.location.latitude,
            lng: position.location.longitude
        }
        if (order.city !== null && order.point === null) {
            return location.citiesCoords.find(cityCoord => cityCoord.cityId === order.city.id);
        }
        if (order.city !== null && order.point !== null) {
            return location.markers.find(pointCoord => pointCoord.point.id === order.point.id);
        }
    }

    const handleMarkerChange = (value) => {
        dispatch(setCity(location.cities[0].find(city => city.id === value.point.cityId.id)));
        dispatch(setPoint(location.points[0].find(point => point.id === value.point.id)));
    }

    return (
        <div className="location-map">
            <div className="location-map_label">Выбрать на карте:</div>
            <div className="location-map_map">
                <GoogleMapReact
                    bootstrapURLKeys={{key: key}}
                    center={getCenter()}
                    defaultZoom={defaultZoom}>
                    {location.markers.map(obj => {
                        return (
                            <Marker key={obj.pointId} handleClick={() => handleMarkerChange(obj)} lat={obj.lat}
                                    lng={obj.lng}/>
                        )
                    })}
                </GoogleMapReact>
            </div>
        </div>
    );
}

export default LocationMap;