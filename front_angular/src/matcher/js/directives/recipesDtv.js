
const recipes = require('../../partials/recipes-list.html');

class recipesDtv{
  constructor(){
    this.restrict         = 'A';
    this.template      = recipes;
  }
}

export default recipesDtv;
