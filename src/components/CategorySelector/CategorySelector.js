import React, {useState} from 'react';
import classNames from 'classnames';
import './CategorySelector.scss';

const categories = [
    "Все модели",
    "Комфорт",
    "Премиум"
]

function CategorySelector() {

    const [selected, setSelected] = useState("Все модели");
    const handleClick = category => setSelected(category);

    return (
        <div className="category_selector">
            {categories.map(
                (category => {
                    return (
                        <div key={category} className= {classNames("category_selector_item", (category === selected) ? "active" : null)}>
                            <input type="radio" name="category_selector_item_radio"  checked={category === selected}/>
                            <label
                                className="category_selector_item_label"
                                onClick={() => handleClick(category)}
                            >
                                {category}
                            </label>
                        </div>
                    )
                }))}
        </div>
    )
}

export default CategorySelector;