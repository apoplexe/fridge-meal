class recipesCtrl{
    constructor(recipesSvc, productsSvc){
        this.recipesSvc = recipesSvc;
        this.productsSvc = productsSvc;
        this.productList =  [];
        this.recipe = {name:'tarte à artichaut', products:'banane,choux-fleur'};
    }
    addRecipe(){
        this.recipesSvc.postRecipes(this.recipe).then((d)=>{
            console.log(d);
        })
        this.productsSvc.getProducts()
        .then(
            d => {
                this.productList = d.data;
            }
        )
    }
}

recipesCtrl.$inject = ['recipesSvc', 'productsSvc']

export default recipesCtrl;
