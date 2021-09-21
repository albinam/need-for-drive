import React, {useState} from 'react';
import './CarsTab.scss';
import CategorySelector from "../CategorySelector/CategorySelector";
import categories from "../../assets/data/categories";
import CarCards from "../CarCards/CarCards";

function CarsTab() {
    const [selected,setSelected]=useState();
    const handleClick = value => setSelected(value)

    return (
        <div className="order_page_tab_cars">
            <CategorySelector type="carCategory" selected={selected} handleClick={handleClick} categories={categories[0].carCategory}/>
            <CarCards/>
        </div>
    );
}

export default CarsTab;