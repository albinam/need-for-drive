import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {dispatchUserCoords} from "../../assets/utils/userPositionServices";
import {getCities, getPoints} from "../../assets/utils/locationApi";
import LocationForm from "./LocationForm/LocationForm";
import LocationMap from "./LocationMap/LocationMap";

function LocationTab() {
    const points = useSelector(state => state.apiInfo.points);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dispatchUserCoords())
        dispatch(getPoints());
        dispatch(getCities());
    }, [])

    return (
        <div>
            <LocationForm/>
            {(points.length !== 0) && <LocationMap/>}
        </div>
    )
}
export default LocationTab;