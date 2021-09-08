import React from 'react';
import './LocationForm.scss';
import Input from "../../Input/Input";


function LocationForm() {

    return (
        <div className="location_form">
            <Input type="text" label="Город" placeholder="Начните вводить город ..."/>
            <Input type="text" label="Пункт выдачи" placeholder="Начните вводить пункт ..."/>
        </div>
    );
}

export default LocationForm;