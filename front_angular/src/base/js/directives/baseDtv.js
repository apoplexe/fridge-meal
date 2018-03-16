const base = require('../../partials/base.html');

class baseDtv{
  constructor(){
    this.replace     = true;
    this.restrict    = 'A';
    this.scope       = {};
    this.template = base;
  }
  link(scope, elem, attrs){
  }
}

export default baseDtv;
