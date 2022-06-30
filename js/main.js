$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header,.menu-list2, .menu-burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.btn-popup').click(function() {
        $('.popup').toggleClass('popup--shown');
        $('body').toggleClass('lock');
    });
    $('.popup__close').click(function() {
        $('.popup').removeClass('popup--shown');
        $('body').removeClass('lock');
    });
    $('.btn-hidden2').click(function() {
        this.innerHTML =
            (this.innerHTML === 'Показать полностью') ? this.innerHTML = 'Скрыть всё' : this.innerHTML = 'Показать полностью';
        $('.btn-hidden2,.show-all-profile2').toggleClass('active');
    });
        $('.btn-hidden').click(function() {
            this.innerHTML =
                (this.innerHTML === 'Показать полностью') ? this.innerHTML = 'Скрыть всё' : this.innerHTML = 'Показать полностью';
            $('.btn-hidden,.show-all-profile').toggleClass('active');
});
});

$(function(){
    $('.header__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        speed: 1000,
        fade: true
    });
});



