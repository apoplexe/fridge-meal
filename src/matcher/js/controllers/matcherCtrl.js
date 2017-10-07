class matcherCtrl{
    constructor(recipesSvc, productsSvc){
        this.wordingMatch = "Glissez-déposez ici";
        this.productList = [];
        this.productsMatch = [{'name': this.wordingMatch}];
        this.productsId = [];
        this.recipesSvc = recipesSvc;
        this.productsSvc = productsSvc;
        this.productResult(productsSvc);
    }
    productResult(){
        this.productsSvc.productsFinder()
        .then(
            d => {
                this.productList = d.data;
            }
        )
    }
    match(itemId){
        if (this.productsMatch[0].name === this.wordingMatch) {
            this.productsMatch.splice(0,1);
        }
        if (itemId !== undefined && this.productsId.indexOf(itemId) === -1) {
            this.productList.splice(0, 1);
            this.productsMatch.push(this.productList[itemId])
            this.productsId.push(itemId);
            console.log(this.productsMatch);
        }
        this.recipesSvc.recipesMatcher(this.productsId);
    }
}

matcherCtrl.$inject = ['recipesSvc', 'productsSvc'];

export default matcherCtrl;
