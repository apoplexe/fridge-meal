import React, { Component } from "react";
import './Categories.css';

import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        categories: state.categories,
        counter: state.counter
    }
};

class CategoriesList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='category-contain'>
                <ul className='category-list'>
                    {
                        this.props.categories.filter(category => category.id === this.props.counter).map(
                            category => {
                                return(
                                    <li key={category.id} className='category-item'>
                                        { category.name }
                                    </li>
                                );
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}

const Categories = connect(mapStateToProps)(CategoriesList);

export default Categories;
