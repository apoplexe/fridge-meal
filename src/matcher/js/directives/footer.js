const footer = ()=> {
  let footer = {
    link: linkFunc,
    replace: true,
    restrict: 'A',
    scope: {},
    templateUrl: 'partials/footer.html'
  }

  return footer;

  function linkFunc(scope, elem){
    //dom manipulation
  };
}

export default footer;
