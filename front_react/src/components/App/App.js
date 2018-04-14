import React, { Component } from "react";
import { connect } from "react-redux";

import './App.scss';

import Header from '../Header/Header.js';
import Basket from '../Basket/Basket.js';
import Recipe from '../Recipe/Recipe.js';
import Products from '../Products/Products.js';

const mapStateToProps = state => {
    return {
        pages: state.pages
    }
};

class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { pages } = this.props;

        return (
            <div className='app-container'>
                <Header />
                { pages.filter(page=>page.name === 'home')[0].show && <Home />}
                { pages.filter(page=>page.name === 'products')[0].show && <Products />}
                { pages.filter(page=>page.name === 'recipes')[0].show && <Recipes />}
            </div>
        );
    }
};

App = connect(mapStateToProps)(App);

export default App;
