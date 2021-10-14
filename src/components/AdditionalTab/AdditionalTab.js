import CategorySelector from "../CategorySelector/CategorySelector";
import RentDatesForm from "../RentDatesForm/RentDatesForm";
import Checkbox from "../Checkbox/Checkbox";
import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./AdditionalTab.scss";
import {useDispatch, useSelector} from "react-redux";
import {deleteAdditions, setAdditions, setColor, setPrice, setTariff} from "../../redux/actions/actions";
import {getPrice} from "../../assets/utils/utils";
import {getRate} from "../../assets/utils/carsApi";
import Loader from "../Loader/Loader";

function AdditionalTab({categories}) {

    const dispatch = useDispatch();
    const order = useSelector(state => state.order);
    const rates = useSelector(state => state.apiInfo.rates);
    const [loading, setLoading] = useState(true);

    const handleClickColor = (color) => {
        dispatch(setColor(color));
    };

    useEffect(() => {
        setLoading(true)
        dispatch(getRate());
        if (rates) {
            setLoading(false)
        }
    }, [])

    const handleClickTariff = (tariff) => {
        dispatch(setTariff(tariff));
        dispatch(setPrice(getPrice(order.duration, tariff, order.additions)))
    };

    const handleClickAdditions = (additions) => {
        if (order.additions.includes(additions)) {
            dispatch(deleteAdditions(additions));
            dispatch(setPrice(getPrice(order.duration, order.tariff, order.additions, additions)));
        } else {
            dispatch(setAdditions(additions));
            dispatch(setPrice(getPrice(order.duration, order.tariff, [additions, ...order.additions])));
        }
    };

    return (
        <div>
            {(loading) ? <Loader/> :
                <div className="order_page_tab_additional_container">
                    <div className="order_page_tab_additional_label">Цвет</div>
                    <CategorySelector selected={order.color} handleClick={handleClickColor} type="carColor"
                                      categories={order.car.colors}/>
                    <RentDatesForm/>
                    <div className="order_page_tab_additional_label">Тариф</div>
                    <CategorySelector selected={order.tariff} handleClick={handleClickTariff} type="price"
                                      categories={rates}/>
                    <div className="order_page_tab_additional_label">Доп. услуги</div>
                    <Checkbox handleClick={handleClickAdditions} selected={order.additions}
                              additional={categories.additional}/>
                </div>
            }
        </div>
    )
}

AdditionalTab.propTypes = {
    categories: PropTypes.object
}
export default AdditionalTab;