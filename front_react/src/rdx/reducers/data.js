const data = {
    counter: 1,
    pages: [
        {
            name: 'home',
            show: false
        },
        {
            name: 'products',
            show: true
        },
        {
            name: 'recipes',
            show: false
        },
        {
            name: 'recipe',
            show: false
        }
    ],
    recipes: [
        {
            id: 1,
            name: 'tarte aux champignons',
            description: 'c\'est une bonne tarte avec des champignons',
            origin: 'Hongria',
            category: 'middle meat',
            products: ['pastek','steak']
        },
        {
            id: 2,
            name: 'tarte aux courgettes',
            description: 'c\'est une bonne tarte avec des courgettes',
            origin: 'Serbie',
            category: 'middle meat',
            products: ['cauliflower','apple','steak']
        },
        {
            id: 3,
            name: 'tarte aux paté',
            description: 'c\'est une bonne tarte avec des paté',
            origin: 'Austria',
            category: 'middle meat',
            products: ['rice','banana']
        },
        {
            id: 4,
            name: 'tarte aux fenouil',
            description: 'c\'est une bonne tarte avec des fenouil',
            origin: 'Soudan',
            category: 'middle meat',
            products: ['tomato','broccoli', 'banana']
        }
    ],
    basket: [
        {
            id: 0,
            name: 'pastek',
            description: 'red fruit with a good part of water',
            origin: 'Algeria',
            category: 'fruit'
        }
    ],
    categories: [
        {
            id: 1,
            name: 'fruit',
            description: 'fleshy sweet food'
        },
        {
            id: 2,
            name: 'vegetable',
            description: 'parts of plants you can consume'
        },
        {
            id: 3,
            name: 'meat',
            description: 'no vegan food'
        },
        {
            id: 4,
            name: 'cereals',
            description: 'like, u know, cereals'
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
            name: 'steak',
            description: 'hahaha, we kill an animal for gettin this',
            origin: 'Europe',
            category: 'meat'
        },
        {
            id: 3,
            name: 'cauliflower',
            description: 'don\'t eaven know what it is',
            origin: '???',
            category: 'vegetable'
        },
        {
            id: 4,
            name: 'apple',
            description: 'rip steve',
            origin: 'France',
            category: 'fruit'
        },
        {
            id: 5,
            name: 'corn-flakes',
            description: 'yesssss ! i want more of this shit',
            origin: 'USA',
            category: 'cereals'
        },
        {
            id: 6,
            name: 'rice',
            description: 'eat this in the middle of afternoon',
            origin: 'Danemark',
            category: 'cereals'
        },
        {
            id: 7,
            name: 'broccoli',
            description: 'green vegetable who looks like a tree',
            origin: 'France',
            category: 'vegetable'
        },
        {
            id: 8,
            name: 'tomato',
            description: 'red fruit amazing with mozarella',
            origin: 'France',
            category: 'fruit'
        }
    ]
};

export default data;
