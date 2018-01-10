class draggableDtv{
  constructor(){
    this.restrict = 'A';
  }
  link(scope, elem, attrs){
    const el = elem[0];

    el.draggable = true;

    elem.on(
        'dblclick',
        e => {
            let id = e.path[1].id;
            let pre_id = id.split('-')[0];

            if (pre_id === 'product') {
                scope.vm.match(true, id);
            } else {
                scope.vm.match(false, id);
            }

            return false;
        }
    )

    elem.on(
      'dragstart',
      e => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text', attrs.id);

        el.classList.add('dragged');

        return false;
      }
    );

    elem.on(
      'dragend',
      e => {
        el.classList.remove('dragged');

        return false;
      }
    );
  }
}

export default draggableDtv;
