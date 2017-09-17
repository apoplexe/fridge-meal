const productsDtv = ()=> {
  let productsDtv = {
    bindToController: true,
    controller: 'productsCtrl',
    link: linkFunc,
    replace: true,
    restrict: 'EA',
    scope: {},
    templateUrl: './partials/products-list.html'
  }

  return productsDtv;

  function linkFunc(scope, elem){
    //dom manipulation
  };
}

export default productsDtv;
