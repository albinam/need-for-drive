import React, {useState} from 'react';
import './LocationForm.scss';
import Input from "../../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {setPoint, setCity} from "../../../redux/actions/actions";

function LocationForm() {

    const dispatch = useDispatch();
    const order = useSelector(state => state.order);
    const cities = useSelector(state => state.apiInfo.cities);
    const points = useSelector(state => state.apiInfo.points);
    const [pointsList,setPointsList]=useState(points);

    const onChangeCity = value => {
        dispatch(setCity(JSON.parse(value)));
        if (value != null) {
            setPointsList(points[0].filter((point) => point.cityId?.id === JSON.parse(value).id));
        }
        onChangePoint(null);
    };

    const onChangePoint = value => {
        dispatch(setPoint(JSON.parse(value)));
    };

    const clearCityAndPoint = () => {
        onChangeCity(null);
        onChangePoint(null);
    };

    const clearPoint = () => {
        onChangePoint(null);
    }

    return (
        <div className="location_form">
            {(cities.length !== 0) &&
            <Input type="city" value={(order.city)?order.city.name:null} values={cities[0]} handleChange={onChangeCity} clear={clearCityAndPoint}
                    label="Город"
                    placeholder="Начните вводить город ..."/>}
            {(cities.length !== 0) &&
            <Input type="point" value={(order.point)?order.point.address:null} values={(pointsList)?pointsList:""} handleChange={onChangePoint} clear={clearPoint}
                   label="Пункт выдачи"
                   placeholder="Начните вводить пункт ..." disabled={!(order.city)}/>}
        </div>
    );
}

export default LocationForm;