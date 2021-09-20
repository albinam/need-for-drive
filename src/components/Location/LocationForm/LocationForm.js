import React, {useState} from 'react';
import './LocationForm.scss';
import Input from "../../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {setPoint, setCity} from "../../../redux/actions/actions";


function LocationForm() {

    const dispatch = useDispatch();
    const order = useSelector(state => state.order);
    const [point, changePoint] = useState(order.point);
    const [city, changeCity] = useState(order.city);

    const onChangeCity = value => {
        dispatch(setCity(value));
        if(value!=null)
            changeCity(value);
    };

    const onChangePoint = value => {
        dispatch(setPoint(value));
        if(value!=null)
            changePoint(value)
    };

    const clearCityAndPoint = () => {
        changeCity("");
        changePoint("");
        onChangeCity(null);
        onChangePoint(null);
    };

    const clearPoint = () => {
        changePoint("");
        onChangePoint(null);
    }

    return (
        <div className="location_form">
            <Input type="text" value={city} handleChange={onChangeCity} clear={clearCityAndPoint} label="Город"
                   placeholder="Начните вводить город ..."/>
            <Input type="text" value={point} handleChange={onChangePoint} clear={clearPoint} label="Пункт выдачи"
                   placeholder="Начните вводить пункт ..." disabled={!(order.city)}/>
        </div>
    );
}

export default LocationForm;