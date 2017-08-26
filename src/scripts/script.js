var main = function () {
    var header = {
        box: $('header'),
        logo: $('#logo'),
        menu: {
            box: $('#menu'),
            items: {
                all: $('.menu-item'),
                start: $('#start-button'),
                services: $('#services-button'),
                about: $('#about-button'),
                portfolio: $('#portfolio-button'),
                contacts: $('#contacts-button')
            }
        }
    },
        main = {
        box: $('main')
        },
        responsive = function () {
            /**
             * Header settings
             */
            var headerHeight = header.box.height(),
                targetMenuFontSize = (headerHeight / 6) + 'px';
            header.menu.items.all.css({
                'font-size': targetMenuFontSize
            });
        };

    responsive();
    $(window).resize(responsive);
};

$(document).ready(main);