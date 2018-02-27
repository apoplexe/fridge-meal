const products = require('../../partials/products-list.html');

class productsDtv{
  constructor(){
    this.restrict = 'A';
    this.template = products;
  }
}

export default productsDtv;
