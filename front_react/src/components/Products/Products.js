import React, { Component } from "react";
import { connect } from "react-redux";
import style from './Products.scss';
import Categories from '../Categories/Categories.js';


const mapStateToProps = state => {
    return {
        counter: state.counter,
        products: state.products,
        categories: state.categories
    }
};

class ProductsList extends Component {
    drag(e){
        e.dataTransfer.setData("dragged", e.target.id);
    }
    render(){
        const currentCategory = this.props.categories.filter(category => category.id === this.props.counter);
        const currentProducts = this.props.products.filter(product => product.category === currentCategory[0].name);

        return (
            <div className='product'>
                <Categories />
                <ul className='product-list'>
                    {
                        currentProducts.map(product => {
                            return (
                                <li id={product.id} key={product.id} className='product-list-item' draggable='true' onDragStart={this.drag}>{product.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const Products = connect(mapStateToProps)(ProductsList);

export default Products;
