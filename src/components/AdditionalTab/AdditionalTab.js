import CategorySelector from "../CategorySelector/CategorySelector";
import RentDatesForm from "../RentDatesForm/RentDatesForm";
import Checkbox from "../Checkbox/Checkbox";
import React, {useState} from "react";
import PropTypes from "prop-types";
import "./AdditionalTab.scss";
import {useDispatch, useSelector} from "react-redux";
import {setColor, setTariff} from "../../redux/actions/actions";

function AdditionalTab({categories}) {

    const dispatch = useDispatch();
    const order = useSelector(state => state.order);
    const [selectedColor,setSelectedColor] = useState(order.color);
    const [selectedTariff,setSelectedTariff] = useState(order.tariff);

    const handleClickColor = (color) => {
        dispatch(setColor(color));
        setSelectedColor(color);
    };

    const handleClickTariff = (tariff) => {
        dispatch(setTariff(tariff.split(",")[0]));
        setSelectedTariff(tariff);
    };

    return (
        <div>
            <div className="order_page_tab_additional_label">Цвет</div>
            <CategorySelector selected={selectedColor} handleClick={handleClickColor} type="carColor" categories={categories.carColor}/>
            <RentDatesForm/>
            <div className="order_page_tab_additional_label">Тариф</div>
            <CategorySelector selected={selectedTariff} handleClick={handleClickTariff} type="price" categories={categories.price}/>
            <div className="order_page_tab_additional_label">Доп. услуги</div>
            <Checkbox additional={categories.additional}/>
        </div>
    )
}

AdditionalTab.propTypes = {
    categories:  PropTypes.object
}
export default AdditionalTab;