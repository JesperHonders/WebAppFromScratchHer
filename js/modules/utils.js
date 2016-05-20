utils = (function(){
  'use strict';

  function showRightFavoriteButton(){
    var wholeHash = window.location.hash,
    splittedHash = wholeHash.split("/"),
    keys = [];

    // ZONDER Underscore
    // for (var key in localStorage){
    //   if (key === splittedHash[1]){
    //     var found = true
    //   }
    // }

    // Met underscore
    for (var key in localStorage){
      keys.push(key)
    }

    var found = _.contains(keys, splittedHash[1]);


    if (found === true){
      document.getElementById('favoriteAB').style.display = 'none'
      document.getElementById('favoriteRB').style.display = 'block'
    } else {
      document.getElementById('favoriteRB').style.display = 'none'
      document.getElementById('favoriteAB').style.display = 'block'
    }
  }


  return{
    buttons: showRightFavoriteButton
  }
}())
