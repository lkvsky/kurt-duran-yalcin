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
        },

        attachEvents: function () {
            App.ui.nav_elements.on('click', App.onNavElementClick);
        },

        close: function () {
            $('.active').removeClass('active');
            App.ui.information.addClass('hide');
        },

        onNavElementClick: function (e) {
            var anchor = $(e.currentTarget),
                toggle_value = anchor.attr('data-toggle'),
                information = App.ui.information.filter('[data-toggle="' + toggle_value + '"]');

            e.preventDefault();

            if (anchor.hasClass('active')) {
                App.close();
            } else {
                App.close();
                anchor.addClass('active');
                information.removeClass('hide');
            }
        }
    };

    $(document).ready(function() {
        App.initialize();
    });

})();