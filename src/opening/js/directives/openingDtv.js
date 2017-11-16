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
        let promise;

        this.topper();

        window.addEventListener(
            'resize',
            () => {
                this.$timeout.cancel(promise);

                promise = this.$timeout(
                    () => {
                        this.topper();
                    },
                    100
                );
            }
        )

        const el = elem[0];
        const hammer = require('hammerjs');
        const ham = new Hammer.Manager(el);
        const Swipe = new Hammer.Swipe();

        let deltaX = 0;
        let deltaY = 0;

        ham.add(Swipe);

        ham.on(
            'swipe',
            (e)=>{
                deltaX = deltaX + e.deltaX;
                deltaY = deltaY + e.deltaY;

                let direction = e.offsetDirection;
                let translate3d = 'translate3d(' + (deltaX + deltaX/2) + 'px, ' + (deltaY + deltaY/2) + 'px, 0';

                e.target.style.transform = translate3d;

                e.target.classList.toggle('swift');
            }
        )
    }
    topper(){
        const topper   = document.querySelector('#topper');
        const ctx      = topper.getContext('2d') || {};

        const degrade  = ctx.createRadialGradient(150,150,0,150,150,150);
        const degrade2 = ctx.createRadialGradient(0,0,150,0,0,0);
        const degrade3 = ctx.createRadialGradient(0,50,150,0,0,0);

        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        let ctxw = ctx.canvas.width;
        let ctxh = ctx.canvas.height;

        degrade.addColorStop(0, 'rgba(0,0,0,1)');
        degrade.addColorStop(1, 'rgba(0,0,0,0)');
        degrade2.addColorStop(0, 'rgba(1,0,0,1)');
        degrade2.addColorStop(1, 'rgba(0,0,0,0)');
        degrade3.addColorStop(0, 'rgba(0,0,0,1)');
        degrade3.addColorStop(1, 'rgba(0,0,0,0.5)');

        ctx.beginPath();
        ctx.moveTo(25, ctxh);

        ctx.lineTo(5, ctxh - 5);
        ctx.lineTo(0, ctxh - 25);
        ctx.lineTo(0, 25);


        ctx.lineTo(5, 5);
        ctx.lineTo(25, 0);
        ctx.lineTo(ctxw - 25, 0);

        ctx.lineTo(ctxw - 5, 5);
        ctx.lineTo(ctxw, 25);
        ctx.lineTo(ctxw, ctxh - 25);

        ctx.lineTo(ctxw -5, ctxh - 5);
        ctx.lineTo(ctxw - 25, ctxh);
        ctx.lineTo(25, ctxh);

        ctx.fillStyle = degrade;
        ctx.fillStyle = degrade2;
        ctx.fillStyle = degrade3;

        ctx.fill();

        ctx.font = '1.5em Arial';
        ctx.fillStyle = '#fff'
        ctx.fillText('Cook From The Fridge', 50, 150);
    }
}

openingDtv.$inject = ['$timeout'];

export default openingDtv;
