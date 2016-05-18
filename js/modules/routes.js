var routes = (function () {

  var select = {
      one: function (selector) {
          return document.querySelector(selector);
      },
      all: function (selector) {
          return document.querySelectorAll(selector);
      }
  }

  var sections = {
      toggle: function (hash) {
          var content = select.all('.content')
          for (var i = 0; i < content.length; i++) {
              content[i].classList.add('none')
          }
          select.one(hash).classList.remove('none')
      }
  }

  function init () {
    routie({
      '/': function() {
        sections.toggle('#home')
      },
      'city/:id': function(id) {
        sections.toggle('#detail')
        api.getCity(id)
      }
    });
  }

  return {
    init: init,
  }
})();
