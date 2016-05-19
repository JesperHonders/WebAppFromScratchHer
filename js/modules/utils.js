utils = (function(){

  function showRightFavoriteButton(){
    var wholeHash = window.location.hash,
    splittedHash = wholeHash.split("/");
    for (var key in localStorage){
      if (key === splittedHash[1]){
        var found = true
      }
    }
    if (found === true){
      document.getElementById('favoriteAB').style.display = 'none'
      document.getElementById('favoriteRB').style.display = 'block'
    } else {
      document.getElementById('favoriteRB').style.display = 'none'
      document.getElementById('favoriteAB').style.display = 'block'
    }
    console.log(found)
  }


  return{
    buttons: showRightFavoriteButton
  }
}())
