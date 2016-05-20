var routes = (function () {
  'use strict';

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
      'home': function() {
        sections.toggle('#home')
      },
      'city/:id': function(id) {
        sections.toggle('#detail')
        api.getCity(id)
        utils.buttons()
      },
      'favorites': function() {
        sections.toggle('#favorites')
        render.storageItems()
        events.swipeInit()
      }
    });
  }

  return {
    init: init,
  }
})();
