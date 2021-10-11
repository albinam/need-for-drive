import React, {useEffect, useState} from 'react';
import './CarsTab.scss';
import CategorySelector from "../CategorySelector/CategorySelector";
import CarCards from "../CarCards/CarCards";
import {useDispatch, useSelector} from "react-redux";
import {getCars, getCarsByCategory, getCategories} from "../../assets/utils/carsApi";

function CarsTab() {
    const categories = useSelector(state => state.apiInfo.categories);
    const [selected, setSelected] = useState(null);
    const dispatch = useDispatch();
    const cars = useSelector(state => state.apiInfo.cars);
    const [carsList, setCarsList] = useState(null);
    const [loading, setLoading] = useState(true);
    const all = [{id: 'all', name: 'Все модели', description: 'Все модели'}];

    useEffect(() => {
        setLoading(true)
        if (!categories[0]) {
            dispatch(getCategories());
        }
        if (!cars[0]) {
            dispatch(getCars());
        }
        if (cars[0]) {
            setLoading(false);
        }

    }, [cars])

    const handleCLick = (value) => {
        setSelected(value);
        if (value.id !== "all") {
            setLoading(true)
            let cars = getCarsByCategory(value.id);
            cars.then(res => setCarsList(res.data))
            setLoading(false)
        } else {
            setCarsList(cars[0])
        }
    }

    return (
        <div>
            {!(loading) &&
            <div className="order_page_tab_cars">
                <div className="order_page_tab_cars_category">
                    <CategorySelector type="carCategory" selected={selected} handleClick={handleCLick}
                                      categories={all}/>
                    <CategorySelector type="carCategory" selected={selected} handleClick={handleCLick}
                                      categories={categories[0]}/>
                </div>
                <CarCards cars={carsList ? carsList : cars[0]}/>
            </div>
            }
        </div>
    );
}

export default CarsTab;