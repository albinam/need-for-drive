import CategorySelector from "../CategorySelector/CategorySelector";
import RentDatesForm from "../RentDatesForm/RentDatesForm";
import Checkbox from "../Checkbox/Checkbox";
import React from "react";
import PropTypes from "prop-types";
import "./AdditionalTab.scss";
import {useDispatch, useSelector} from "react-redux";
import {deleteAdditions, setAdditions, setColor, setPrice, setTariff} from "../../redux/actions/actions";
import {getPrice} from "../../assets/utils/utils";

function AdditionalTab({categories}) {

    const dispatch = useDispatch();
    const order = useSelector(state => state.order);

    const handleClickColor = (color) => {
        dispatch(setColor(color));
    };

    const handleClickTariff = (tariff) => {
        dispatch(setTariff(tariff));
        let price = getPrice(order,tariff,order.additions);
        dispatch(setPrice(price))
    };

    const handleClickAdditions = (additions) => {
        if (order.additions.includes(additions)) {
            dispatch(deleteAdditions(additions));
            let price = getPrice(order,order.tariff,order.additions,additions);
            dispatch(setPrice(price))
        } else {
            dispatch(setAdditions(additions));
            let price = getPrice(order,order.tariff,[additions,...order.additions]);
            dispatch(setPrice(price))
        }
    };

    return (
        <div>
            <div className="order_page_tab_additional_label">Цвет</div>
            <CategorySelector selected={order.color} handleClick={handleClickColor} type="carColor"
                              categories={order.car.colors}/>
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