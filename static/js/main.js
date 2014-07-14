(function() {
    var App = {

        ui: {},

        initialize: function () {
            App.createElements();
            App.attachEvents();
        },

        createElements: function () {
          App.ui.nav_elements = $('.nav-element');
          App.ui.information = $('.information');
          App.ui.toc_elements = $('.toc-element');
          App.ui.toc = $('.toc');
        },

        attachEvents: function () {
            App.ui.nav_elements.on('click', App.onAnchorClick);
            App.ui.toc_elements.on('click', App.onAnchorClick);
        },

        close: function () {
            $('.active').removeClass('active');
            App.ui.information.addClass('hide');
            App.ui.toc.css('top', 0);
        },

        open: function (toggle_value) {
            var anchor = App.ui.nav_elements.filter('[data-toggle="' + toggle_value + '"]'),
                toc_element = App.ui.toc_elements.filter('[data-toggle="' + toggle_value + '"]'),
                information = App.ui.information.filter('[data-toggle="' + toggle_value + '"]'),
                top = anchor.position().top;

            toc_element.addClass('active');
            anchor.addClass('active');
            information.removeClass('hide');
            App.ui.toc.css('top', top);
        },

        onAnchorClick: function (e) {
            var anchor = $(e.currentTarget),
                toggle_value = anchor.attr('data-toggle');

            e.preventDefault();

            if (anchor.hasClass('active')) {
                App.close();
            } else {
                App.close();
                App.open(toggle_value);
            }
        }
    };

    $(document).ready(function() {
        App.initialize();
    });

})();