const main = require('../../partials/main.html');
class mainDtv{
  constructor(){
    // this.replace     = true;
    this.restrict    = 'A';
    this.scope       = {};
    this.template = main;
  }
  link(scope, elem, attrs){
  }
}

export default mainDtv;
