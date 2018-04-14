import React, { Component } from 'react';
import style from './Recipe.scss';

import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        products: state.products
    }
};

class Recipes extends Component {
    ComponentDidMount(){
        fetch('/products')
        .then(res=>res.json())
        .then(res=>res);
    }
    render(){
        return (
            <div className='recipes'>
                <ul onClick={this.fetchRecipes} className='recipes-list'>
                    {
                        this.props.recipes.map(
                            recipes => {
                                return (
                                    <li key={recipes.id} className='recipes-list-item'>{recipes.name}</li>
                                );
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}

const Recipe = connect(mapStateToProps)(Recipes);

export default Recipe;
