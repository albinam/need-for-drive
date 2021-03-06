import React from "react";
import "./OrderInfoItem.scss";
import PropTypes from "prop-types";

function OrderInfoItem({element, value}) {
    if (value) {
        return (
            <li className="item">
                <div className="item_element">{element}</div>
                <div className="item_dots"/>
                <div className="item_value">{value}</div>
            </li>
        )
    }
    else{
        return null;
    }
}
OrderInfoItem.propTypes = {
    element: PropTypes.string,
    value: PropTypes.string
}

export default OrderInfoItem;
