var loader = (function () {

  var loader = document.getElementById("loader");
  function start(){
    loader.classList.remove('none');
    console.log('loader started')
  }

  function stop() {
    loader.classList.add('none');
    console.log('loader stopt')
  }

  return {
    start: start,
    stop: stop
  }
})();
