import React, {useEffect, useState} from 'react';
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import "./CreateOrder.scss"
import OrderSteps from "../../components/OrderSteps/OrderSteps";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import categories from "../../assets/data/categories";
import Total from "../../components/Total/Total";
import AdditionalTab from "../../components/AdditionalTab/AdditionalTab";
import OrderConfirmation from "../../components/OrderConfirmation/OrderConfirmation";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import CarsTab from "../../components/CarsTab/CarsTab";
import LocationTab from "../../components/Location/LocationTab";
import {getCars, getCategories} from "../../assets/utils/carsApi";

function CreateOrder() {

    const currentTab = useSelector(state => state.step);
    const [orderConfirmation, setConfirmation] = useState(false);
    const confirm = (orderConfirmation) ? "opened" : null;
    const cars = useSelector(state => state.apiInfo.cars);
    const dispatch = useDispatch();

    const setOrderConfirmation = confirmation => {
        setConfirmation(confirmation);
    };

    useEffect(() => {
        dispatch(getCars());
        dispatch(getCategories());
        if (cars.length !== 0) {
            console.log(cars)
        }
    }, [])

    return (
        <div className={classNames("order_page", confirm)}>
            {(orderConfirmation) && (
                <div className="order_page_confirmation">
                    <OrderConfirmation setOrderConfirmation={setOrderConfirmation}/>
                </div>
            )}
            <Menu/>
            <div className="order_page_content">
                <Header/>
                <OrderSteps/>
                <div className="order_page_tab">
                    {(currentTab === 0) && (
                        <div className="order_page_tab_location">
                            <LocationTab/>
                        </div>
                    )}
                    {(currentTab === 1) && (
                        <CarsTab/>
                    )}
                    {(currentTab === 2) && (
                        <div className="order_page_tab_additional">
                            <AdditionalTab categories={categories[0]}/>
                        </div>
                    )}
                    {(currentTab === 3) && (
                        <div className="order_page_tab_total">
                            <Total/>
                        </div>
                    )}
                    <OrderInfo setOrderConfirmation={setOrderConfirmation}/>
                </div>
            </div>
        </div>
    );
}

export default CreateOrder;