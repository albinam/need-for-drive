import React from 'react';
import './LocationForm.scss';
import Input from './Input/Input';

function LocationForm() {

    return (
        <div className="location_form">
            <Input label="Город" placeholder="Начните вводить город ..."/>
            <Input label="Пункт выдачи" placeholder="Начните вводить пункт ..."/>
        </div>
    );
}

export default LocationForm;