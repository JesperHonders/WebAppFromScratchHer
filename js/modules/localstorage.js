localstorage = (function(){
  'use strict';

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
  }

  function removeFromStorage(city){
    localStorage.removeItem(city);
  }


  return {
    test: lsTest,
    add: addToStorage,
    remove: removeFromStorage
  }

}())
