$(function() {
    $('.accord__block').on('click', function(event) {
        var element = $(event.target).data("id");
           
        if($(element).hasClass('hide') === false) {
            $(element).addClass('hide');
        } else {
            $(element).removeClass('hide');
        }
    })

    $(window).scroll(function (event) {
        if($(window).scrollTop() > 960) {
            $('.header').addClass('header--scroll');
        } else {
            $('.header').removeClass('header--scroll');
        }   
    });

    $('.burger__menu').on('click', function(event) {
        $('.burger__popup').toggleClass('active')
    })
})