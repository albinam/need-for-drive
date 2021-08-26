import React from 'react';
import './OrderSteps.scss';

export const steps = [
    "Местоположение",
    "Модель",
    "Дополнительно",
    "Итого"
];

function OrderSteps() {

    return (
        <nav className="steps">
            {steps.map((link) => (
                <a key={link} href="#!">{link}</a>
            ))}
        </nav>
    )
}
export default OrderSteps;