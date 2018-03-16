import  { ADD_CATEGORIES, ADD_PRODUCTS } from "../constants/actions_types.js";

export const addCategories = categories => ({
    type: ADD_CATEGORIES,
    payload: categories
});

export const addProducts = products => ({
    type: ADD_PRODUCTS,
    payload: products
});
