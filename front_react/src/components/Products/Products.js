import React, { Component } from "react";
import './Products.css';

import { connect } from "react-redux";

export const fromage = ()=>{
    return 'fromage';
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
};

const ProductsList = ({products}) => {
    return (
        <div className="product-contain">
            <h5>
                Product
            </h5>
            {
                products.filter(
                    product => {return product.category === 'fruit';}
                ).map(
                    product => {
                        return(
                            <div>
                            <span>
                                { product.name }
                            </span>
                            <br/>
                            </div>
                        );
                    }
                )
            }
        </div>
    )
}

export const Products = connect(mapStateToProps)(ProductsList);
