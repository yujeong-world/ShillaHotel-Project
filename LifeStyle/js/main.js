var menu = $(".main-menu"); //ul
var menu_list = menu.children("li"); //ul하위메뉴 li 1차메뉴 
/* menu_list.css('background-color', 'red');
console.log(menu_list);
 */
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

//프로모션 슬라이드------------------
new Swiper(".main-slide .swiper", {
    direction: "horizontal",
    slidesPerView: 1, //한 번에 보여줄 슬라이드 개수
    // spaceBetween: 10, //슬라이드 사이 여백
    // centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    speed : 2000,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
    pagination: {
      // 페이지 번호 사용 여부
      el: ".main-slide .swiper-pagination", // 페이지 번호 요소 선택자
      clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
      // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: ".main-slide .swiper-prev", // 이전 버튼 선택자
      nextEl: ".main-slide .swiper-next", // 다음 버튼 선택자
    },
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

new Swiper(".sub-slide .swiper", {
  direction: "horizontal",
  slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
  spaceBetween: 30, //슬라이드 사이 여백
  centeredSlides: true, //슬라이드 가운데 정렬
  speed : 2000,     //넘기는 속도
  loop: true,       //반복 
  autoplay: {
    disableOnInteraction: false,
    delay: 3000,    //넘기는 시간
  }
});

