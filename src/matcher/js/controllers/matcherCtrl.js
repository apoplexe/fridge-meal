class matcherCtrl{
    constructor(getterSvc){
        this.wordingMatch = "Glissez-déposez ici";
        this.productsMatch = [{'name': this.wordingMatch}];
        this.productList = [];
        this.recipesList = [];
        this.stepsList = [];
        this.getterSvc = getterSvc;

        this.machine = 'pan.svg';
        this.recipeAvatar = 'cake.svg';
        this.catogeriesList = ['spices'];
        this.recipe = {
            name:'milkshake',
            products:'banane',
            steps: ['mélanger les bananes']
        };

        this.productResult();
        this.recipesResult();
    }
    addRecipe(){
        this.getterSvc.postRecipes(this.recipe).then((d)=>{
            console.log(d);
        })
        this.productResult();
        this.recipesResult();
    }
    match(item, el){
        let productsId = [];
        let i, j;

        if (item.parentElement.classList.contains('products-zone') && el.classList.contains('matcher-zone')) {
            if (this.productsMatch.length > 0 && this.productsMatch[0].name.toLowerCase() === this.wordingMatch.toLowerCase()) {
                this.productsMatch.splice(0,1);
            }

            for (i = 0; i < this.productList.length; i++) {
                let productId = 'product-' + this.productList[i].id

                if (item.id === productId) {
                    this.productsMatch.push(this.productList[i]);
                    this.productList.splice(i,1);
                }
            }
        }

        if (item.parentElement.classList.contains('matcher-zone') && el.classList.contains('products-zone')) {
            for (i = 0; i < this.productsMatch.length; i++) {
                let matchId = 'match-' + this.productsMatch[i].id

                if (item.id === matchId) {
                    this.productList.push(this.productsMatch[i]);
                    this.productsMatch.splice(i,1);
                }
            }
        }

        for (i = 0; i < this.productsMatch.length; i++) {
            productsId.push(this.productsMatch[i].name);
        }

        this.getterSvc.getRecipes(productsId).then(
            d => {
                this.recipesList = d.data;
            }
        );

        this.getterSvc.getSteps().then(
            d => {
                this.stepsList = d.data;

                for (i = 0; i < this.recipesList.length; i++) {
                    this.recipesList[i].steps = [];

                    for (j = 0; j < this.stepsList.length; j++) {
                        if (this.stepsList[j].recipe_id === this.recipesList[i].id) {
                            this.recipesList[i].steps.push(this.stepsList[j].description);
                        }
                    }
                }
            }
        );
    }
    productResult(){
        this.getterSvc.getProducts()
        .then(
            d => {
                this.productList = d.data;

                for (var i = 0; i < this.productsMatch.length; i++) {
                    for (var j = 0; j < this.productList.length; j++) {
                        if (this.productsMatch[i].id === this.productList[j].id) {
                            this.productList.splice(j,1);
                        }
                    }
                }
            }
        )
    }
    recipesResult() {
        let p;

        if (this.productList.length > 0) {
            p = this.productList;
        }

        this.getterSvc.getRecipes(p).then(
            d => {
                this.recipesList = d.data;
            }
        )

    }
}

matcherCtrl.$inject = ['getterSvc'];

export default matcherCtrl;
