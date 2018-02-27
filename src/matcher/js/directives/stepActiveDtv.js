class stepActiveDtv{
    constructor(){
        this.restrict= 'A';
    }
    link(scope, elem, attrs){
        elem.on(
            'click',
            ()=>{
                elem[0].classList.toggle('step-item-active');
            }
        );
    }
}

export default stepActiveDtv;
