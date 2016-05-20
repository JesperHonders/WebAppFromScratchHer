var events = (function () {
  'use strict';

    function init(){
      document.getElementById("citySubmit").addEventListener("click", function(event){
        event.preventDefault()
          window.location.hash = "city/"+document.getElementById('cityInput').value
      });

      document.getElementById("favoriteAB").addEventListener("click", function(event){
        var wholeHash = window.location.hash,
        splittedHash = wholeHash.split("/");
        localstorage.add(splittedHash[1]);
        document.getElementById('favoriteRB').style.display = 'block';
        document.getElementById('favoriteAB').style.display = 'none';
      });

      document.getElementById("favoriteRB").addEventListener("click", function(event){
        var wholeHash = window.location.hash,
        splittedHash = wholeHash.split("/");
        localstorage.remove(splittedHash[1]);
        document.getElementById('favoriteRB').style.display = 'none';
        document.getElementById('favoriteAB').style.display = 'block';
      });
      swipeSupport();
    }

    function swipeSupport(){
      var detailpage = document.getElementById('detail');
      var homepage = document.getElementById('home');
      var favoritepage = document.getElementById('favorites')
      var left = new Hammer(detailpage);
       left.on("swiperight", function(ev) {
           window.location.hash = 'home';
       });
       var favorites = new Hammer(detailpage);
        favorites.on("swiperight", function(ev) {
            window.location.hash = 'home';
        });
       var right = new Hammer(homepage);
        right.on("swipeleft", function(ev) {
          console.log('joeee')
            window.location.hash = 'favorites';
        });
    }

    return {
      init: init,
      swipeInit: swipeSupport
    }
  })();
