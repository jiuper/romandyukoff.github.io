let btnMenu = document.querySelector(".header-container-right-btn");
let modalMenu = document.querySelector(".modal-header-book");
let closeMenu = document.querySelector(".modal-header-book-close");
btnMenu.addEventListener("click", function () {
    modalMenu.style.opacity = "1";
    modalMenu.style.zIndex = "999999999999999";
});
closeMenu.addEventListener("click", function () {
    modalMenu.style.opacity = "0";
    modalMenu.style.zIndex = "-1";
});

document.querySelector('#menu__toggle').addEventListener('change', () => {
    window.scrollTo(0, 0);
    document.body.style.overflow = document.querySelector('#menu__toggle').checked ? 'hidden' : 'auto';
})