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
const videoSlider = new Swiper('.video__slider', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    thumbs: {
        swiper: {
            el: '.video__slider-mini',
            slidesPerView: 2,
            loop: true,
            spaceBetween: 30,
            breakpoints: {
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40
                }
            }
        }
    }
});

let videoSlides = document.querySelectorAll('.video__slider-slide');

videoSlides.forEach(function (item) {
    if (item.classList.contains('swiper-slide-active')) {
        let video, display, progress;
        video = item.querySelector('.video-player');
        progress = item.querySelector('#progress');
        progress.onclick = videoRewind;
        video.ontimeupdate = progressUpdate;
        item.querySelector('.play').onclick = play;
        item.querySelector('.pause').onclick = pause;
        item.querySelector('.play-pause').onclick = play;
        item.querySelector('.pause-play').onclick = pause;
        item.querySelector('.mute').onclick = mute;
        item.querySelector('.unmute').onclick = unmute;
        item.querySelector('#volume').oninput = volume;

        item.querySelector('#volume').addEventListener("change", function() {
            item.querySelector('.mute__wrapper').classList.add('active');
            item.querySelector('.unmute__wrapper').classList.remove('active');
        });

        function play() {
            video.play();
            item.querySelector('.play__wrapper').classList.remove('active');
            item.querySelector('.play-pause').classList.remove('active');
            item.querySelector('.pause-play').classList.add('active');
            item.querySelector('.pause__wrapper').classList.add('active');
        }

        function pause() {
            video.pause();
            item.querySelector('.pause__wrapper').classList.remove('active');
            item.querySelector('.play-pause').classList.add('active');
            item.querySelector('.pause-play').classList.remove('active');
            item.querySelector('.play__wrapper').classList.add('active');
        }

        function volume() {
            let v = this.value;
            console.log(v);
            video.volume = v / 100;
        }

        function progressUpdate() {
            console.log(video.duration);
            console.log(video.currentTime);
            let d = video.duration;
            let c = video.currentTime;
            progress.value = (100 * c) / d;
            if (c == d) {
                item.querySelector('.pause__wrapper').classList.remove('active');
                item.querySelector('.play__wrapper').classList.add('active');
            }
        }

        function videoRewind() {
            let w = this.offsetWidth;
            let o = event.offsetX;
            this.value = 100 * o / w;
            video.currentTime = video.duration * (o / w);
        }

        function mute() {
            video.volume = 0;
            item.querySelector('#volume').value = 0;
            item.querySelector('.mute__wrapper').classList.remove('active');
            item.querySelector('.unmute__wrapper').classList.add('active');
        }

        function unmute() {
            video.volume = 0.5;
            item.querySelector('#volume').value = 50;
            item.querySelector('.mute__wrapper').classList.add('active');
            item.querySelector('.unmute__wrapper').classList.remove('active');
        }
    }
});

videoSlider.on('slideChangeTransitionStart', function () {
    videoSlides.forEach(function (item) {
        video = item.querySelector('.video-player');
        video.pause();
        item.querySelector('.pause__wrapper').classList.remove('active');
        item.querySelector('.play__wrapper').classList.add('active');
        item.querySelector('.pause-play').classList.remove('active');
        item.querySelector('.play-pause').classList.add('active');
        if (item.classList.contains('swiper-slide-active')) {
            let video, display, progress;
            video = item.querySelector('.video-player');
            progress = item.querySelector('#progress');
            progress.onclick = videoRewind;
            video.ontimeupdate = progressUpdate;
            item.querySelector('.play').onclick = play;
            item.querySelector('.pause').onclick = pause;
            item.querySelector('.play-pause').onclick = play;
            item.querySelector('.pause-play').onclick = pause;
            item.querySelector('.mute').onclick = mute;
            item.querySelector('.unmute').onclick = unmute;
            item.querySelector('#volume').oninput = volume;

            item.querySelector('#volume').addEventListener("change", function() {
                item.querySelector('.mute__wrapper').classList.add('active');
                item.querySelector('.unmute__wrapper').classList.remove('active');
            });

            function play() {
                video.play();
                item.querySelector('.play__wrapper').classList.remove('active');
                item.querySelector('.pause__wrapper').classList.add('active');
                item.querySelector('.pause-play').classList.add('active');
                item.querySelector('.play-pause').classList.remove('active');
            }

            function pause() {
                video.pause();
                item.querySelector('.pause__wrapper').classList.remove('active');
                item.querySelector('.play__wrapper').classList.add('active');
                item.querySelector('.pause-play').classList.remove('active');
                item.querySelector('.play-pause').classList.add('active');
            }

            function volume() {
                let v = this.value;
                console.log(v);
                video.volume = v / 100;
            }

            function progressUpdate() {
                console.log(video.duration);
                console.log(video.currentTime);
                let d = video.duration;
                let c = video.currentTime;
                progress.value = (100 * c) / d;
                if (c == d) {
                    item.querySelector('.pause__wrapper').classList.remove('active');
                    item.querySelector('.play__wrapper').classList.add('active');
                }
            }

            function videoRewind() {
                let w = this.offsetWidth;
                let o = event.offsetX;
                this.value = 100 * o / w;
                video.currentTime = video.duration * (o / w);
            }

            function mute() {
                video.volume = 0;
                item.querySelector('#volume').value = 0;
                item.querySelector('.mute__wrapper').classList.remove('active');
                item.querySelector('.unmute__wrapper').classList.add('active');
            }

            function unmute() {
                video.volume = 0.5;
                item.querySelector('#volume').value = 50;
                item.querySelector('.mute__wrapper').classList.add('active');
                item.querySelector('.unmute__wrapper').classList.remove('active');
            }
        }
    });
});

