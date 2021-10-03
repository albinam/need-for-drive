import React from "react";
import './Input.scss';
import PropTypes from "prop-types";
import { Select } from 'antd';
const { Option } = Select;

function Input({type,placeholder, label, value, values, handleChange, disabled, clear}) {

    const handleChangeInputValue = value => {
        handleChange(value);
    }
    const list = () =>
        (type==="city"&&values)?
        values.map((item) => (
            <Option key={item.id} value={JSON.stringify(item)}>
                {item.name}
            </Option>
        )): (type==="point"&&values)?
            values.map((item) => (
                <Option key={item.id} value={JSON.stringify(item)}>
                    {item.address}
                </Option>
            )):null

    return (
        <div className="form_line">
            <div className="form_label">
                {label}
            </div>
            <div className="form_name">
                <Select
                    showSearch
                    suffixIcon={false}
                    bordered={false}
                    placeholder={placeholder}
                    optionFilterProp="children"
                    onChange={handleChangeInputValue}
                    value={value}
                    disabled={disabled}
                    className="form_input"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {list()}
                </Select>
                <button onClick={clear} className="form_button">&#215;</button>
            </div>
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    disabled: PropTypes.bool,
    clear: PropTypes.func,
    values: PropTypes.array
}

export default Input;