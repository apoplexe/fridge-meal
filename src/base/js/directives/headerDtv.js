const header = require('../../partials/header.html');

class headerDtv{
  constructor(){
    this.replace     = true;
    this.restrict    = 'A';
    this.scope       = {};
    this.template = header;
  }
  link(scope, elem, attrs){
  }
}

export default headerDtv;
