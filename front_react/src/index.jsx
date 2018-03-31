import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./rdx/stores/index";
import App from './components/App/App.jsx';
import './reset.css'

import { selectCategories } from "./rdx/actions/index";
//
// window.store = store;
// window.addProduct = addProduct;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('.app')
);
