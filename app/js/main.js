const firstBall    = $('.first-ball'),
      middleBall   = $('.middle-ball'),
      lastBall     = $('.last-ball'),

      firstCircle  = $('.first-ring'),
      middleCircle = $('.middle-ring'),
      lastCircle   = $('.last-ring'),

      firstShadow = $('.first-ball-shadow'),
      middleShadow = $('.middle-ball-shadow'),
      lastShadow = $('.last-ball-shadow')

const aboutListItems = $('.about__list-more--item'),
      aboutListTitle = $('.about__list-title'),

      stakingListItems = $('.staking__list-more--item'),
      stakingListTitle = $('.staking__list-title')


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

openList(aboutListItems, aboutListTitle)
openList(stakingListItems, stakingListTitle)

toCenterBalls(firstBall, firstCircle, firstShadow)
toCenterBalls(middleBall, middleCircle, middleShadow)
toCenterBalls(lastBall, lastCircle, lastShadow)
