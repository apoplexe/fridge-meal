const initialState = {
    categories: [
        {
            id: 1,
            name: 'fruit',
            description: 'fleshy sweet food',
            selected: true
        },
        {
            id: 2,
            name: 'vegetable',
            description: 'parts of plants you can consume',
            selected: false
        }
    ],
    products: [
        {
            id: 1,
            name: 'banana',
            description: 'yellow fruit with a good part of potassium',
            origin: 'Equateur',
            category: 'fruit'
        },
        {
            id: 2,
            name: 'broccoli',
            description: 'green vegetable who looks like a tree',
            origin: 'France',
            category: 'vegetable'
        },
        {
            id: 3,
            name: 'tomato',
            description: 'red fruit amazing with mozarella',
            origin: 'France',
            category: 'fruit'
        }
    ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CATEGORIES':
        // console.log({...state, categories: [...state.categories, action.payload] });
        return {...state, categories: [...state.categories, action.payload] };
        case 'ADD_PRODUCTS':
        return {...state, products: [...state.products, action.payload] };
        default:
        return state
    }
};

export default rootReducer;
