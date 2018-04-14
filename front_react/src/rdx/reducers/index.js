import data from './data';

const initialState = data;

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
        return {...state, products: [...state.products, action.payload] };
        case 'ADD_CATEGORIES':
        return {...state, categories: [...state.categories, action.payload]};
        case 'FILL_BASKET':
        return {...state, basket: [...state.basket, action.payload]};
        case 'REMOVE_BASKET':
        return {...state, basket: [...state.basket].filter(basket => basket.id !== action.payload.id)};
        case 'REMOVE_PRODUCT':
        return {...state, products: [...state.products].filter(product => product.id !== action.payload.id)};
        case 'SELECT_CATEGORIES':
        return {...state, counter: state.counter !== state.categories.length ? state.counter + 1 : 1};
        default:
        return state
    }
};

export default rootReducer;
