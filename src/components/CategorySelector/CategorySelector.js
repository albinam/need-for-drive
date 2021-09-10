import React, {useState} from 'react';
import classNames from 'classnames';
import './CategorySelector.scss';
import PropTypes from "prop-types";

function CategorySelector({categories, type}) {

    const [selected, setSelected] = useState();
    const handleClick = category => setSelected(category);

    return (
        <div className={classNames("category_selector", type)}>
            {categories.map(
                ((category,index) => {
                    return (
                        <div key={index}
                             className={classNames("category_selector_item", (type) ? type : null, (category === selected) ? "active" : null)}>
                            <input key={category.id} type="radio" name="category_selector_item_radio" onChange={() => handleClick(category)} checked={category === selected}/>
                            <label
                                key={category.category}
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
CategorySelector.propTypes = {
    categories: PropTypes.array,
    type:PropTypes.string
}

export default CategorySelector;