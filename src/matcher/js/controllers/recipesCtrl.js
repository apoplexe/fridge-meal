export default class recipesCtrl{
  constructor(getRecipes, productListVariation){
    this.productListVariation = getRecipes.data.productList;
  }
  getRecipes(productListVariation){
    getRecipes.async(productListVariation).then(
      d => {
        this.recipes = d;
      }
    )
  }
}

recipesCtrl.$inject = ['getRecipes'];
