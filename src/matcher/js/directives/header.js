const header = ()=> {
  let header = {
    link: linkFunc,
    replace: true,
    restrict: 'A',
    scope: {},
    templateUrl: 'partials/header.html'
  }

  return header;

  function linkFunc(scope, elem){
    //dom manipulation
  };
}

export default header;
