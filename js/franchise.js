const data = {
  summa: "",
  city: "",
  restoram: "",
  youName: "",
  youPhone: "",
  myName: "",
  myPhone: "",
  myEmail: "",
};
const modal = document.querySelector(".news__modal");
const formSteps = [...document.querySelector(".sertificate__right").children];
const points = [...document.querySelector(".sertificate__items").children];
const steps = [
  ...document.querySelector(".sertificate__action-navigate").children,
];
const city = document.querySelector(".addCity");
const restoran = document.querySelector(".addRestoran");
const youName = document.querySelector(".youName");
const youPhone = document.querySelector(".youPhone");
const myName = document.querySelector(".myName");
const myPhone = document.querySelector(".myPhone");
const myEmail = document.querySelector(".myEmail");
const dataSumma = document.querySelector(".dataSumma");
const cityWrite = document.querySelector(".city");
const restoranWrite = document.querySelector(".restoran");
const youNameWrite = document.querySelector(".youNameWrite");
const youPhoneWrite = document.querySelector(".youPhoneWrite");
const myNameWrite = document.querySelector(".myNameWrite");
const myPhoneWrite = document.querySelector(".myPhoneWrite");
const myEmailWrite = document.querySelector(".myEmailWrite");
const nameBtn = document.querySelector(".nameBtn");

let step = 0;
const handleStepNext = () => {
  step === steps.length - 1 ? step : ++step;
  steps.forEach((el, i) =>
    i === step ? el.classList.remove("sertificate__action-hidden") : el
  );
  formSteps.forEach((el, i) =>
    i === step
      ? el.classList.remove("step-hidden")
      : el.classList.add("step-hidden")
  );
  step === steps.length - 1
    ? (nameBtn.innerHTML = "Отправить")
    : (nameBtn.innerHTML = "Далее");
};

const handleStepPrev = () => {
  step === 0 ? step : --step;
  steps.forEach((el, i) =>
    i >= step + 1 ? el.classList.add("sertificate__action-hidden") : el
  );
  formSteps.forEach((el, i) =>
    i !== step
      ? el.classList.add("step-hidden")
      : el.classList.remove("step-hidden")
  );
  step <= steps.length - 2
    ? (nameBtn.innerHTML = "Далее")
    : (nameBtn.innerHTML = "Отправить");
};

const handleIsToogle = () => {
  modal.classList.toggle("news__hidden");
  modal.className === "news__modal news__hidden"
    ? (document.body.style.overflow = "auto")
    : (document.body.style.overflow = "hidden");
  points.forEach((el) => {
    el.classList.remove("point-active");
  });
};

points.forEach((point, i) =>
  point.addEventListener("click", () => {
    points.forEach((el) => {
      el.classList.remove("point-active");
    });
    points[i].classList.add("point-active");
    data.summa = point.innerHTML;
    dataSumma.innerHTML = point.innerHTML;
    console.log(data);
  })
);

myEmail.addEventListener("input", (e) => {
  myEmailWrite.innerHTML = e.target.value;
});
myPhone.addEventListener("input", (e) => {
  myPhoneWrite.innerHTML = e.target.value;
});
myName.addEventListener("input", (e) => {
  myNameWrite.innerHTML = e.target.value;
});
youPhone.addEventListener("input", (e) => {
  youPhoneWrite.innerHTML = e.target.value;
});
youName.addEventListener("input", (e) => {
  youNameWrite.innerHTML = e.target.value;
});
city.addEventListener("change", (e) => {
  cityWrite.innerHTML = e.target.value;
});
restoran.addEventListener("change", (e) => {
  restoranWrite.innerHTML = e.target.value;
});
