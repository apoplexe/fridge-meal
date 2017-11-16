
const recipes = require('../../partials/recipes-list.html');

class recipesDtv{
  constructor(){
    this.replace          = true;
    this.restrict         = 'A';
    this.template      = recipes;
  }
  link(scope, elem, attrs){
  }
}

export default recipesDtv;
