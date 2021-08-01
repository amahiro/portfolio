class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper(this.el, {
            effect: 'slide',
            loop: true,
            centeredSlides: true,
            grabCursor: false,
            speed: 500,
            slidesPerView: 1.5,
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            breakpoints: {
                601: {
                    slidesPerView: 3,
                },
                800: {
                    slidesPerView: 3.5,
                },
                1026: {
                    slidesPerView: 4.25,
                },
                1200: {
                    slidesPerView: 5,
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                }
            }
        });
    }
}