const videoSlider = new Swiper('.video__slider', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
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