const heroSwiper = new Swiper('.hero__swiper', {
    slidesPerView: 4,
    allowTouchMove: false,
    spaceBetween: 30,
    wrapperClass: 'hero__swiper-wrapper',

    navigation: {
        nextEl: '.hero__cards-btn--next',
    },

    breakpoints: {
        1320: {
            slidesPerView: 4,
            allowTouchMove: true,
        },

        970: {
            slidesPerView: 3,
            allowTouchMove: true,
        },

        670: {
            slidesPerView: 2,
            allowTouchMove: true,
        },

        460: {
            slidesPerView: 1.5,
            allowTouchMove: true,
        },

        320: {
            slidesPerView: 1,
            allowTouchMove: true,
        },
    },
});

const stakingSwiper = new Swiper('.staking__swiper', {
    slidesPerView: 5,
    allowTouchMove: false,
    wrapperClass: 'staking__swiper-wrapper',
    navigation: {
        nextEl: '.staking__graphic-btn--next',
        prevEl: '.staking__graphic-btn--prev',
    },
    breakpoints: {
        780: {
            slidesPerView: 5,
            allowTouchMove: true,
        },

        670: {
            slidesPerView: 3.5,
            allowTouchMove: true,
        },

        460: {
            slidesPerView: 2.2,
            allowTouchMove: true,
        },

        320: {
            slidesPerView: 1.5,
            allowTouchMove: true,
        },
    },

    // }
});

const roundsSwiper = new Swiper('.rounds__swiper', {
    slidesPerView: 5,
    grid: {
        rows: 2,
        fill: 'col',
    },
    spaceBetween: 25,
    allowTouchMove: false,
    wrapperClass: 'rounds__swiper-wrapper',

    navigation: {
        nextEl: '.rounds__cards-btn--next',
    },


    breakpoints: {
        960: {
            slidesPerView: 5,
            allowTouchMove: false,
            grid: {
                rows: 2,
                fill: 'col',
            },
        },

        794: {
            slidesPerView: 4,
            allowTouchMove: true,
            grid: {
                rows: 2,
                fill: 'col',
            },
        },

        680: {
            slidesPerView: 3,
            allowTouchMove: true,
            grid: {
                rows: 2,
                fill: 'col',
            },
        },

        480: {
            slidesPerView: 2,
            allowTouchMove: true,
            grid: {
                rows: 1,
                fill: 'row',
            },
        },

        320: {
            slidesPerView: 1,
            allowTouchMove: true,
            grid: {
                rows: 1,
                fill: 'row',
            },
        },
    },
});

const kibotronSwiper = new Swiper('.kibotron__swiper', {
    slidesPerView: 4,
    grid: {
        rows: 2,
        fill: 'col',
    },
    spaceBetween: 35,
    allowTouchMove: false,
    wrapperClass: 'kibotron__swiper-wrapper',
});
