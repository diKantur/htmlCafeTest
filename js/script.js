$(document).ready(function () {
    $('.burger-menu_link-arrow').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.burger-menu > .menu').toggleClass('active');
        // $('nav>a').toggleClass('active');
    });

    var show = true;
    var countbox = ".graph";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.num').css('opacity', '1');
            $('.num').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 2
            },
            1300: {
                items: 3
            }
        }
    })

});