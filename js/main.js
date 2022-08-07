const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav_btn");
const navBtnImg = document.querySelector("#nav_btn-image");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("open")
    ? (navBtnImg.src = "./image/btn-close.svg")
    : (navBtnImg.src = "./image/btn-open.svg");
});
