let IsHeroSlider =
  document.querySelectorAll(".HeroScroll__slider").length > 0 ? true : false;

console.log(IsHeroSlider);

if (IsHeroSlider) {
  const heroSlider = document.querySelector(".HeroScroll__slider");
  const swiperHero = new Swiper(heroSlider, {
    direction: "horizontal",
    slidesPerView: "auto",
    keyboard: true,
    freeMode: false,
    speed: 200,
    touchEventsTarget: "HeroScroll",
    mousewheel: {
      sensitivity: 4,
      releaseOnEdges: true,
    },
  });

  let blur = document.querySelector(".HeroScroll__blur");
  let heroImg = document.querySelector(".HeroScroll__img");

  swiperHero.on("afterInit", () => console.log("init"));
  swiperHero.on("reachEnd", () => (document.body.style.overflow = "auto"));
  swiperHero.on("scroll", blurBack);

  heroSlider.addEventListener('pointerdown', (event) => {
    window.swiperEnabled = window.pageYOffset === 0;
    window.swiperStartY = event.offsetY;
    window.swiperTempProgress = swiperHero.progress;
    if (window.pageYOffset === 0) {
      heroSlider.classList.remove("disabled");
    } else {
      heroSlider.classList.add("disabled");
    }
  });
  heroSlider.addEventListener('pointerup',() => {
    window.swiperEnabled = false;
    window.swiperStartY = null;
    window.swiperTempProgress = null;
    swiperHero.setProgress(Math.min(+(Math.round(swiperHero.progress * 4) / 4).toFixed(2), 1), 600);
  });
  heroSlider.addEventListener('pointermove', (event) => {
    if (!window.swiperEnabled) return;

    const swipeCoeff = 1.5;
    const swipeValue = (window.swiperStartY - event.offsetY) / swipeCoeff;
    const swipePercent = swipeValue / heroSlider.getBoundingClientRect().height;
    const swipeProgress = (window.swiperTempProgress || 0) + swipePercent;

    if (swipeProgress > 1) heroSlider.classList.add("disabled");

    swiperHero.setProgress(swipeProgress, 300);

    blurBack();
  });

  window.addEventListener(
    "scroll",
    (e) => {
      if (window.pageYOffset >= 1) {
        heroSlider.classList.add("disabled");
      } else {
        heroSlider.classList.remove("disabled");
        // window.scrollTo(0,0)
      }
    },
    { passive: true }
  );

  function blurBack() {
    let vw = document.documentElement.scrollWidth;
    let opacity = (swiperHero.translate * 50) / vw / 35;
    let opacityBlur = 1 + opacity;
    let scaleImg = 1 + Math.abs(opacity) * 0.075;
    if (opacityBlur >= -1) {
      blur.style.opacity = opacityBlur;
    }
    if (scaleImg > 1) {
      heroImg.style.cssText = `transform: scale(${scaleImg});`;
    } else {
      scaleImg = 1;
      heroImg.style.cssText = `transform: scale(${scaleImg});`;
    }
  }
}

let galleryAnim = document.querySelector(".galleryAnim");
let galleryAnimStartSliderBtn = document.querySelector(".galleryAnim__start");
let galleryAnimEndSliderBtn = document.querySelector(".galleryAnim__remove");

window.addEventListener("load", () => {
  // window.scrollTo(0,0)
  const swiperAbout = new Swiper(".galleryAnim__slider", {
    slidesPerView: 1.5,
    centeredSlides: true,
    allowTouchMove: false,
    centeredSlides: true,

    spaceBetween: 20,
    speed: 1200,
    navigation: {
      prevEl: ".galleryAnim__action .galleryAnim__arrow.__prev",
      nextEl: ".galleryAnim__action .galleryAnim__arrow.__next",
    },
    pagination: {
      el: ".galleryAnim__fraction",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return number;
      },
    },
    breakpoints: {
      // when window width is >= 320px
      1441: {
        spaceBetween: 175,
      },
      640: {
        spaceBetween: 80,
      },
    },
  });

  swiperAbout.on("slideChange", function () {
    swiperAbout.activeIndex !== 0
      ? galleryAnim.classList.add("__noFirst")
      : galleryAnim.classList.remove("__noFirst");
  });
});
window.addEventListener("resize", () => {
  // window.scrollTo(0,0)
});

let countSwiperAboutSlides = document.querySelectorAll(
  ".galleryAnim__slider .swiper-slide"
);
let countSwiperAboutSlidesText = document.querySelector(
  ".galleryAnim__photo--count"
);

countSwiperAboutSlidesText.textContent = countSwiperAboutSlides.length;

galleryAnimStartSliderBtn.addEventListener("click", () => {
  galleryAnim.classList.remove("__hidden");
});

galleryAnimEndSliderBtn.addEventListener("click", () => {
  galleryAnim.classList.add("__hidden");
});

// (btnFran || []).forEach(function (item) {
//   item.addEventListener("click", function () {
//     btnFran.forEach(function (i) {
//       i.classList.remove("section5-top-right-block-active__franchise");
//     });
//
//     item.classList.add("section5-top-right-block-active__franchise");
//
//     let tubIDFran = item.getAttribute("data-tabFran");
//     let tabActiveFran = document.querySelector(tubIDFran);
//
//     tabFran.forEach(function (item) {
//       item.classList.remove("section7-p__vacancy-active");
//     });
//     tabActiveFran.classList.add("section7-p__vacancy-active");
//   });
// });
