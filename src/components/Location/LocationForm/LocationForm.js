import React from 'react';
import './LocationForm.scss';

function LocationForm() {

    return (
        <div className="location_form">
            <div className="location_form_line">
                <div className="location_form_label">
                    Город
                </div>
                <div className="location_form_name">
                    <input type="text" className="location_form_input" placeholder="Начните вводить город ..."/>
                    <a className="location_form_button">&#215;</a>
                </div>
            </div>
            <div className="location_form_line">
                <div className="location_form_label">
                    Пункт выдачи
                </div>
                <div className="location_form_name">
                    <input className="location_form_input" placeholder="Начните вводить пункт ..."/>
                    <span className="location_form_button">&#215;</span>
                </div>
            </div>
        </div>
    );
}

export default LocationForm;