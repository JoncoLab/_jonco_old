'use strict';

const main = function () {
    const header = {
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
                    let target = section.children('.content-block');
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
            let fullHeight = $(window).height(),
                fullWidth = $(window).width(),
                line = function (multiplier) {
                    let singleLine = fullHeight / 40;
                    return (parseFloat(multiplier) * singleLine) + 'px';
                },
                vert = function (multiplier) {
                    let singleVert = fullWidth / 20;
                    return (parseFloat(multiplier) * singleVert) + 'px';
                };
            /**
             * Header settings
             */
            header.box.css({
                'min-height': line(5)
            });
            header.menu.items.all.css({
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

            let startContent = main.sections.getContentBlocks(main.sections.start);
            startContent.box.css({
                'height': line(12.5),
                'width': fullWidth
            });
            startContent.tagLine.children('.underline').css({
                'height': line(0.2),
                'width': vert(1.25)
            });
        },
        feedbackForm = main.sections.contacts.find('#feedback-form');

    feedbackForm.submit(function (event) {
        let form = $(this),
            name = form.find('#name').val(),
            email = form.find('#email').val(),
            subject = form.find('#subject').val(),
            message = form.find('#message').val();

        event.preventDefault();
        $.ajax({
            url: "https://us-central1-joncolab-pro.cloudfunctions.net/sendMail",
            method: 'POST',
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message
            },
            dataType: 'text',
            beforeSend: function () {
                alert(name + "\r\n" + email + "\r\n" + subject + "\r\n" + message);
            },
            success: function (dat) {
                alert("Success!\r\nServer responded:\r\n" + dat);
            },
            error: function (err) {
                alert("ERROR!\r\nServer responded:\r\n" + err.name + ' - ' + err.message);
            },
            complete: function () {
                alert("completed");
            }
        });
    });

    responsive();
    $(window).resize(responsive);
};

$(document).ready(main);