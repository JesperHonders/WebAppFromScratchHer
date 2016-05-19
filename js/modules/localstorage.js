localstorage = (function(){

  function lsTest(){
      var test = 'test';
      try {
          localStorage.setItem(test, test);
          localStorage.removeItem(test);
          return true;
      } catch(e) {
          return false;
      }
  }

  function addToStorage(city){
    localStorage.setItem(city, city);
    console.log("added: "+city)
  }

  function listStorageItems(){
    keys = [];
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
    test: lsTest,
    add: addToStorage,
    list: listStorageItems
  }

}())
