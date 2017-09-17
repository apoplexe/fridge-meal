const recipesDtv = ()=> {
  let recipesDtv = {
    bindToController: true,
    controller: 'recipesCtrl',
    link: linkFunc,
    replace: true,
    restrict: 'EA',
    scope: {},
    templateUrl: './partials/recipes-list.html'
  }

  return recipesDtv;

  function linkFunc(scope, elem){
    //dom manipulation
  };
}

export default recipesDtv;
