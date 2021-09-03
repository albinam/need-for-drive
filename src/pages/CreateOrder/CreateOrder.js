import React, {useState} from 'react';
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import "./CreateOrder.scss"
import OrderSteps from "../../components/OrderSteps/OrderSteps";
import LocationForm from "../../components/Location/LocationForm/LocationForm";
import LocationMap from "../../components/Location/LocationMap/LocationMap";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import stepsButtons from "../../assets/data/stepsButtons";

function CreateOrder() {

    const [currentTab, setCurrentTab] = useState(0);

    const order = useState({
        point: "Ульяновск, Нариманова 42",
        price: "от 8 000 до 12 000",
        car: ""
    });

    const setStepChange = tab => {
        setCurrentTab(tab);
    };

    return (
        <div className="order_page">
            { console.log(stepsButtons[currentTab])}
            <Menu/>
            <div className="order_page_content">
                <Header/>
                <OrderSteps step={currentTab} setStepChange ={setStepChange}/>
                <div className="order_page_tab">
                    {(currentTab === 0) ? (
                        <div className="order_page_tab_location">
                            <LocationForm/>
                            <LocationMap/>
                        </div>
                    ) : null}
                    {(currentTab === 1) ? (
                        <div className="order_page_tab_cars">
                        </div>
                    ) : null}
                    <OrderInfo order = {order} setStepChange={setStepChange} button={stepsButtons[currentTab]}/>
                </div>
            </div>
        </div>
    );
}

export default CreateOrder;