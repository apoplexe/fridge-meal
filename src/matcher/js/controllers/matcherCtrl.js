class matcherCtrl{
    constructor(getterSvc, $scope, $rootScope){
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.getterSvc = getterSvc;

        this.basket = [];
        this.machine = 'restaurant.svg';
        this.products = [];
        this.productsId = [];
        this.recipe = {
            name:'milkshake',
            products:'banane',
            steps: ['mélanger les bananes']
        };
        this.recipeAvatar = 'cake.svg';
        this.recipesList = [];
        this.stepsList = [];
        this.url = {
            products: 'products',
            recipes: 'recipes',
            recipes_match: 'recipes_match',
            steps: 'steps',
        }
        this.$rootScope.$on('recipe-refresh', this.recipeRefresh());

        this.productResult();
        this.updateRecipe();
    }
    recipeRefresh(event, recipes){
        return (event, recipes)=>{
            if (recipes !== undefined) {
                this.recipesList = recipes;
            }
        }
    }
    updateRecipe(){
        this.getterSvc.get(this.url.recipes_match, 'products=' + this.productsId).then(
            d => {
                this.recipesList = d.data.results;
            }
        );
    }
    move(id, list){
        let basket;

        switch (list) {
            case 'products':
            this.products = this.products.filter(product=>{
                if (product.id === id) {
                    this.basket.push(product);
                    this.productsId.push(product.id);
                }
                return product.id !== id;
            });
            break;
            case 'basket':
            this.basket = this.basket.filter(product=>{
                if (product.id === id) {
                    this.products.push(product);
                    this.productsId.splice(this.productsId.indexOf(product.id), 1);
                }
                return product.id !== id;
            });
            break;
            default:
        }

        this.updateRecipe();
    }
    //
    // this.getterSvc.get(this.url.steps).then(
    //     d => {
    //         this.stepsList = d.data;
    //
    //         for (i = 0; i < this.recipesList.length; i++) {
    //             this.recipesList[i].steps = [];
    //
    //             for (j = 0; j < this.stepsList.length; j++) {
    //                 if (this.stepsList[j].recipe_id === this.recipesList[i].id) {
    //                     this.recipesList[i].steps.push(this.stepsList[j].description);
    //                 }
    //             }
    //         }
    //     }
    // );
    // }
    productResult(){
        this.getterSvc.get(this.url.products)
        .then(
            d => {
                this.products = d.data.products;

                for (var i = 0; i < this.basket.length; i++) {
                    for (var j = 0; j < this.products.length; j++) {
                        if (this.basket[i].id === this.products[j].id) {
                            this.products.splice(j,1);
                        }
                    }
                }
            }
        )
    }
}

matcherCtrl.$inject = ['getterSvc', '$scope', '$rootScope'];

export default matcherCtrl;
