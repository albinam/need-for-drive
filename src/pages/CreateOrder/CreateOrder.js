import React from 'react';
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import "./CreateOrder.scss"
import OrderSteps from "../../components/OrderSteps/OrderSteps";
import LocationForm from "../../components/Location/LocationForm/LocationForm";
import LocationMap from "../../components/Location/LocationMap/LocationMap";
import OrderInfo from "../../components/OrderInfo/OrderInfo";

function CreateOrder() {

    return (
        <div className="order_page">
            <Menu/>
            <div className="order_page_content">
                <Header/>
                <OrderSteps/>
                <div className="order_page_tab">
                    <div className="order_page_tab_location">
                        <LocationForm/>
                        <LocationMap/>
                    </div>
                    <OrderInfo/>
                </div>
            </div>
        </div>
    );
}

export default CreateOrder;