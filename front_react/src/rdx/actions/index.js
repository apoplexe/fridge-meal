import  { types } from "../constants/actions_types";

export const addCategories = categories => ({
    type: types.ADD_CATEGORIES,
    payload: categories
});

export const addProducts = products => ({
    type: types.ADD_PRODUCTS,
    payload: products
});

export const removeProducts = products => ({
    type: types.REMOVE_PRODUCT,
    payload: products
});

export const selectCategories = selected => ({
    type: types.SELECT_CATEGORIES,
    payload: selected
});

export const fillBasket = basket => ({
    type: types.FILL_BASKET,
    payload: basket
});

export const removeBasket = basket => ({
    type: types.REMOVE_BASKET,
    payload: basket
});
