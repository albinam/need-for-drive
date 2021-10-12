import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import LocationForm from "./LocationForm/LocationForm";
import LocationMap from "./LocationMap/LocationMap";
import {getCities, getPoints} from "../../assets/utils/locationApi";
import {dispatchUserCoords} from "../../assets/utils/userPositionServices";
import {dispatchCitiesCoords, displayPoints} from "../../assets/utils/locationServices";

function LocationTab() {
    const location = useSelector(state => state.apiInfo);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        if (location.points.length===0 && location.cities.length===0) {
            dispatch(getCities());
            dispatch(getPoints());
            dispatch(dispatchUserCoords());
        }
        if (location.points[0]) {
            dispatch(displayPoints(location.points))
        }
        if (location.cities[0]) {
            dispatch(dispatchCitiesCoords(location.cities))
        }
        if (location.markers){
            setLoading(false)
        }
    }, [location.points])

    return (
        <div>
            {!(loading) &&
            <div className="location_tab">
                <LocationForm/>
                <LocationMap/>
            </div>
            }
        </div>
    )
}

export default LocationTab;