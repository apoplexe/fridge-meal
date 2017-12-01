const opening = require('../../partials/opening.html');

class openingDtv{
    constructor($timeout){
        this.$timeout         = $timeout;
        this.replace          = true;
        this.restrict         = 'A';
        this.template         = opening;
        // this.topper();
    }
    link(scope, elem, attrs){
        const el = elem[0];
        const hammer = require('hammerjs');
        const ham = new Hammer.Manager(el);
        const Swipe = new Hammer.Swipe();

        let deltaX = 0;
        let deltaY = 0;

        ham.add(Swipe);
        // 
        // ham.on(
        //     'swipe',
        //     (e)=>{
        //         deltaX = deltaX + e.deltaX;
        //         deltaY = deltaY + e.deltaY;
        //
        //         let direction = e.offsetDirection;
        //         let translate3d = 'translate3d(' + (deltaX + deltaX/2) + 'px, ' + (deltaY + deltaY/2) + 'px, 0';
        //
        //         e.target.style.transform = translate3d;
        //
        //         e.target.classList.toggle('swift');
        //     }
        // );
    }
}

openingDtv.$inject = ['$timeout'];

export default openingDtv;
