function ibg() {
    $.each($(".ibg"), (function (t, a) {
        $(this).find("img").length > 0 && $(this).css("background-image", 'url("' + $(this).find("img").attr("src") + '")')
    }))
}
if (document.documentElement.clientWidth <= 1024) {
	let iconMenu = document.querySelector('.header__menu-icon'),
	menuBody = document.querySelector('.header__menu-body'),
	welcomeTitle = document.querySelector('.welcome__title-wrapper'),
	menuLink = document.querySelector('.header__menu-link'),
	body = document.querySelector('body');

	iconMenu.onclick = function() {
		iconMenu.classList.toggle('_menu-active');
		menuBody.classList.toggle('_menu-active');
		welcomeTitle.classList.toggle('_menu-active')
		body.classList.toggle('_lock');
	}

	menuLink.onclick = function() {
		iconMenu.classList.toggle('_menu-active');
		menuBody.classList.toggle('_menu-active');
		welcomeTitle.classList.toggle('_menu-active')
		body.classList.toggle('_lock');
	}
}
const swiper = new Swiper('.swiper', {
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

swiper.on('slideChangeTransitionStart', function () {
    let parent = document.querySelector('.swiper-slide-active');
    let child = parent.querySelector('.slide-number').innerHTML;
    document.querySelector('.welcome__slider-current').innerHTML = child;
});
const slider = document.querySelector("#image-comparison-slider");
const sliderImgWrapper = document.querySelector("#image-comparison-slider .img-wrapper");
const sliderHandle = document.querySelector("#image-comparison-slider .handle");

slider.addEventListener("mousemove", sliderMouseMove);
slider.addEventListener("touchmove", sliderMouseMove);

function sliderMouseMove(event) {

  if(isSliderLocked) return;

  const sliderLeftX = slider.offsetLeft;
  const sliderWidth = slider.clientWidth;
  const sliderHandleWidth = sliderHandle.clientWidth;

  let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
  if(mouseX < 0) mouseX = 0;
  else if(mouseX > sliderWidth) mouseX = sliderWidth;

  sliderImgWrapper.style.width = `${((1 - mouseX/sliderWidth) * 100).toFixed(4)}%`;
  sliderHandle.style.left = `calc(${((mouseX/sliderWidth) * 100).toFixed(4)}% - ${sliderHandleWidth/2}px)`;
}

let isSliderLocked = false;

slider.addEventListener("mousedown", sliderMouseDown);
slider.addEventListener("touchstart", sliderMouseDown);
slider.addEventListener("mouseup", sliderMouseUp);
slider.addEventListener("touchend", sliderMouseUp);
slider.addEventListener("mouseleave", sliderMouseLeave);

function sliderMouseDown(event) {
  if(isSliderLocked) isSliderLocked = false;
  sliderMouseMove(event);
}

function sliderMouseUp() {
  if(!isSliderLocked) isSliderLocked = true;
}

function sliderMouseLeave() {
  if(isSliderLocked) isSliderLocked = false;
}

