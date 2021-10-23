const welcomeSwiper = new Swiper('.welcome__slider', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    navigation: {
        nextEl: '.welcome__slider-next',
        prevEl: '.welcome__slider-prev'
    },
    pagination: {
        el: '.welcome__slider-pagination',
        clickable: true,
    },
    loop: true,
});

welcomeSwiper.on('slideChangeTransitionStart', function () {
    let parent = document.querySelector('.swiper-slide-active');
    let child = parent.querySelector('.slide-number').innerHTML;
    document.querySelector('.welcome__slider-current').innerHTML = child;
});