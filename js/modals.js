const modalAge = [...window.document.querySelectorAll(".univers__modal")];
const container = [...window.document.querySelectorAll(".age-container")];
const cookies__container = [
  ...window.document.querySelectorAll(".cookies__EN"),
];

const containerEn = [
  ...window.document.querySelectorAll(".univers__container"),
];
window.addEventListener("DOMContentLoaded", () => {
  modalAge[0].classList.remove("univers__hidden");
  window.document.body.style.overflow = "hidden";
});

const handleMoreEn = () => {
  cookies__container.forEach((el) =>
    el.classList.contains("cookies-preferences")
      ? el.classList.remove("cookies-preferences")
      : el.classList.add("cookies-preferences")
  );
  window.document.body.style.overflow = "auto";
  containerEn[2].classList.add("cookies-preferences-mw");
};
const handleOK = () => {
  modalAge.forEach((el) =>
    el.classList.contains("cookies__hidden")
      ? el.classList.remove("cookies__hidden")
      : el.classList.add("univers__hidden")
  );
  window.document.body.style.overflow = "auto";
};
const handleNot = () => {
  container.forEach((el) =>
    el.classList.contains("isNot")
      ? el.classList.remove("isNot")
      : el.classList.add("isNot")
  );
};
