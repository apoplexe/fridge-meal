const header = require('../../partials/header.html');

class headerDtv{
  constructor(){
    this.restrict    = 'A';
    this.scope       = {};
    this.template = header;
  }
  controller($rootScope, $scope, getterSvc){
      $scope.shuffleRecipe = ()=>{
          getterSvc.get('recipes_match').then(
              d => {
                  let recipes = d.data.results;

                  $rootScope.$emit('recipe-refresh', recipes)
              }
          );
      }
  }
  link(scope, elem, attrs, ctrl){}
}

export default headerDtv;
