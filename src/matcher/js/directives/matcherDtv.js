class matcherDtv{
  constructor(){
    this.replace     = true;
    this.restrict    = 'A';
    this.templateUrl = './partials/matcher.html';
  }
  link(scope, elem, attrs){
    elem.on('click', ()=>{
      console.log(scope);
    })
  }
}

export default matcherDtv;
