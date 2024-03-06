document.addEventListener("DOMContentLoaded", () => {
  let btnMenu = document.querySelector(".header-container-right-btn");
  let modalMenu = document.querySelector(".modal-header-book");
  let closeMenu = document.querySelector(".modal-header-book-close");

  const chooseCity = window.document.querySelector(".dropbtn");
  const chooseCityMob = window.document.querySelector(".burger__dropbtn");
  const chooseCityMobBtn = window.document.querySelector(
    ".burger__dropbtn-btn"
  );
  const searchCityMob = window.document.querySelector(".close");
  const tooltipClose = window.document.querySelector(".tooltip__icon");;
  const mapingList = window.document.querySelector(".maping-list");
  const searchCity = window.document.querySelector(".search__city");
  const BurgerMenu = window.document.querySelector(".burger__menu");
  const BurgerCity = [
    ...window.document.querySelectorAll(".burger__menu-city"),
  ];
  const FooterBron = window.document.querySelector(".burger__footer-btn");
  const listContCity = [
    ...window.document.querySelectorAll(".dropdown-content"),
  ];

  chooseCityMob.innerHTML = chooseCity.innerHTML = "Выбрать город";
  chooseCityMob.parentNode.parentNode.style.background = "#dfdfdf";
  searchCityMob.parentNode.style.display = "none";

  btnMenu.addEventListener("click", function () {
    modalMenu.style.opacity = "1";
    modalMenu.style.zIndex = "999999999999999";
  });
  closeMenu.addEventListener("click", function () {
    modalMenu.style.opacity = "0";
    modalMenu.style.zIndex = "-1";
  });

  document.querySelector("#menu__toggle").addEventListener("change", () => {
    window.scrollTo(0, 0);
    document.body.style.overflow = document.querySelector("#menu__toggle")
      .checked
      ? "hidden"
      : "auto";
  });

  [...listContCity[0].children].forEach((el, i) =>
    el.addEventListener("click", () => {
      if (
        [...listContCity[0].children][i].textContent !== "Россия" &&
        [...listContCity[0].children][i].textContent !== "Казахстан"
      ) {
        chooseCityMob.innerHTML = chooseCity.innerHTML = [
          ...listContCity[0].children,
        ][i].textContent;
      }
      if ([...listContCity[0].children][i].textContent === "Россия") {
        listContCity[1].classList.toggle("dropdown-content-acive");
        listContCity[0].classList.toggle("dropdown-content-acive");
      }
      if ([...listContCity[0].children][i].textContent === "Казахстан") {
        listContCity[2].classList.toggle("dropdown-content-acive");
        listContCity[0].classList.toggle("dropdown-content-acive");
      }
    })
  );
  [...listContCity[1].children].forEach((el, i) =>
    el.addEventListener("click", () => {
      if ([...listContCity[1].children][i].textContent !== "Россия") {
        chooseCityMob.innerHTML = chooseCity.innerHTML = [
          ...listContCity[1].children,
        ][i].textContent;
      } else {
        listContCity[1].classList.toggle("dropdown-content-acive");
        listContCity[0].classList.toggle("dropdown-content-acive");
      }
    })
  );
  [...listContCity[2].children].forEach((el, i) =>
    el.addEventListener("click", () => {
      if ([...listContCity[2].children][i].textContent !== "Казахстан") {
        chooseCityMob.innerHTML = chooseCity.innerHTML = [
          ...listContCity[2].children,
        ][i].textContent;
      } else {
        listContCity[2].classList.toggle("dropdown-content-acive");
        listContCity[0].classList.toggle("dropdown-content-acive");
      }
    })
  );
  chooseCityMobBtn.addEventListener("click", () => {
    chooseCityMob.parentNode.style.display = "none";
    chooseCityMob.parentNode.parentNode.style.background = "none";
    searchCityMob.parentNode.style.display = "flex";
    FooterBron.style.display = "none";
    BurgerCity[0].classList.remove("burger__menu-city-active");
    BurgerMenu.style.display = "none";
  });
  searchCityMob.addEventListener("click", () => {
    chooseCityMob.parentNode.style.display = "flex";
    chooseCityMob.parentNode.parentNode.style.background = "#dfdfdf";
    searchCityMob.parentNode.style.display = "none";
    FooterBron.style.display = "block";
    BurgerCity[0].classList.add("burger__menu-city-active");
    BurgerMenu.style.display = "block";
  });

  [...BurgerCity[0].children].forEach((el, i) =>
    el.addEventListener("click", () => {
      if (
        [...BurgerCity[0].children][i].textContent !== "Россия" &&
        [...BurgerCity[0].children][i].textContent !== "Казахстан"
      ) {
        chooseCityMob.innerHTML = chooseCity.innerHTML = [
          ...BurgerCity[0].children,
        ][i].textContent;
        BurgerMenu.style.display = "block";
        BurgerCity[0].classList.toggle("burger__menu-city-active");
        searchCityMob.parentNode.style.display = "none";
        chooseCityMob.parentNode.style.display = "flex";
        chooseCityMob.parentNode.parentNode.style.background = "#dfdfdf";
        FooterBron.style.display = "block";
      }
      if ([...BurgerCity[0].children][i].textContent === "Россия") {
        BurgerCity[1].classList.toggle("burger__menu-city-active");
        BurgerCity[0].classList.toggle("burger__menu-city-active");
      }
      if ([...BurgerCity[0].children][i].textContent === "Казахстан") {
        BurgerCity[2].classList.toggle("burger__menu-city-active");
        BurgerCity[0].classList.toggle("burger__menu-city-active");
      }
    })
  );
  [...BurgerCity[1].children].forEach((el, i) =>
    el.addEventListener("click", () => {
      if ([...BurgerCity[1].children][i].textContent !== "Россия") {
        chooseCityMob.innerHTML = chooseCity.innerHTML = [
          ...BurgerCity[1].children,
        ][i].textContent;
        BurgerMenu.style.display = "block";
        BurgerCity[1].classList.toggle("burger__menu-city-active");
        searchCityMob.parentNode.style.display = "none";
        chooseCityMob.parentNode.style.display = "flex";
        chooseCityMob.parentNode.parentNode.style.background = "#dfdfdf";
        FooterBron.style.display = "block";
      } else {
        BurgerCity[1].classList.toggle("burger__menu-city-active");
        BurgerCity[0].classList.toggle("burger__menu-city-active");
      }
    })
  );
  [...BurgerCity[2].children].forEach((el, i) =>
    el.addEventListener("click", () => {
      if ([...BurgerCity[2].children][i].textContent !== "Казахстан") {
        chooseCityMob.innerHTML = chooseCity.innerHTML = [
          ...BurgerCity[2].children,
        ][i].textContent;
        BurgerMenu.style.display = "block";
        BurgerCity[2].classList.toggle("burger__menu-city-active");
        searchCityMob.parentNode.style.display = "none";
        chooseCityMob.parentNode.style.display = "flex";
        chooseCityMob.parentNode.parentNode.style.background = "#dfdfdf";
        FooterBron.style.display = "block";
      } else {
        BurgerCity[2].classList.toggle("burger__menu-city-active");
        BurgerCity[0].classList.toggle("burger__menu-city-active");
      }
    })
  );

  searchCity.addEventListener("input", (e) => {
    const arr = [...BurgerCity[0].children]
      .concat([...BurgerCity[1].children].concat([...BurgerCity[2].children]))
      .filter((el) =>
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
      )
      .map((elem) => `<li>${elem.textContent}</li>`)
      .join("");
    mapingList.innerHTML = arr;
    if (e.target.value !== "") {
      BurgerCity[1].classList.add("burger__menu-city-active");
      BurgerCity[0].classList.add("burger__menu-city-active");
      BurgerCity[2].classList.add("burger__menu-city-active");
      mapingList.classList.remove("burger__menu-city-active");
      [...mapingList.children].forEach((el, i) =>
        el.addEventListener("click", () => {
          if ([...mapingList.children][i].textContent !== "Казахстан") {
            chooseCityMob.innerHTML = chooseCity.innerHTML = [
              ...mapingList.children,
            ][i].textContent;
            BurgerMenu.style.display = "block";
            searchCityMob.parentNode.style.display = "none";
            chooseCityMob.parentNode.style.display = "flex";
            chooseCityMob.parentNode.parentNode.style.background = "#dfdfdf";
            FooterBron.style.display = "block";
            e.target.value = "";
            mapingList.classList.add("burger__menu-city-active");
          }
        })
      );
    } else {
      BurgerCity[0].classList.remove("burger__menu-city-active");
      mapingList.classList.add("burger__menu-city-active");
    }
  });
  tooltipClose.addEventListener("click", () => {
    tooltipClose.parentNode.classList.toggle("tooltip__hidden")
  })
});
