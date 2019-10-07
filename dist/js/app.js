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
            image: 'https://source.unsplash.com/200x280/?nature,water',
        },
        {
            title: 'lorem piek',
            image: 'https://source.unsplash.com/200x280/?nature,water',
        },
        {
            title: 'lorem piek',
            image: 'https://source.unsplash.com/200x280/?nature,water',
        },
        {
            title: 'lorem piek',
            image: 'https://source.unsplash.com/200x280/?nature,water',
        },
        {
            title: 'lorem piek',
            image: 'https://source.unsplash.com/200x280/?nature,water',
        },
        {
            title: 'lorem piek',
            image: 'https://source.unsplash.com/200x280/?nature,water',
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
        {name: 'DESTINATIONS', total: 399, image: 'dist/images/icon-map.png'},
        {name: 'TOUR PACK', total: 149, image: 'dist/images/icon-box.png'},
        {name: 'HAPPY CLIENTS', total: 2500, image: 'dist/images/icon-smile.png'},
        {name: 'HOURS SUPPORT', total: 5600, image: 'dist/images/icon-phone.png'},
    ];

    var topDeals = [
        {name: 'LOREM IPSUM IS ABC', price: 299, discount: 39, image: 'dist/images/items-to-discover-things.jpg'},
        {name: 'LOREM IPSUM IS DEF', price: 399, discount: 45, image: 'dist/images/icon-box.png'},
        {name: 'LOREM IPSUM IS DEF', price: 399, discount: 45, image: 'dist/images/icon-box.png'},
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
        $(x).appendTo('#packages').hover(function () {
            $(this).find('.card-body').slideToggle();    
        }, function () {
            $(this).find('.card-body').slideToggle();    
                // out
            }
        );;
    });
    $('.package').first().remove();
    
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
    $('.top-deal').first().remove();

    
    service.forEach(function(item, index) {
        var x = $('#services').find('.service').first().clone()
        $(x).find('img').attr('src', item.image);
        $(x).find('h3').html(item.total)
        $(x).find('span').html(item.name)
        $(x).appendTo('#services');
    });
    $('.service').first().remove();

    service.forEach(function(item, index) {
        var x = $('.swiper-wrapper').find('.swiper-slide').first().clone()
        $(x).appendTo('.swiper-wrapper');
    });

    // Click Animation
    // $('a').click(function(){
    //     $('html, body').animate({
    //         scrollTop: $( $.attr(this, 'href') ).offset().top
    //     }, 700);
    //     return false;
    // });
});

