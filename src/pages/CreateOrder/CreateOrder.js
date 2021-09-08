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
import RentDatesForm from "../../components/RentDatesForm/RentDatesForm";

function CreateOrder() {

    const [currentTab, setCurrentTab] = useState(2);

    const order = useState({
        point: "Ульяновск, Нариманова 42",
        price: "от 8 000 до 12 000",
        car: "Hyndai, i30 N"
    });

    const setStepChange = tab => {
        setCurrentTab(tab);
    };

    return (
        <div className="order_page">
            {console.log(categories[0].carCategory)}
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
                            <div className="order_page_tab_additional_label">Цвет</div>
                            <CategorySelector type="carColor" categories={categories[0].carColor}/>
                            <RentDatesForm/>
                            <div className="order_page_tab_additional_label">Тариф</div>
                            <CategorySelector type="price" categories={categories[0].price}/>
                            <div className="order_page_tab_additional_label">Доп. услуги</div>
                        </div>
                    )}
                    <OrderInfo order={order} setStepChange={setStepChange} button={stepsButtons[currentTab]}/>
                </div>
            </div>
        </div>
    );
}

export default CreateOrder;