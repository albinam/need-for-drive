import React from 'react';
import classNames from 'classnames';
import './CategorySelector.scss';
import PropTypes from "prop-types";

function CategorySelector({categories, type, handleClick, selected}) {

    return (
        <div className={classNames("category_selector", type)}>
            {categories.map(
                ((category,index) => {
                    return (
                        <div key={index}
                             className={classNames("category_selector_item", (type) ? type : null, (category === selected) ? "active" : null)}>
                            <input key={category.id} type="radio" className={classNames("category_selector_item_radio",(category === selected) ? "active" : null)} onChange={() => handleClick(category)}/>
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
    type:PropTypes.string,
    handleClick: PropTypes.func,
    selected:PropTypes.string
}

export default CategorySelector;