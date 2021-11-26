function ibg() {
    $.each($(".ibg"), (function (t, a) {
        $(this).find("img").length > 0 && $(this).css("background-image", 'url("' + $(this).find("img").attr("src") + '")')
    }))
}
if (document.documentElement.clientWidth <= 1024) {
	let iconMenu = document.querySelector('.header__menu-icon'),
	menuBody = document.querySelector('.header__menu-body'),
	welcomeTitle = document.querySelector('.welcome__title-wrapper'),
	menuLink = document.querySelectorAll('.header__menu-link'),
	body = document.querySelector('body');

	iconMenu.onclick = function() {
		iconMenu.classList.toggle('_menu-active');
		menuBody.classList.toggle('_menu-active');
		welcomeTitle.classList.toggle('_menu-active')
		body.classList.toggle('_lock');
	}

	menuLink.forEach(function(item) {
		item.addEventListener("click", function() {
			iconMenu.classList.toggle('_menu-active');
			menuBody.classList.toggle('_menu-active');
			welcomeTitle.classList.toggle('_menu-active')
			body.classList.toggle('_lock');
		})
	});
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
    navigation: {
        nextEl: '.video__slider-next',
        prevEl: '.video__slider-prev'
    },
    pagination: {
        el: '.video__slider-pagination',
        clickable: true,
    },
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
let galleryItems = document.querySelectorAll('.gallery__item');

window.addEventListener('scroll', onScroll);
function onScroll(params) {
    for (let i = 0; i < galleryItems.length; i++) {
        const galleryItem = galleryItems[i];
        const galleryItemHeight = galleryItem.offsetHeight;
        const galleryItemOffset = offset(galleryItem).top;
        const galleryStart = 4;

        let galleryItemPoint = window.innerHeight - galleryItemHeight / galleryStart;
        if (galleryItemHeight > window.innerHeight) {
            galleryItemPoint = window.innerHeight - window.innerHeight / galleryStart
        }

        if ((pageYOffset > galleryItemOffset - galleryItemPoint) && pageYOffset < (galleryItemOffset + galleryItemHeight)) {
            galleryItem.classList.add('_active');
        }
        else {
            galleryItem.classList.remove('_active');
        }
    }
}

function offset(el) {
    const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left +scrollLeft}
}

const gallery = document.querySelectorAll(".gallery__item");
shuffle(gallery);

for (let i = 0; i < gallery.length; i++) {
    let img = gallery[i].firstElementChild;
  }

function shuffle(items) {
    const arr = Array.from(Array(15), (e, i) => i + 1);
    arr.sort(() => Math.random() - 0.5);
    for (let i = 0; i < arr.length; i++) {
      const img = document.createElement("img");
      img.src = `./img/gallery/galery${arr[i]}.webp`;
      img.alt = `gallery${arr[i]}`;
      img.className = "gallery__item-image";
      items[i].append(img);
    }
  }
let buttonYoungMinus = document.querySelector('.ticket__type-amount-button_18-minus'),
    buttonYoungPlus = document.querySelector('.ticket__type-amount-button_18-plus'),
    buttonOldMinus = document.querySelector('.ticket__type-amount-button_65-minus'),
    buttonOldPlus = document.querySelector('.ticket__type-amount-button_65-plus');

buttonYoungMinus.onclick = function() {
    let youngAmount = +document.querySelector('.ticket__type-amount-input_18').textContent;
    let totalOutput = +document.querySelector('.ticket__total-item-text_output').textContent;

    let youngAmountForm = +document.querySelector('.input-ticket__type-amount-input_18').textContent;
    let totalOutputForm = +document.querySelector('.total-item__cost-18').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    if (youngAmount > 0) {
        youngAmount--;
        totalOutputForm -= 20;
        totalOutput -= 20;
        totalCost -= 20;
    }
    document.querySelector('.ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutput;
    
    document.querySelector('.input-ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.total-item__amount-18').textContent = youngAmount;
    document.querySelector('.total-item__cost-18').textContent = totalOutputForm;
    document.querySelector('.total-item__result-amount').textContent = totalCost;
}

buttonYoungPlus.onclick = function() {
    let youngAmount = +document.querySelector('.ticket__type-amount-input_18').textContent;
    let totalOutput = +document.querySelector('.ticket__total-item-text_output').textContent;

    let youngAmountForm = +document.querySelector('.input-ticket__type-amount-input_18').textContent;
    let totalOutputForm = +document.querySelector('.total-item__cost-18').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    youngAmount++;
    totalOutput += 20;
    totalOutputForm += 20;
    totalCost += 20;
    document.querySelector('.ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutput;

    document.querySelector('.input-ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.total-item__amount-18').textContent = youngAmount;
    document.querySelector('.total-item__cost-18').textContent = totalOutputForm;
    document.querySelector('.total-item__result-amount').textContent = totalCost;
}

buttonOldMinus.onclick = function() {
    let oldAmount = +document.querySelector('.ticket__type-amount-input_65').textContent;
    let totalOutput = +document.querySelector('.ticket__total-item-text_output').textContent;

    let oldAmountForm = +document.querySelector('.input-ticket__type-amount-input_65').textContent;
    let totalOutputForm = +document.querySelector('.total-item__cost-65').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    if (oldAmount > 0) {
        oldAmount--;
        totalOutput -= 10;
        totalOutputForm -= 10;
        totalCost -= 10;
    }
    document.querySelector('.ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutput;

    document.querySelector('.input-ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.total-item__amount-65').textContent = oldAmount;
    document.querySelector('.total-item__cost-65').textContent = totalOutputForm;
    document.querySelector('.total-item__result-amount').textContent = totalCost;
}

buttonOldPlus.onclick = function() {
    let oldAmount = +document.querySelector('.ticket__type-amount-input_65').textContent;
    let totalOutput = +document.querySelector('.ticket__total-item-text_output').textContent;

    let oldAmountForm = +document.querySelector('.input-ticket__type-amount-input_65').textContent;
    let totalOutputForm = +document.querySelector('.total-item__cost-65').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    oldAmount++;
    totalOutput +=10;
    totalOutputForm += 10;
    totalCost += 10;
    document.querySelector('.ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutput;
    
    document.querySelector('.input-ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.total-item__amount-65').textContent = oldAmount;
    document.querySelector('.total-item__cost-65').textContent = totalOutputForm;
    document.querySelector('.total-item__result-amount').textContent = totalCost;
}

let buttonYoungMinusForm = document.querySelector('.input-ticket__type-amount-button_18-minus'),
    buttonYoungPlusForm = document.querySelector('.input-ticket__type-amount-button_18-plus'),
    buttonOldMinusForm = document.querySelector('.input-ticket__type-amount-button_65-minus'),
    buttonOldPlusForm = document.querySelector('.input-ticket__type-amount-button_65-plus');

buttonYoungMinusForm.onclick = function() {
    let youngAmount = +document.querySelector('.input-ticket__type-amount-input_18').textContent;
    let totalOutput = +document.querySelector('.total-item__cost-18').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    let youngAmountPage = +document.querySelector('.ticket__type-amount-input_18').textContent;
    let totalOutputPage = +document.querySelector('.ticket__total-item-text_output').textContent;

    if (youngAmount > 0) {
        youngAmount--;
        totalOutput -= 20;
        totalCost -= 20;
        totalOutputPage -= 20;
    }
    document.querySelector('.input-ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.total-item__amount-18').textContent = youngAmount;
    document.querySelector('.total-item__cost-18').textContent = totalOutput;
    document.querySelector('.total-item__result-amount').textContent = totalCost;

    document.querySelector('.ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutputPage;
}

buttonYoungPlusForm.onclick = function() {
    let youngAmount = +document.querySelector('.input-ticket__type-amount-input_18').textContent;
    let totalOutput = +document.querySelector('.total-item__cost-18').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    let youngAmountPage = +document.querySelector('.ticket__type-amount-input_18').textContent;
    let totalOutputPage = +document.querySelector('.ticket__total-item-text_output').textContent;

    youngAmount++;
    totalOutput += 20;
    totalCost += 20;
    totalOutputPage += 20;
    document.querySelector('.input-ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.total-item__amount-18').textContent = youngAmount;
    document.querySelector('.total-item__cost-18').textContent = totalOutput;
    document.querySelector('.total-item__result-amount').textContent = totalCost;

    document.querySelector('.ticket__type-amount-input_18').textContent = youngAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutputPage;
}

buttonOldMinusForm.onclick = function() {
    let oldAmount = +document.querySelector('.input-ticket__type-amount-input_65').textContent;
    let totalOutput = +document.querySelector('.total-item__cost-65').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    let oldAmountPage = +document.querySelector('.ticket__type-amount-input_65').textContent;
    let totalOutputPage = +document.querySelector('.ticket__total-item-text_output').textContent;

    if (oldAmount > 0) {
        oldAmount--;
        totalOutput -= 10;
        totalCost -= 10;
        totalOutputPage -= 10;
    }
    document.querySelector('.input-ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.total-item__amount-65').textContent = oldAmount;
    document.querySelector('.total-item__cost-65').textContent = totalOutput;
    document.querySelector('.total-item__result-amount').textContent = totalCost;

    document.querySelector('.ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutputPage;
}

buttonOldPlusForm.onclick = function() {
    let oldAmount = +document.querySelector('.input-ticket__type-amount-input_65').textContent;
    let totalOutput = +document.querySelector('.total-item__cost-65').textContent;
    let totalCost = +document.querySelector('.total-item__result-amount').textContent;

    let oldAmountPage = +document.querySelector('.ticket__type-amount-input_65').textContent;
    let totalOutputPage = +document.querySelector('.ticket__total-item-text_output').textContent;

    oldAmount++;
    totalOutput +=10;
    totalCost += 10;
    totalOutputPage += 10;

    document.querySelector('.input-ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.total-item__amount-65').textContent = oldAmount;
    document.querySelector('.total-item__cost-65').textContent = totalOutput;
    document.querySelector('.total-item__result-amount').textContent = totalCost;

    document.querySelector('.ticket__type-amount-input_65').textContent = oldAmount;
    document.querySelector('.ticket__total-item-text_output').textContent = totalOutputPage;
}

const today = new Date().toISOString().split('T')[0]
const dateInput = document.querySelector("#date")
const dateOutput = document.querySelector('.overview-item__day-out')
dateInput.setAttribute('min', today)

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const month = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

dateInput.addEventListener('input', () => {
  const dateValue = new Date(dateInput.valueAsNumber)
  dateOutput.innerHTML = `${week[dateValue.getDay()] || 'Friday'},
  ${month[dateValue.getMonth()] || 'August'} ${dateValue.getDate() || 19}`
})

const timeInput = document.querySelector('#time')
const timeOutput = document.querySelector('.overview-item__time-out')

timeInput.addEventListener('input', () => {
  if (timeInput.value !== '' && timeInput.value < timeInput.min) timeInput.value = timeInput.min
  if (timeInput.value !== '' && timeInput.value > timeInput.max) timeInput.value = timeInput.max
  timeOutput.innerHTML = timeInput.value
})

let selectInput = document.querySelector('.inputs__ticket-type');

selectInput.addEventListener('input', () => {
    let selectValue = selectInput.textContent;
    document.querySelector('.overview-item__type-out').textContent = selectValue;
})


  const radioPrices = document.querySelectorAll(".radio-input")
  
  const ticketTypeOutput = document.querySelector('.overview-item__type-out')
  const formPrices = document.querySelector(".inputs__ticket-type")
  
  for (let i = 0; i < radioPrices.length; i++) {
    radioPrices[i].addEventListener('click', () => {
      ticketTypeOutput.innerHTML = radioPrices[i].value
      formPrices[i + 1].selected = true
    })
  }
  formPrices.addEventListener('change', () => {
    radioPrices[+formPrices.value].click()
  })

  let ticketButton = document.querySelector('.ticket__button');
  ticketButton.onclick = function() {
    document.querySelector('.form').classList.add('_open');
    document.body.classList.add('_lock');
}

let closeForm = document.querySelector('.close-form');
closeForm.onclick = function() {
  document.querySelector('.form').classList.remove('_open');
  document.body.classList.remove('_lock');
}

