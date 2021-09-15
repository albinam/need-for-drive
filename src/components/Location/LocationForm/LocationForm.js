import React from 'react';
import './LocationForm.scss';
import Input from "../../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {setPoint, setCity} from "../../../redux/actions/actions";


function LocationForm() {

    const dispatch = useDispatch();
    const order = useSelector(state => state.order);

    const onChangeCity = value => {
        dispatch(setCity(value));
    };

    const onChangePoint = value => {
        dispatch(setPoint(value));
    };

    return (
        <div className="location_form">
            <Input type="text" value={order.city} handleChange={onChangeCity} label="Город"
                   placeholder="Начните вводить город ..."/>
            <Input type="text" value={order.point} handleChange={onChangePoint} label="Пункт выдачи"
                   placeholder="Начните вводить пункт ..."/>
        </div>
    );
}

export default LocationForm;