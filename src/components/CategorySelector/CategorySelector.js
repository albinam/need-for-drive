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
                             className={classNames("category_selector_item", (type) ? type : null, (type!=="carCategory" )?((category ===  selected) ? "active" : null):((category.id  === selected?.id) ? "active" : null))}>
                            <input key={category.id} type="radio" className={classNames("category_selector_item_radio",(type!=="carCategory")?((category ===  selected) ? "active" : null):((category.id  === selected?.id) ? "active" : null))} onChange={() => handleClick(category)}/>
                            <label
                                key={category.description?category.description:category}
                                className="category_selector_item_label"
                                onClick={() => handleClick(category)}
                            >
                                {category.name?category.name:category}
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
    selected:PropTypes.object
}

export default CategorySelector;