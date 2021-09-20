import CategorySelector from "../CategorySelector/CategorySelector";
import RentDatesForm from "../RentDatesForm/RentDatesForm";
import Checkbox from "../Checkbox/Checkbox";
import React from "react";
import PropTypes from "prop-types";
import "./AdditionalTab.scss";
import {useDispatch, useSelector} from "react-redux";
import {deleteAdditions, setAdditions, setColor, setTariff} from "../../redux/actions/actions";

function AdditionalTab({categories}) {

    const dispatch = useDispatch();
    const order = useSelector(state => state.order);

    const handleClickColor = (color) => {
        dispatch(setColor(color));
    };

    const handleClickTariff = (tariff) => {
        dispatch(setTariff(tariff));
    };

    const handleClickAdditions = (additions) => {
        if (order.additions.includes(additions)) {
            dispatch(deleteAdditions(additions));
        } else {
            dispatch(setAdditions(additions));
        }
    };

    return (
        <div>
            <div className="order_page_tab_additional_label">Цвет</div>
            <CategorySelector selected={order.color} handleClick={handleClickColor} type="carColor"
                              categories={categories.carColor}/>
            <RentDatesForm/>
            <div className="order_page_tab_additional_label">Тариф</div>
            <CategorySelector selected={order.tariff} handleClick={handleClickTariff} type="price"
                              categories={categories.price}/>
            <div className="order_page_tab_additional_label">Доп. услуги</div>
            <Checkbox handleClick={handleClickAdditions} selected={order.additions} additional={categories.additional}/>
        </div>
    )
}

AdditionalTab.propTypes = {
    categories: PropTypes.object
}
export default AdditionalTab;