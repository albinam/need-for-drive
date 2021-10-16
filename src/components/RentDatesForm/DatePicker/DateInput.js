import {DatePicker} from "antd";
import locale from "antd/es/date-picker/locale/ru_RU";
import React from "react";
import PropTypes from "prop-types";
import "moment/locale/ru";
import "antd/dist/antd.css";
import './DateInput.scss';

function DateInput({value, handleClick, disableDate,disabled}) {

    return (
        <DatePicker
            showTime={{format: 'HH:mm'}}
            className="date-picker"
            locale={locale}
            placeholder='Введите дату и время'
            format="DD.MM.YYYY HH:mm"
            disabledDate={disableDate}
            size='small'
            allowClear={true}
            onChange={handleClick}
            suffixIcon={<div>&#215;</div>}
            clearIcon={<div>&#215;</div>}
            showNow={false}
            value={value}
            disabled={disabled}
        />
    )
}
DateInput.propTypes = {
    value:PropTypes.object,
    handleClick: PropTypes.func,
    disableDate: PropTypes.func,
    disabled:PropTypes.bool
}
export default DateInput;