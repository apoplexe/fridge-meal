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
                let list = el.classList.contains('matcher-zone') ? 'products' : 'basket';
                let id = parseInt(e.dataTransfer.getData('id'))

                el.classList.remove('dropping');

                try {
                    e.stopPropagation();
                } catch (e) {}

                scope.vm.move(id, list);

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
