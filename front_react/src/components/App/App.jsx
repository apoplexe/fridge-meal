import React, { Component } from "react";
import './App.css';

import Navigator from '../Navigator/Navigator.jsx';
import Header from '../Header/Header.jsx';
import Basket from '../Basket/Basket.jsx';
import Recipe from '../Recipe/Recipe.jsx';

class App extends Component {
    render(){
        return (
            <div className='app-container'>
                <Header />
                <Navigator />
                <Basket />
                <Recipe />
            </div>
        );
    }
};
 
export default App;
