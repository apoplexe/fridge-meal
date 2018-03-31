import React, { Component } from "react";
import './Navigator.css';

import Products from './Products/Products.jsx';
import Categories from './Categories/Categories.jsx';
import Select from './Select/Select.jsx';

const Navigator = () => {
    return (
        <div className='navigator'>
            <Categories />
            <Select className='selecter' />
            <Products />
        </div>
    )
}

export default Navigator;
