const products = require('../../partials/products-list.html');

class productsDtv{
  constructor(){
    this.replace          = true;
    this.restrict         = 'A';
    this.template      = products;
  }
  link(scope, elem, attrs){
  }
}

export default productsDtv;
