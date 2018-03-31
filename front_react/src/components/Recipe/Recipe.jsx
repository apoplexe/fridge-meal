import React, { Component } from 'react';
import style from './Recipe.css';

import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
};

class Recipes extends Component {
    render(){
        return (
            <div className='recipes-contain'>
                <ul className='recipes-list'>
                    {
                        this.props.recipes.map(
                            recipes => {
                                return (
                                    <li key={recipes.id} className='recipes-item'>{recipes.name}</li>
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
