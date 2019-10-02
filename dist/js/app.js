// require('bootstrap');

$(document).ready(function () {
    $(window).scroll(function () { 
        if ($(document).scrollTop() > 50) {
            // $('nav').addClass('p-2 bg-golden shadow-sm').removeClass('p-4 bg-transparent')
            $('nav').hide()
            
        } else {
            $('nav').show()
            // $('nav').addClass('p-4 bg-transparent').removeClass('p-2 bg-golden shadow-sm')
        }
    });

    function resize() {
        if ($(window).width() <= 768) {
            $('.package').removeClass('px-2');
        } else {
            $('.package').addClass('px-2');
        }
    }

    resize();
    $(window).resize(resize);

    for (let index = 0; index < 5; index++) {
        const gallery = $('.gallery').first().clone();
        $(gallery).appendTo('#galleries');
    }

    var data = [
        {
            title: 'lorem piek nama',
            image: 'dist/images/d2.png',
        },
        {
            title: 'lorem piek',
            image: 'dist/images/d3.png',
        },
        {
            title: 'lorem piek',
            image: 'dist/images/d4.png',
        },
        {
            title: 'lorem piek',
            image: 'dist/images/d5.png',
        },
        {
            title: 'lorem piek',
            image: 'dist/images/d6.png',
        },
    ];

    var menu = [
        {
            name: 'Tours',
            link: ''
        },
        {
            name: 'Hotel',
            link: ''
        },
        {
            name: 'Rental',
            link: ''
        },
        {
            name: 'Blog',
            link: ''
        },
        {
            name: 'Contact',
            link: ''
        },
    ];

    var service = [
        {name: 'TOUR PACK', total: 100, image: 'dist/images/icon-box.png'},
        {name: 'HAPPY CLIENTS', total: 250, image: 'dist/images/icon-smile.png'},
        {name: 'HOURS SUPPORT', total: 24, image: 'dist/images/icon-phone.png'},
    ];

    var topDeals = [
        {name: 'LOREM IPSUM IS SIMPLY', price: 299, discount: 39, image: 'dist/images/items-to-discover-things.jpg'},
        {name: 'LOREM IPSUM IS HARD', price: 399, discount: 45, image: 'dist/images/icon-box.png'},
    ];

    
    menu.forEach(function(item, index) {
        var x = $('nav').find('.nav-item:nth-child(2)').clone()
        $(x).find('a').html(item.name);
        $(x).appendTo('.navbar-nav'); 
    });

    data.forEach(function(item, index) {
        var x = $('.package').first().clone();
        $(x).find('h5').html(item.title);
        $(x).find('img').attr('src', item.image);
        $(x).appendTo('#packages');

    });
    
    service.forEach(function(item, index) {
        var x = $('#services').find('.service').first().clone()
        $(x).find('img').attr('src', item.image);
        $(x).find('h3').html(item.total)
        $(x).find('span').html(item.name)
        $(x).appendTo('#services');
    });
    
    topDeals.forEach(function(item, index) {
        var x = $('.top-deal').first().clone();
        $(x).find('.price').html(item.price);
        $(x).find('.discount').html(item.discount);
        $(x).find('.title').html(item.name);
        $(x).appendTo('#top-deals').hover(function () {
            $(this).find('.info-discount').slideToggle();
            $(this).find('.info').slideToggle();
        }, function () {
            $(this).find('.info-discount').slideToggle();
            $(this).find('.info').slideToggle(); 
        });
    });

    $('.top-deal').hover(function () {
        $(this).find('.info-discount').slideToggle();
        $(this).find('.info').slideToggle();
    }, function () {
        $(this).find('.info-discount').slideToggle();
        $(this).find('.info').slideToggle();
        }
    );

    // Click Animation
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 700);
        return false;
    });

    // Count
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});
