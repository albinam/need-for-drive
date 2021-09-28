import Geocode from "react-geocode";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

export const displayLocation = ({latitude,longitude}) => {
    const [locationInfo, setLocation] = useState({});
    const [error, setError] = useState(null);
    const location = {
        country:null,
        city:null,
        street:null,
        house:null,
        lat:latitude,
        lon:longitude
    }
    Geocode.setApiKey("AIzaSyBMtXzm4_XSl4jb6hvmGzL8i_97Me0p8Kg");
    Geocode.setLanguage("ru");
    useEffect(() => {
        Geocode.fromLatLng(latitude, longitude).then(
            (response) => {
                location.house = response.results[0].address_components[0].long_name;
                location.street = response.results[0].address_components[1].long_name;
                location.city = response.results[0].address_components[2].long_name;
                location.country = response.results[0].address_components[5].long_name;
                setLocation({country:location.country,city:location.city, street:location.street,house:location.house,latitude:latitude,longitude:longitude});
            },
            (error) => {
                setError(error);
            }
        );
    }, []);
    return {...locationInfo, error};
}
displayLocation.propTypes = {
    latitude: PropTypes.float,
    longitude: PropTypes.float,
}