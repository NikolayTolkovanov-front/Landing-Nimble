const heroSwiper = new Swiper('.hero__swiper', {
    slidesPerView: 4,
    allowTouchMove: false,
    spaceBetween: 30,
    wrapperClass: 'hero__swiper-wrapper',

    navigation: {
        nextEl: '.hero__cards-btn--next',
        prevEl: '.hero__cards-btn--prev'
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
        }
    }
})

const stakingSwiper = new Swiper('.staking__swiper', {
    slidesPerView: 5,
    allowTouchMove: false,
    wrapperClass: 'staking__swiper-wrapper',
})

const roundsSwiper = new Swiper('.rounds__swiper', {
    slidesPerView: 5,
    grid: {
        rows: 2,
        fill: 'col'
    },
    spaceBetween: 25,
    allowTouchMove: false,
    wrapperClass: 'rounds__swiper-wrapper',
})

const kibotronSwiper = new Swiper('.kibotron__swiper', {
    slidesPerView: 4,
    grid: {
        rows: 2,
        fill: 'col'
    },
    spaceBetween: 35,
    allowTouchMove: false,
    wrapperClass: 'kibotron__swiper-wrapper'
})
