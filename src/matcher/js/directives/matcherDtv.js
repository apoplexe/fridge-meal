const matcher = require('../../partials/matcher.html');

class matcherDtv{
    constructor(){
        this.replace     = true;
        this.restrict    = 'A';
        this.template = matcher;
    }
    link(scope, elem, attrs){
        elem.on('click', ()=>{
        })
    }
}

export default matcherDtv;
