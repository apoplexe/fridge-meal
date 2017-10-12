class recipesCtrl{
    constructor(recipesSvc){
        this.recipesSvc = recipesSvc;
        this.recipe = {name:'artichaut'};
        this.test = 'jojo bernard';
    }
    addRecipe(){
        this.recipesSvc.postRecipes(this.recipe).then((d)=>{
            console.log(d);
        })
    }
}

recipesCtrl.$inject = ['recipesSvc']

export default recipesCtrl;
