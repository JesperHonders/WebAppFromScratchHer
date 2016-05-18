var events = (function () {
    function init(){
      document.getElementById("citySubmit").addEventListener("click", function(event){
        event.preventDefault()
          window.location.hash = "city/"+document.getElementById('cityInput').value
      });
    }

    return {
      init: init
    }
  })();
