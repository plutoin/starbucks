const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵선);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간) 

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0 // 0px 지점으로 화면 이동
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵선);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,  // 각각 0.7, 1.4, 2.1, 2.7초 뒤 실행
    opacity: 1
  });
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  // direction: horizontal 기본값
  slidesPerView: 3, // 한 번에 보여 준 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백, 10px
  centeredSlides: true, // 1번 슬라이드가 중간에 오도록
  loop: true,
  autoplay: {
    delay: 5000  // 5s와 같음
  },
  pagination: {
    el: '.promotion .swiper-pagination',  // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal' 기본값
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,  // 한 화면에 몇 개의 슬라이드를 보일 것인가
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion  // isHidePromotion 값이 false라면 반대값 true가 되도록
  if (isHidePromotion) {
    // 숨김 처리(true)
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리(false)
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정
      y: size, // `transform: translateY(수치);`와 같음 수직으로 얼마나 움직일지 설정
      repeat: -1, // -1은 무한 반복
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생
      ease: Power1.easeInOut // Easing 함수 적용
    }
  )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  // 보여짐의 여부를 감시할 요소 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); // ScrollMagic을 컨트롤러에 할당하여 동작하도록 함 
  // Scene(): 특정한 요소를 감시하는 옵션을 지정하는 메소드
  // setClassToggle(): 클래스에 토글을 지정
  // addTo(): 컨트롤러 추가
});