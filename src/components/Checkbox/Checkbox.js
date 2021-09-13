import React, {useState} from 'react';
import classNames from 'classnames';
import './Checkbox.scss';
import PropTypes from "prop-types";

function Checkbox({additional}) {

    const [selected, setSelected] = useState(Array(additional.length).fill(false));
    const handleClick = service => {
        setSelected(selected.map((val, index) => index === service ? !val : val));
    };

    return (
        <div className="checkbox_selector">
            {additional.map(
                (service, index) => {
                    return (
                        <div key={index}
                             className={classNames("checkbox_selector_item", (selected[index]) ? "active" : null)}>
                            <input type="checkbox" name="checkbox_selector_item_box" checked={selected[index]}  onChange={() => handleClick(index)} />
                            <label
                                className="checkbox_selector_item_label"
                                onClick={() => handleClick(index)}
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
    additional: PropTypes.array
}

export default Checkbox;