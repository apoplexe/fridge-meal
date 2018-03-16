import React, { Component } from "react";
import './Categories.css';

import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
};

const CategoriesList = ({categories}) => {
    return (
        <div className="category-contain">
            <h5>
                Category
            </h5>
            {
                categories.filter(
                    category => {return category.selected;}
                ).map(
                    category => {
                        return(
                            <span className='category-name'>
                                { category.name }
                            </span>
                        );
                    }
                )
            }
        </div>
    )
}
const Categories = connect(mapStateToProps)(CategoriesList);

export default Categories;
