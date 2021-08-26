import React, {Component} from 'react';
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import "./CreateOrder.scss"
import OrderSteps from "../../components/OrderSteps/OrderSteps";
import LocationForm from "../../components/Location/LocationForm/LocationForm";
import LocationMap from "../../components/Location/LocationMap/LocationMap";

class CreateOrder extends Component {
    render() {
        return (
            <div className="order_page">
                <Menu/>
                <div className="order_page_content">
                    <Header/>
                    <OrderSteps/>
                    <LocationForm/>
                    <LocationMap/>
                </div>
            </div>
        );
    }
}

export default CreateOrder;