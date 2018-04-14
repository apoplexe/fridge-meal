import React, { Component } from "react";
import style from './Basket.scss';

import { connect } from "react-redux";
import { addProducts, removeProducts, fillBasket, removeBasket } from '/rdx/actions/index';

const mapDispatchToProps = dispatch => {
    return {
        fillBasket: basket => dispatch(fillBasket(basket)),
        removeBasket: basket => dispatch(removeBasket(basket)),
        removeProducts: product => dispatch(removeProducts(product)),
        addProducts: product => dispatch(addProducts(product))
    }
};

const mapStateToProps = state => {
    return {
        products: state.products,
        basket: state.basket
    }
};

class Baskets extends Component {
    constructor(props){
        super(props);
        this.drop = this.drop.bind(this);
        this.unDrop = this.unDrop.bind(this);
    }
    allowDrop(e){
        e.preventDefault();
    }
    drop(e){
        e.preventDefault();
        let data = e.dataTransfer.getData("dragged");
        let draggedProduct = document.getElementById(data);
        let basket = this.props.products.filter(product => product.id == draggedProduct.id);
        this.props.fillBasket(basket[0]);
        this.props.removeProducts(basket[0]);
    }
    unDrop(e){
        let product = this.props.basket.filter(basket => basket.id == e.target.id);
        this.props.addProducts(product[0]);
        this.props.removeBasket(product[0]);
    }
    render(){
        return(
            <div className='basket' onDragOver={this.allowDrop} onDrop={this.drop}>
                <ul className='basket-list'>
                    {
                        this.props.basket.map(
                            basket => {
                                return (
                                    <li id={basket.id} key={basket.id} className='basket-list-item' onDoubleClick={this.unDrop}>{basket.name}</li>
                                );
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}

const Basket = connect(mapStateToProps, mapDispatchToProps)(Baskets);

export default Basket;
