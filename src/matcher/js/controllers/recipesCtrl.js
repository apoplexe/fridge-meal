class recipesCtrl{
  constructor(recipesSvc){
    this.recipesList = [];
    this.productList = [];
    this.recipesResult(recipesSvc);
  }
  recipesResult(recipesSvc) {
    let p;

    if (this.productList.length > 0) {
      p = this.productList;
    }

    recipesSvc.recipesMatcher(p).then(
      d => {
        this.recipesList = d.data;
      }
    )
  }
}

recipesCtrl.$inject = ['recipesSvc'];

export default recipesCtrl;
