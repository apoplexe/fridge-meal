const header = require('../../partials/header.html');

class headerDtv{
  constructor(){
    // this.replace     = true;
    this.restrict    = 'A';
    this.scope       = {};
    this.template = header;
  }
  link(scope, elem, attrs){
      console.log(elem);
      let logo = elem[0].children[0].children[0];

      logo.addEventListener(
          'mouseenter',
          ()=>{
              let toggleElem = document.querySelectorAll('.toggle-elem');

              for (var i = 0; i < toggleElem.length; i++) {
                  toggleElem[i].classList.remove('hide-this');
              }
          }
      );

      logo.addEventListener(
          'mouseleave',
          ()=>{
              let toggleElem = document.querySelectorAll('.toggle-elem');

              for (var i = 0; i < toggleElem.length; i++) {
                  toggleElem[i].classList.add('hide-this');
              }
          }
      );
  }
}

export default headerDtv;
