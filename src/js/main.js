
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
        image: 'src/images/d2.png',
    },
    {
        title: 'lorem piek',
        image: 'src/images/d3.png',
    },
    {
        title: 'lorem piek',
        image: 'src/images/d4.png',
    },
    {
        title: 'lorem piek',
        image: 'src/images/d5.png',
    },
    {
        title: 'lorem piek',
        image: 'src/images/d6.png',
    },
]

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
]

    data.forEach(function(item, index) {
        var x = $('.package').first().clone();
        $(x).find('h5').html(item.title);
        $(x).find('img').attr('src', item.image);
        $(x).appendTo('#packages');
    });

    menu.forEach(function(item, index) {
        var x = $('nav').find('.nav-item:nth-child(2)').clone()
        $(x).find('a').html(item.name);
        $(x).appendTo('.navbar-nav'); 
    });
});
