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
            box: $('main'),
            sections: {
                all: $('main > section'),
                start: $('#start'),
                services: $('#services'),
                about: $('#about'),
                portfolio: $('#portfolio'),
                contacts: $('#contacts'),
                getContentBlocks: function (section) {
                    var target = section.children('.content-block');
                    return {
                        box: $(target),
                        caption: target.children('.caption'),
                        content: target.children('.content'),
                        tagLine: target.children('#tagline')
                    };
                }
            }
        },
        responsive = function () {
            /**
             *  Common settings
             */
            var fullHeight = $(window).height(),
                fullWidth = $(window).width(),
                line = function (multiplier) {
                    var singleLine = fullHeight / 40;
                    return (parseFloat(multiplier) * singleLine) + 'px';
                },
                vert = function (multiplier) {
                    var singleVert = fullWidth / 20;
                    return (parseFloat(multiplier) * singleVert) + 'px';
                };
            /**
             * Header settings
             */
            header.box.css({
                'min-height': line(5)
            });
            header.menu.items.all.css({
                'font-size': line(1,2),
                'padding': fullWidth <= 640 ? line(0.5) : (fullWidth >= 1920 ? line(0.5) : line(1))
            });
            header.logo.css({
                'margin-left': fullWidth <= 640 ? (fullWidth <= 480 ? vert(1) : vert(2)) : vert(3)
            });
            header.menu.box.css({
                'margin-right': fullWidth <= 640 ? (fullWidth <= 480 ? vert(1) : vert(2)) : vert(3)
            });
            /**
             * Main settings - sections
             */
            main.sections.start.css({
                'width': fullWidth,
                'height': fullHeight
            });
            var startContent = main.sections.getContentBlocks(main.sections.start);
            startContent.box.css({
                'height': line(12.5),
                'width': fullWidth
            });
            startContent.tagLine.css({
                'font-size': line(2.5)
            });
            startContent.tagLine.children('.underline').css({
                'height': line(0.2),
                'width': vert(1.25)
            });
        };

    responsive();
    $(window).resize(responsive);
};

$(document).ready(main);