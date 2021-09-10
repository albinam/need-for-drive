import React from 'react';
import Input from '../Input/Input';
import './RentDatesForm.scss';

function RentDatesForm() {

    return (
        <div className="dates_form">
            <label className="dates_form_label">Дата аренды</label>
            <Input type="datetime-local"  label="С" placeholder="Введите дату и время"/>
            <Input type="datetime-local"  label="По" placeholder="Введите дату и время"/>
        </div>
    );
}

export default RentDatesForm;