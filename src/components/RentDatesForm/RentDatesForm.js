import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setDateFrom, setDateTo, setDuration, setPrice} from "../../redux/actions/actions";
import DateInput from "./DatePicker/DateInput";
import "./RentDatesForm.scss"
import moment from "moment";
import {getDuration, getPrice} from "../../assets/utils/utils";

function RentDatesForm() {
    const dispatch = useDispatch();
    const order = useSelector(state => state.order);

    const setDateStart = value => {
        dispatch(setDateTo(null));
        dispatch(setDateFrom(value));
    }

    async function setDateEnd(value) {
        dispatch(setDateTo(value));
        if (order.dateFrom !== "" && value !== "" && value && order.dateFrom) {
            dispatch(setDuration(getDuration(order.dateFrom,value)))
        }
        dispatch(setPrice(getPrice(order.duration,order.tariff,order.additions)))
    }

    const disabledDate = current => {
        if (order.dateFrom) {
            return current < order.dateFrom;
        }
        return current < moment();
    }

    return (
        <div className="dates_form">
            <label className="dates_form_label">Дата аренды</label>
            <div className="dates_form_date">
                <label className="dates_form_date_label">C</label>
                <DateInput handleClick={setDateStart} disableDate={disabledDate} value={order.dateFrom}
                           disabled={false}/>
            </div>
            <div className="dates_form_date">
                <label className="dates_form_date_label">По</label>
                <DateInput handleClick={setDateEnd} disableDate={disabledDate} value={order.dateTo}
                           disabled={!(order.dateFrom)}/>
            </div>
        </div>
    );
}

export default RentDatesForm;