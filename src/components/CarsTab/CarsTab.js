import React, {useState} from 'react';
import './CarsTab.scss';
import CategorySelector from "../CategorySelector/CategorySelector";
import CarCards from "../CarCards/CarCards";
import {useSelector} from "react-redux";

function CarsTab() {
    const categories = useSelector(state => state.apiInfo.categories);
    const categoriesToShow=[{id: 'all', name: 'Все модели', description:'Все модели'},...categories[0]];
    const [selected, setSelected] = useState(categoriesToShow[0]);
    const cars = useSelector(state => state.apiInfo.cars);
    const [carsList, setCarsList] = useState(cars[0]);

    const handleCLick = (value) => {
        setSelected(value)
        if(value.id==="all"){
            setCarsList(cars[0])
        }
        else {
            setCarsList(cars[0].filter((car) => (car.categoryId) && car.categoryId.id === value.id))
        }
    }

    return (
        <div>
            {(cars.length !== 0 && categories.length !== 0) &&
            <div className="order_page_tab_cars">
                <CategorySelector type="carCategory" selected={selected} handleClick={handleCLick}
                                  categories={categoriesToShow}/>
                <CarCards cars={(carsList)?carsList:cars[0]}/>
            </div>
            }
        </div>
    );
}

export default CarsTab;