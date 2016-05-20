var render = (function () {
  'use strict';

  function city(data){
    var temp = data.main.temp - 272.15,
    city = {
      name: "The weather in "+data.name,
      temp: Math.round(temp * 100) / 100+"°C",
      clouds: "Overcast: "+data.weather[0].description,
      windDeg: data.wind.deg,
      windSpeed: data.wind.speed
    };
    Transparency.render(document.getElementById('detail'), city);

  }

  function StorageItems(){
    var keys = [],
    cities = [];
    for (var key in localStorage){
      keys.push(key)
    }

    for (var i = 0 ;i < keys.length; i++){
			var object = {
        name: keys[i]
		},
      directives = {
        link: {
                href: function(params) {
                    return "#city/" + this.name
                }
            }
      }
      cities.push(object)
	}
  Transparency.render(document.getElementById('favorites'), cities, directives);
  }

  return {
    city: city,
    storageItems: StorageItems
  }
})();
