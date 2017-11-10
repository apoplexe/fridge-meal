class matcherCtrl{
    constructor(recipesSvc, productsSvc){
        this.wordingMatch = "Glissez-déposez ici";
        this.productsMatch = [{'name': this.wordingMatch}];
        this.recipe = {name:'tarte à artichaut', products:'banane,choux-fleur'};
        this.productList = [];
        this.recipesList = [];
        this.recipesSvc = recipesSvc;
        this.productsSvc = productsSvc;

        this.productResult(productsSvc);
        this.recipesResult(recipesSvc);
    }
    addRecipe(){
        this.recipesSvc.postRecipes(this.recipe).then((d)=>{
            console.log(d);
        })
        this.productResult();
        this.recipesResult();
    }
    match(item, el){
        let productsId = [];
        let i;

        if (item.parentElement.classList.contains('products-zone') && el.classList.contains('matcher-zone')) {
            if (this.productsMatch.length > 0 && this.productsMatch[0].name === this.wordingMatch) {
                this.productsMatch.splice(0,1);
            }

            for (i = 0; i < this.productList.length; i++) {
                if (item.innerText === this.productList[i].name) {
                    this.productsMatch.push(this.productList[i]);
                    this.productList.splice(i,1);
                }
            }
        }

        if (item.parentElement.classList.contains('matcher-zone') && el.classList.contains('products-zone')) {
            for (i = 0; i < this.productsMatch.length; i++) {
                if (item.innerText === this.productsMatch[i].name) {
                    this.productList.push(this.productsMatch[i]);
                    this.productsMatch.splice(i,1);
                }
            }
        }

        for (i = 0; i < this.productsMatch.length; i++) {
          console.log(this.productsMatch);
          productsId.push(this.productsMatch[i].name);
        }

        this.recipesSvc.getRecipes(productsId).then(
            d => {
                this.recipesList = d.data;
            }
        );
    }
    productResult(){
        this.productsSvc.getProducts()
        .then(
            d => {
                this.productList = d.data;
            }
        )
    }
    recipesResult() {
        let p;

        if (this.productList.length > 0) {
            p = this.productList;
        }

        this.recipesSvc.getRecipes(p).then(
            d => {
                this.recipesList = d.data;
            }
        )
    }
}

matcherCtrl.$inject = ['recipesSvc', 'productsSvc'];

export default matcherCtrl;
