class headerDtv{
  constructor(){
    this.replace     = true;
    this.restrict    = 'A';
    this.scope       = {};
    this.templateUrl = './partials/header.html';
  }
  link(scope, elem, attrs){
  }
}

export default headerDtv;
