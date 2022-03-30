// using__graphic
const   usingSmallBall    = $('.using__small-ball'),
        usingSmallCircle  = $('.using__small-ring'),
        usingSmallShadow = $('.using__small-ball-shadow'),

        usingMiddleBall   = $('.using__middle-ball'),
        usingMiddleCircle = $('.using__middle-ring'),
        usingMiddleShadow = $('.using__middle-ball-shadow'),

        usingBigBall     = $('.using__big-ball'),
        usingBigCircle   = $('.using__big-ring'),
        usingBigShadow = $('.using__big-ball-shadow')

// kibotron__graphic
const   kibotronSmallBall    = $('.kibotron__small-ball'),
        kibotronSmallCircle  = $('.kibotron__small-ring'),
        kibotronSmallShadow = $('.kibotron__small-ball-shadow'),

        kibotronMiddleBall   = $('.kibotron__middle-ball'),
        kibotronMiddleCircle = $('.kibotron__middle-ring'),
        kibotronMiddleShadow = $('.kibotron__middle-ball-shadow'),

        kibotronBigBall     = $('.kibotron__big-ball'),
        kibotronBigCircle   = $('.kibotron__big-ring'),
        kibotronBigShadow = $('.kibotron__big-ball-shadow')

// lists
const   aboutListItems = $('.about__list-more--item'),
        aboutListTitle = $('.about__list-title'),

        stakingListItems = $('.staking__list-more--item'),
        stakingListTitle = $('.staking__list-title'),

        partnersListItems = $('.partners__list-more--item'),
        partnersListTitle = $('.partners__list-title')

// header
const   burger = $('.header__burger'),
        menu   = $('.header__menu')

function addMenuClass(item, menu) {
    item.on('click', () => {
        menu.toggleClass('menu-active')
        $('html, body').toggleClass("_blocked")
    })
}

function openList(list, title) {
    title.on('click', () => list.toggleClass('list-active'))
}

function toCenterBalls(ball, circle, shadow) {
    circleCenter = {
        'x': Number(circle.attr('cx')),
        'y': Number(circle.attr('cy'))
    }

    ball.attr({'cx': circleCenter.x, 'cy': circleCenter.y})
    shadow.attr({'cx': circleCenter.x, 'cy': circleCenter.y})
}

addMenuClass(burger, menu)

openList(aboutListItems, aboutListTitle)
openList(stakingListItems, stakingListTitle)
openList(partnersListItems, partnersListTitle)

toCenterBalls(usingSmallBall, usingSmallCircle, usingSmallShadow)
toCenterBalls(usingMiddleBall, usingMiddleCircle, usingMiddleShadow)
toCenterBalls(usingBigBall, usingBigCircle, usingBigShadow)

toCenterBalls(kibotronSmallBall, kibotronSmallCircle, kibotronSmallShadow)
toCenterBalls(kibotronMiddleBall, kibotronMiddleCircle, kibotronMiddleShadow)
toCenterBalls(kibotronBigBall, kibotronBigCircle, kibotronBigShadow)/** */