var menu = $(".main-menu"); //ul
var menu_list = menu.children("li"); //ul하위메뉴 li 1차메뉴 
/* menu_list.css('background-color', 'red');
console.log(menu_list);
 */
menu_list.children("div").css("display","none");
menu_list.on("mouseenter", function () {
	var target = $(this);
	target.addClass("slide");
	target.children("div").css("z-index", "100").stop().slideDown(500, function () {
		menu_list.not(".slide").children("div").hide();
		target.removeClass("slide");
	});
});
menu_list.on("mouseleave", function () {
	var target = $(this);
	target.children("div").css("z-index", "1");
	menu_list.children("div").hide();
});



 //Scroll Magic------------------------------------
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    //.setClassToggle(토글할요소, 넣었다뺄 Class이름)
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
}); 

//main 슬라이드------------------
new Swiper(".main .swiper", {
  direction: "horizontal",
  slidesPerView: 1, //한 번에 보여줄 슬라이드 개수
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    // 페이지 번호 사용 여부
    el: ".main .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".main .swiper-button-prev", // 이전 버튼 선택자
    nextEl: ".main .swiper-button-next", // 다음 버튼 선택자
  },
});


//프로모션 슬라이드------------------
new Swiper(".promotion .swiper", {
    direction: "horizontal",
    slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      // 페이지 번호 사용 여부
      el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
      clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
      // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: ".promotion .swiper-prev", // 이전 버튼 선택자
      nextEl: ".promotion .swiper-next", // 다음 버튼 선택자
    },
  });

  
  // Promotion 슬라이드 토글 기능---------------------
  const promotionEl = document.querySelector(".promotion"); // 슬라이드 영역 요소 검색!
  // 슬라이드 영역를 토글하는 버튼 검색!
  const promotionToggleBtn = document.querySelector(".toggle-promotion");
  // 슬라이드 영역 숨김 여부 기본값!
  let isHidePromotion = false;
  
  // 토글 버튼을 클릭하면,
  promotionToggleBtn.addEventListener("click", function () {
    // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
    isHidePromotion = !isHidePromotion;
    // 요소를 숨겨야 하면,
    if (isHidePromotion) {
      promotionEl.classList.add("hide");
      // 요소가 보여야 하면,
    } else {
      promotionEl.classList.remove("hide");
    }
  });
//플로팅------------------------------------------
// gsap easing : https://greensock.com/docs/v2/Easing
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  }
  
  function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
      y: size,
      repeat: -1, //몇번 반복할지  설정, -1은 무한반복
      yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생
      ease: Power1.easeInOut, //gsap easing
      delay: random(0, delay),
    });
  }
  floatingObject(".floating1", 1, 15);
  floatingObject(".floating2", 0.5, 15);
  floatingObject(".floating3", 1.5, 20);