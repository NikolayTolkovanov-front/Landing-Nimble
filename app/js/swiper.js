const heroSwiper = new Swiper('.hero__swiper', {
    slidesPerView: 4,
    allowTouchMove: false,
    wrapperClass: 'hero__swiper-wrapper'
})

const stakingSwiper = new Swiper('.staking__swiper', {
    slidesPerView: 5,
    allowTouchMove: false,
    wrapperClass: 'staking__swiper-wrapper',
})

const roundsSwiper = new Swiper('.rounds__swiper', {
    slidesPerView: 5,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'col',
    spaceBetween: 25,
    allowTouchMove: false,
    wrapperClass: 'rounds__swiper-wrapper',
})
