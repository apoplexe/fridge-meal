class recipesDtv{
  constructor(){
    this.bindToController = true;
    this.controller       = 'recipesCtrl as recipes';
    this.replace          = true;
    this.restrict         = 'A';
    // this.scope            = {};
    this.templateUrl      = './partials/recipes-list.html';
  }
  link(scope, elem, attrs){
  }
}

export default recipesDtv;
