import React, { Component } from "react";
import './Categories.scss';

import { connect } from "react-redux";
import { selectCategories } from '/rdx/actions/index';


const mapStateToProps = state => {
    return {
        categories: state.categories,
        counter: state.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        select: () => { dispatch(selectCategories()) }
    }
}

class CategoriesList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { select, categories, counter } = this.props;

        return (
            <div className='category-'>
                <span className='category-arrow' onClick={select}>u</span>

                <ul className='category-list-'>
                    {
                        categories ? categories.filter(category => category.id === counter).map(
                            category => {
                                return(
                                    <li key={category.id} className='category-list-item'>
                                        { category.name }
                                    </li>
                                );
                            }
                        ) : <span>Waiting</span>
                    }
                </ul>

                <span className='category-arrow' onClick={select}>n</span>
            </div>
        )
    }
}

const Categories = connect(mapStateToProps, mapDispatchToProps)(CategoriesList);

export default Categories;
