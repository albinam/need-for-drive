import React, {useEffect, useState} from 'react';
import './CarsTab.scss';
import CategorySelector from "../CategorySelector/CategorySelector";
import CarCards from "../CarCards/CarCards";
import {useDispatch, useSelector} from "react-redux";
import {getCars, getCarsByCategory, getCategories, getRate} from "../../assets/utils/carsApi";
import Loader from "../Loader/Loader";

function CarsTab() {
    const categories = useSelector(state => state.apiInfo.categories);
    const all = [{id: 'all', name: 'Все модели', description: 'Все модели'}];
    const [selected, setSelected] = useState(all[0]);
    const dispatch = useDispatch();
    const cars = useSelector(state => state.apiInfo.cars);
    const [carsList, setCarsList] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        if (!cars) {
            dispatch(getCars());
            getRate();
        }
        if (cars && !categories) {
            dispatch(getCategories());
        }
        if (categories) {
            setLoading(false);
        }
    }, [cars,categories])

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
            {(loading)? <Loader/>:
            <div className="order_page_tab_cars">
                <div className="order_page_tab_cars_category">
                    <CategorySelector type="carCategory" selected={selected} handleClick={handleCLick}
                                      categories={all}/>
                    <CategorySelector type="carCategory" selected={selected} handleClick={handleCLick}
                                      categories={categories}/>
                </div>
                <CarCards cars={carsList ? carsList : cars}/>
            </div>
            }
        </div>
    );
}

export default CarsTab;