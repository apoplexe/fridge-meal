class draggableDtv{
  constructor(){
    this.restrict = 'A';
  }
  link(scope, elem, attrs){
    const el = elem[0];

    el.draggable = true;

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
