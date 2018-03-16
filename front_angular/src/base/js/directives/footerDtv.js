const footer = require('../../partials/footer.html');
class footerDtv{
  constructor(){
    // this.replace     = true;
    this.restrict    = 'A';
    this.scope       = {};
    this.template = footer;
  }
  link(scope, elem, attrs){
  }
}

export default footerDtv;
