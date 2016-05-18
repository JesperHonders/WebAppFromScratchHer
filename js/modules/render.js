var render = (function () {

  function city(data){
    var temp = data.main.temp - 272.15
    var city = {
      name: data.name,
      temp: Math.round(temp * 100) / 100+"°C",
      clouds: data.weather[0].description,
      windDeg: data.wind.deg,
      windSpeed: data.wind.speed
    }
    Transparency.render(document.getElementById('detail'), city);
    loader.stop();
  }
  return {
    city: city
  }
})();
