var api = (function () {

  var ApiKey = "c680ce8bf66f2607453af41493091874"
  function getCity(city) {
    loader.start();
    microAjax("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID="+ApiKey, function(resp) {
        loader.stop();
        var data = JSON.parse(resp);
        render.city(data)
    });
  }

  return {
    getCity: getCity
  };
})();
