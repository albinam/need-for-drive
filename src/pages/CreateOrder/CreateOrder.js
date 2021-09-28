import React, {useEffect, useState} from 'react';
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import "./CreateOrder.scss"
import OrderSteps from "../../components/OrderSteps/OrderSteps";
import LocationForm from "../../components/Location/LocationForm/LocationForm";
import LocationMap from "../../components/Location/LocationMap/LocationMap";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import categories from "../../assets/data/categories";
import Total from "../../components/Total/Total";
import AdditionalTab from "../../components/AdditionalTab/AdditionalTab";
import OrderConfirmation from "../../components/OrderConfirmation/OrderConfirmation";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import CarsTab from "../../components/CarsTab/CarsTab";
import {usePosition} from "../../assets/utils/usePosition";
import {setLatLon} from "../../redux/actions/actions";

function CreateOrder() {

    const currentTab = useSelector(state => state.step);
    const [orderConfirmation, setConfirmation] = useState(false);
    const confirm = (orderConfirmation)? "opened" : null;
    const dispatch = useDispatch();

    useEffect(() => {
        usePosition().then(
            position => dispatch(setLatLon(position.coords.latitude,position.coords.longitude)))
    })

    const setOrderConfirmation = confirmation => {
        setConfirmation(confirmation);
    };

    return (
        <div className={classNames("order_page",confirm)}>
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
                            <LocationForm/>
                            <LocationMap/>
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