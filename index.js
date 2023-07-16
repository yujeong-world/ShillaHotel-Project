$('.buger-btn').click(function(ev){
    ev.preventDefault();

    $(this).toggleClass('active');
    $('.overlay').toggleClass('visible');
});


//스티키메뉴
/* $(function() {
    var lnb = $("#main-box").offset().top;
   
    $(window).scroll(function() {
    var window = $(this).scrollTop();
    console.log(window);
    if(lnb < window) {
        $("#main-box").addClass("fixed");
        $("#main-box").addClass("block")
        }else{
            $("#main-box").removeClass("fixed");
            $("#main-box").removeClass("block")
      }
    })
  }); */

  $(function() {
    var lnb = $("#main-box").offset().top;
   
    $(window).scroll(function() {
    var window = $(this).scrollTop();

    if(window>=900) {
      $("#main-box").fadeIn(200);
        $("#main-box").addClass("fixed");
        $("#main-box").addClass("block")
        }else{
          $("#main-box").fadeOut(0);
            $("#main-box").removeClass("fixed");
            $("#main-box").removeClass("block")

      }
    })
  }); 
/*   $(function() {
    $(window).scroll(function(){
      var window = $(this).scrollTop(); 
      console.log(window);
      $('.window').animate( { scrollTop : $('.welcom-box').offset().top }, 500 );
    })
    }); */

  var menu = $("#main-menu"); //ul
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

  /*슬라이드 */
  var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
    delay: 5000,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
// 슬라이드 이전/다음 버튼 사용 여부
prevEl: ".promotion .swiper-prev", // 이전 버튼 선택자
nextEl: ".promotion .swiper-next", // 다음 버튼 선택자
    },
});

/* 애니메이션 */
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

/* 날자 태그 */
// INCLUDE JQUERY & JQUERY UI 1.12.1
$( function() {
	$( "#datepicker1" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
} );

$( function() {
	$( "#datepicker2" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
} );