import CategorySelector from "../CategorySelector/CategorySelector";
import RentDatesForm from "../RentDatesForm/RentDatesForm";
import Checkbox from "../Checkbox/Checkbox";
import React from "react";
import PropTypes from "prop-types";
import "./AdditionalTab.scss";

function AdditionalTab({categories}) {
    return (
        <div>
            <div className="order_page_tab_additional_label">Цвет</div>
            <CategorySelector type="carColor" categories={categories.carColor}/>
            <RentDatesForm/>
            <div className="order_page_tab_additional_label">Тариф</div>
            <CategorySelector type="price" categories={categories.price}/>
            <div className="order_page_tab_additional_label">Доп. услуги</div>
            <Checkbox additional={categories.additional}/>
        </div>
    )
}

AdditionalTab.propTypes = {
    categories:  PropTypes.array
}
export default AdditionalTab;