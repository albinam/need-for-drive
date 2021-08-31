import React, {useState} from 'react';
import './OrderSteps.scss';
import classNames from "classnames";

export const steps = [
    "Местоположение",
    "Модель",
    "Дополнительно",
    "Итого"
];

function OrderSteps() {

    const [activeLink] = useState(steps[0]);

    return (
        <nav className="steps">
            {steps.map((link) => (
                <a  className={classNames("steps_link", (link === activeLink) ? "active" : null)}
                    key={link} href="#!">{link}</a>
            ))}
        </nav>
    )
}
export default OrderSteps;