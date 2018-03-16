import React, { Component } from "react";
import './App.css';

import Products from '../Products/Products';
import Categories from '../Categories/Categories';

class App extends Component {
    render(){
        return (
            <div>
            <h4>{this.props.title}</h4>
            <p>root place</p>
            <Categories />
            <Products />
            </div>
        );
    }
};

export default App;
