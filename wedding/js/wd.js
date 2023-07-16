
//GreenSock 텍스트 , 스크롤트리거 


gsap.set("#section1 .text1", {text: {delimiter: " ", }});
gsap.set("#section1 .text2", {text: {delimiter: " ", }});
gsap.set("#section2 .text1", {text: {delimiter: " ", }});
gsap.set("#section2 .text2", {text: {delimiter: " ", }});

gsap.to("#section1 .text1", {duration: 3,
    text: "Shilla Hotel Seoul Signature Wedding",
    scrollTrigger: {
        trigger: "#section1 .text1",
        start: "bottom 90%",
    }
});

gsap.to("#section1 .text2", {duration: 3,
    text: "The Luxury Wedding Experience",
    scrollTrigger: {
        trigger: "#section1 .text2",
        start: "bottom 90%",
    }
} );

gsap.to("#section2 .text1", {duration: 3,
    text: "Shilla Hotel Seoul Signature Meeting",
    scrollTrigger: {
        trigger: "#section2 .text1",
        start: "bottom 90%",
    }
});

gsap.to("#section2 .text2", {duration: 3,
    text: "The Luxury Meeting Experience",
    scrollTrigger: {
        trigger: "#section2 .text2",
        start: "bottom 90%",
    }
} );



// GreenSock 스크롤 트리거 

gsap.set(".box_img_left", {x: -150, opacity:0.4});
gsap.set(".box_img_right", {x: 150, opacity:0.4});
gsap.set(".box_text_left", {x: -80, opacity:0.4});
gsap.set(".box_text_right", {x: 80, opacity:0.4});

ScrollTrigger.batch(".box_img_left", {
    start: "top 800px",
    end: "bottom 150px",
    interval: 0.2,
    onEnter: batch => gsap.to(batch, {opacity: 1, x: 0, stagger: {each: 0.3, grid: [1, 1]}, overwrite: true}),
    onLeave: batch => gsap.set(batch, {opacity: 0.4, x: -150, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, x: 0, stagger: 0.3, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0.4, x: -150, overwrite: true})
});

ScrollTrigger.batch(".box_img_right", {
    //markers: true,
    start: "top 800px",
    end: "bottom 150px",
    interval: 0.2,
    onEnter: batch => gsap.to(batch, {opacity: 1, x: 0, stagger: {each: 0.3, grid: [1, 1]}, overwrite: true}),
    onLeave: batch => gsap.set(batch, {opacity: 0.4, x: 150, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, x: 0, stagger: 0.3, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0.4, x: 150, overwrite: true})
});

ScrollTrigger.batch(".box_text_left", {
    end: "bottom 150px",
    interval: 0.6,
    onEnter: batch => gsap.to(batch, {opacity: 1, x: 0, stagger: {each: 0.3, grid: [1, 5]}, overwrite: true}),
    onLeave: batch => gsap.set(batch, {opacity: 0.4, x: -80, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, x: 0, stagger: 0.3, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0.4, x: -80, overwrite: true})
});

ScrollTrigger.batch(".box_text_right", {
    end: "bottom 150px",
    interval: 0.6,
    onEnter: batch => gsap.to(batch, {opacity: 1, x: 0, stagger: {each: 0.3, grid: [1, 5]}, overwrite: true}),
    onLeave: batch => gsap.set(batch, {opacity: 0.4, x: 80, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, x: 0, stagger: 0.3, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0.4, x: 80, overwrite: true})
});


//도면 이미지 변환

let floor_1 = document.querySelector('.floor_first');
let floor_img_1 = document.querySelector('.floor_img_first');
var floorOpen_1 = false;
    floor_1.addEventListener('click', function(){
    if(floorOpen_1 == false){
        floor_1.innerHTML = "사진";
        floor_img_1.src = "./images/f_2.PNG";
        floorOpen_1 = true;        
    }
    else{
        floor_1.innerHTML = "도면";
        floor_img_1.src = "./images/w_a_1.png";
        floorOpen_1 = false;
    }
});

let floor_2 = document.querySelector('.floor_second');
let floor_img_2 = document.querySelector('.floor_img_second');
var floorOpen_2 = false;
    floor_2.addEventListener('click', function(){
    if(floorOpen_2 == false){
        floor_2.innerHTML = "사진";
        floor_img_2.src = "./images/f_1.PNG";
        floorOpen_2 = true;        
    }
    else{
        floor_2.innerHTML = "도면";
        floor_img_2.src = "./images/w_a_2.png";
        floorOpen_2 = false;
    }
});

let floor_3 = document.querySelector('.floor_third');
let floor_img_3 = document.querySelector('.floor_img_third');
var floorOpen_3 = false;
    floor_3.addEventListener('click', function(){
    if(floorOpen_3 == false){
        floor_3.innerHTML = "사진";
        floor_img_3.src = "./images/f_3.PNG";
        floorOpen_3 = true;        
    }
    else{
        floor_3.innerHTML = "도면";
        floor_img_3.src = "./images/m_a_3.png";
        floorOpen_3 = false;
    }
});


//서브 슬라이드

const swiperE2 = document.querySelector('.mySwiper_2')
Object.assign(swiperE2, {
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,},
    breakpoints: {
        1280: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
swiperE2.initialize();