(function() {
  var App = {

    CONTENT_MAX: 9,

    CONTENT_MIN: 1,

    initialize: function() {
      var self = this;

      self.createElements();
      self.attachEvents();
    },

    createElements: function() {
      var self = this;

      self.grid = $('.grid');
      self.content = $('.content');
      self.tiles = $('.tile');
      self.info_elements = $('.info');
      self.exit = $('.exit');
      self.next = $('.next');
      self.back = $('.back');
    },

    attachEvents: function() {
      var self = this;

      self.tiles.click(self.onTileClick.bind(self));
      self.exit.click(self.onExitClick.bind(self));
      self.next.click(self.onNextClick.bind(self));
      self.back.click(self.onBackClick.bind(self));
    },

    onTileClick: function(e) {
      var self = this,
          target = $(e.target).closest('.tile');

      self.active_content = target.attr('data-content');
      self.grid.addClass('hide');
      self.content.removeClass('hide');
      self.info_elements.filter('[data-content="' + self.active_content + '"]').removeClass('hide');
    },

    onExitClick: function(e) {
      var self = this;

      self.info_elements.addClass('hide');
      self.content.addClass('hide');
      self.grid.removeClass('hide');
    },

    onNextClick: function() {
      var self = this,
          active_content = parseInt(self.active_content, 10),
          next_content = active_content + 1;

      self.info_elements.addClass('hide');

      if (active_content && next_content <= self.CONTENT_MAX) {
        self.active_content = next_content;
      } else {
        self.active_content = self.CONTENT_MIN;
      }

      self.info_elements.filter('[data-content="' + self.active_content + '"]').removeClass('hide');
    },

    onBackClick: function() {
      var self = this,
          active_content = parseInt(self.active_content, 10),
          next_content = active_content - 1;

      self.info_elements.addClass('hide');

      if (active_content && next_content >= self.CONTENT_MIN) {
        self.active_content = next_content;
      } else {
        self.active_content = self.CONTENT_MAX;
      }

      self.info_elements.filter('[data-content="' + self.active_content + '"]').removeClass('hide');
    }

  };

  $(document).ready(function() {
    App.initialize();
  });

})();