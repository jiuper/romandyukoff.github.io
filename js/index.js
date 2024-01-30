const btnPref = window.document.querySelector(".handleIsPrev");
const btnNext = window.document.querySelector(".handleIsNext");
const allDiv = [...window.document.querySelector(".section3__slider-top-items").children];
const activeSlide = [...window.document.querySelectorAll(".section7-p__vacancy")];

let counter = 1;
btnPref.addEventListener("click", () => {
    counter === 1 ? (counter = allDiv.length) : --counter;
    
    allDiv.forEach((el, i) =>
      i + 1 === counter
        ? el.classList.remove("hidden")
        : el.classList.add("hidden")
    );
    activeSlide.forEach((el, i) =>
      i + 1 === counter
        ? el.classList.add("section7-p__vacancy-active")
        : el.classList.remove("section7-p__vacancy-active")
    );
});

btnNext.addEventListener("click", () => {
  counter === allDiv.length ? counter = 1 : ++counter;

  allDiv.forEach((el, i) =>
    i +1 === counter ? el.classList.remove("hidden") : el.classList.add("hidden")
    );
     activeSlide.forEach((el, i) =>
       i + 1 === counter
         ? el.classList.add("section7-p__vacancy-active")
         : el.classList.remove("section7-p__vacancy-active")
     );
});
 console.log(activeSlide);