import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/stores/index";
import App from './components/App/App';

// import { addProduct } from "./redux/actions/index";
//
// window.store = store;
// window.addProduct = addProduct;

render(
    <Provider store={store}>
        <App title="main"/>
    </Provider>,
    document.querySelector('.app')
);
