var loader = (function () {
  'use strict';
  
  var loader = document.getElementById("loader");
  function start(){
    loader.classList.remove('none');
  }

  function stop() {
    loader.classList.add('none');
  }

  return {
    start: start,
    stop: stop
  }
})();
