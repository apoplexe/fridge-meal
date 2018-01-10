class droppableDtv{
    constructor(){
        this.restrict = 'A';
    }
    link(scope, elem, attrs){
        const el = elem[0];

        elem.on(
            'drop',
            e => {
                let item = document.querySelector('#' + e.dataTransfer.getData('text'));
                let match;

                el.classList.remove('dropping');

                if (e.stopPropagation) {
                    e.stopPropagation();
                };

                if (item.parentElement.classList.contains('products-zone') && el.classList.contains('matcher-zone')) {
                    match = true;
                } else if (item.parentElement.classList.contains('matcher-zone') && el.classList.contains('products-zone')) {
                    match = false;
                }

                scope.vm.match(match, item);

                return false;
            }
        );

        elem.on(
            'dragover',
            e => {
                e.dataTransfer.dropEffect = 'move';
                e.preventDefault();

                el.classList.add('dropping');

                return false;
            }
        );

        elem.on(
            'dragenter',
            e => {
                el.classList.add('dropping');
                return false;
            }
        );

        elem.on(
            'dragleave',
            e => {
                el.classList.remove('dropping');

                return false;
            }
        );
    }
}

export default droppableDtv;
