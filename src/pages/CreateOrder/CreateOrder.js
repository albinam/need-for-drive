import React, {useState} from 'react';
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import "./CreateOrder.scss"
import OrderSteps from "../../components/OrderSteps/OrderSteps";
import LocationForm from "../../components/Location/LocationForm/LocationForm";
import LocationMap from "../../components/Location/LocationMap/LocationMap";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import stepsButtons from "../../assets/data/stepsButtons";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
import CarCards from "../../components/CarCards/CarCards";
import categories from "../../assets/data/categories";
import Total from "../../components/Total/Total";
import AdditionalTab from "../../components/AdditionalTab/AdditionalTab";
import OrderConfirmation from "../../components/OrderConfirmation/OrderConfirmation";
import classNames from "classnames";

function CreateOrder() {

    const [currentTab, setCurrentTab] = useState(3);
    const [orderConfirmation, setConfirmation] = useState(false);
    const confirm = (orderConfirmation)? "opened" : null;

    const order = useState({
        point: "Ульяновск, Нариманова 42",
        price: "16 000",
        car: "Hyndai, i30 N",
        color:"Голубой",
        rentDates:"1д 2ч",
        tariff:"На сутки",
        additional:["Полный бак"]
    });
    const setOrderConfirmation = confirmation => {
        setConfirmation(confirmation);
    };

    const setStepChange = tab => {
        setCurrentTab(tab);
    };

    return (
        <div className={classNames("order_page",confirm)}>
            {(orderConfirmation) && (
                <div className="order_page_confirmation">
                    <OrderConfirmation setStepChange={setStepChange} setOrderConfirmation={setOrderConfirmation}/>
                </div>
            )}
            <Menu/>
            <div className="order_page_content">
                <Header/>
                <OrderSteps step={currentTab} setStepChange={setStepChange}/>
                <div className="order_page_tab">
                    {(currentTab === 0) && (
                        <div className="order_page_tab_location">
                            <LocationForm/>
                            <LocationMap/>
                        </div>
                    )}
                    {(currentTab === 1) && (
                        <div className="order_page_tab_cars">
                            <CategorySelector type="carCategory" categories={categories[0].carCategory}/>
                            <CarCards/>
                        </div>
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
                    <OrderInfo order={order} setStepChange={setStepChange} setOrderConfirmation={setOrderConfirmation} button={stepsButtons[currentTab]}/>
                </div>
            </div>
        </div>
    );
}

export default CreateOrder;