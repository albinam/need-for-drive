import Geocode from "react-geocode";
import {setApiInfoCitiesCoords, setMarker} from "../../redux/actions/actions";

export async function getPointsCoords(point) {
    Geocode.setApiKey(process.env.REACT_APP_MAP_API_KEY);
    Geocode.setLanguage("ru");
    let geo = await Geocode.fromAddress(point.cityId.name + " " + point.address)
    let lat = geo.results[0].geometry.location.lat;
    let lng = geo.results[0].geometry.location.lng;
    return {point, lat, lng};
}

export const displayPoints = (points) => {
    return (dispatch) => {
        for (const point of points[0]) {
            getPointsCoords(point).then((response) => {
                dispatch(setMarker(response));
            })
        }
    }
}

export async function getCityCoords({city, cityId}) {
    Geocode.setApiKey(process.env.REACT_APP_MAP_API_KEY);
    Geocode.setLanguage("ru");
    let geo = await Geocode.fromAddress(city)
    let lat = geo.results[0].geometry.location.lat;
    let lng = geo.results[0].geometry.location.lng;
    return {city,cityId, lat, lng};
}

export const dispatchCitiesCoords = (cities) => {
    return (dispatch) => {
        for (const city of cities[0]) {
            getCityCoords({
                city: city.name,
                cityId:  city.id,
            }).then((response) => {
                dispatch(setApiInfoCitiesCoords(response));
            })
        }
    }
}