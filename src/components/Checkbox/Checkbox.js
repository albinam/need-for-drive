import React from 'react';
import classNames from 'classnames';
import './Checkbox.scss';
import PropTypes from "prop-types";

function Checkbox({additional, selected, handleClick}) {

    return (
        <div className="checkbox_selector">
            {additional.map(
                (service, index) => {
                    return (
                        <div key={index}
                             className={classNames("checkbox_selector_item", (selected.includes(service)) ? "active" : null)}>
                            <input type="checkbox" name="checkbox_selector_item_box" checked={selected[selected.indexOf(service)]}  onChange={() => handleClick(service)} />
                            <label
                                className="checkbox_selector_item_label"
                                onClick={() => handleClick(service)}
                            >
                                {service}
                            </label>
                        </div>
                    )
                })}
        </div>
    )
}
Checkbox.propTypes = {
    additional: PropTypes.array,
    handleClick: PropTypes.func,
    selected:PropTypes.array
}

export default Checkbox;