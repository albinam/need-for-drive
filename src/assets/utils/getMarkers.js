import Geocode from "react-geocode";
import PropTypes from "prop-types";
import {getPoints} from "./locationApi";

export async function getMarkers({city, address, pointId}) {
    Geocode.setApiKey(process.env.REACT_APP_MAP_API_KEY);
    Geocode.setLanguage("ru");
    let geo = await Geocode.fromAddress(city + " " + address)
    let lat = geo.results[0].geometry.location.lat;
    let lng = geo.results[0].geometry.location.lng;
    return {city, address, pointId, lat, lng};
}

getMarkers.propTypes = {
    address: PropTypes.string,
    city: PropTypes.string,
    pointId: PropTypes.string,
}

export const displayPoints = () => {
    const pointCoords = [];
    getPoints().then(result => {
            for (const point of result.data.data) {
                getMarkers({
                    city: point.cityId.name,
                    address: point.address,
                    pointId: point.id
                }).then(result => pointCoords.push(result))
            }
        }
    )
    return pointCoords;
}