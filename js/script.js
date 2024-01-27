let IsHeroSlider = document.querySelectorAll(".HeroScroll__slider").length > 0 ? true : false;

if(IsHeroSlider){


const heroSlider = document.querySelector(".HeroScroll__slider");
const swiperHero = new Swiper(heroSlider,{
   direction: 'horizontal',
   slidesPerView: "auto",
   keyboard: true,
   freeMode: true,
   speed: 200,
   touchEventsTarget: 'HeroScroll',
   mousewheel: {
      sensitivity: 4,
      releaseOnEdges: true,
   },
});

let blur = document.querySelector(".HeroScroll__blur");
let heroImg = document.querySelector(".HeroScroll__img");


swiperHero.on('scroll',blurBack)

// var startY = 0;

// document.addEventListener('touchstart', function(e) {
//   startY = e.touches[0].clientY;
// });

// document.addEventListener('touchmove', function(e) {
//   if (swiperHero.isEnd) { // Проверяем, достиг ли слайдер конца
//    //  document.removeEventListener('touchmove'); // Если достиг, удаляем обработчик события touchmove
//     return;
//   }

//   var currentY = e.touches[0].clientY;
//   var deltaY = currentY - startY;

//   if (Math.abs(deltaY) > 10) { // Порог для определения свайпа
//     e.preventDefault(); // Отменяем прокрутку страницы
//     swiperHero.setTranslate(swiperHero.getTranslate() + deltaY * 2); // Изменяем позицию swiper в соответствии с движением пальца
//   }
// });
// let touchstart;
// heroSlider.addEventListener("touchstart", (event)=>{
//    touchstart = event.touches[0].clientY;
// })
// heroSlider.addEventListener("touchmove", (event)=>{
//    let translate;
//    let count = 0.2;
//    if(!swiperHero.isEnd){
//       if (event.cancelable) event.preventDefault()
//          translate = (event.changedTouches[0].clientY -  touchstart) * count;
//       if(swiperHero.translate + translate > 0){
//          swiperHero.setTranslate(0)
//          translate = 0
//       }
//    }else {
//       translate = (event.changedTouches[0].clientY -  touchstart) * count;
//       if(translate < 0){
//          translate = 0
//       }
//    }
//    swiperHero.setTranslate(swiperHero.translate + translate)

//    blurBack()
 
// })


window.addEventListener('scroll',(e)=>{
   if(window.pageYOffset >= 1){
      heroSlider.classList.add('disabled')
   }else{
      heroSlider.classList.remove('disabled')
      // window.scrollTo(0,0)
   }
},{passive: true})

function blurBack() {
   let vw = document.documentElement.scrollWidth;
   let opacity = ((swiperHero.translate * 100) / vw) / 75
   let opacityBlur = 1 + opacity
   let scaleImg = 1 + (Math.abs(opacity) * 0.075)
   if( opacityBlur >= -1){
      blur.style.opacity = opacityBlur;
   }
   if(scaleImg > 1){
      heroImg.style.cssText = `transform: scale(${scaleImg});`;
   }else{
      scaleImg = 1;
      heroImg.style.cssText = `transform: scale(${scaleImg});`;
   }
}
}

let galleryAnim = document.querySelector(".galleryAnim");
let galleryAnimStartSliderBtn = document.querySelector(".galleryAnim__start");
let galleryAnimEndSliderBtn = document.querySelector(".galleryAnim__remove");

window.addEventListener('load',()=>{
   // window.scrollTo(0,0)
   const swiperAbout = new Swiper(".galleryAnim__slider",{
      slidesPerView:1.5,
      centeredSlides: true,
      allowTouchMove:false,
      centeredSlides: true,
      spaceBetween: 20,
      speed: 1200,
      navigation:{
         prevEl: ".galleryAnim__action .galleryAnim__arrow.__prev",
         nextEl: ".galleryAnim__action .galleryAnim__arrow.__next",
      },
      pagination: {
         el: '.galleryAnim__fraction',
         type: 'fraction',
         formatFractionCurrent: function (number) {
             return  number;
         }
       },
       breakpoints: {
         // when window width is >= 320px
         1441: {
            spaceBetween: 175,
         },
         640: {
            spaceBetween: 80,
         }
      }
   });

swiperAbout.on('slideChange', function () {
   swiperAbout.activeIndex !== 0 ? galleryAnim.classList.add('__noFirst') : galleryAnim.classList.remove('__noFirst')
 });

})
window.addEventListener('resize',()=>{
   // window.scrollTo(0,0)
})


let countSwiperAboutSlides = document.querySelectorAll(".galleryAnim__slider .swiper-slide");
let countSwiperAboutSlidesText = document.querySelector(".galleryAnim__photo--count");

countSwiperAboutSlidesText.textContent = countSwiperAboutSlides.length




galleryAnimStartSliderBtn.addEventListener('click',()=>{
   galleryAnim.classList.remove('__hidden')
})

galleryAnimEndSliderBtn.addEventListener('click',()=>{
   galleryAnim.classList.add('__hidden')
})





