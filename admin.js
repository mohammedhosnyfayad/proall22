let scroll = document.querySelector(".scroll");
let par = document.querySelector(".par");
let scrollELE = document.querySelector(".scroll");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 220) {
    par.style.transform = "scale(1)";
  } else {
    par.style.transform = "scale(0)";
  }
});
scrollELE.onclick = function () {
  window.scrollTo({ top: 520, behavior: "smooth" });
};

let btn = document.querySelector(".btn button");
console.log(btn);

let sec = document.querySelector(".sec");
let st = true;
btn.onclick = function () {
  if (st === true) {
    sec.style.display = "block";
    st = false;
    btn.textContent = "show less";
  } else {
    sec.style.display = "none";
    btn.textContent = "show more";

    st = true;
    window.scrollTo({ top: 5832, behavior: "smooth" });
  }
};

let nav = document.querySelector(".nav");
let navul = document.querySelector(".nav ul");
let barsIcon = document.querySelector(".fa-bars");
let closeIcon = document.querySelector(".fa-xmark");

barsIcon.addEventListener("click", function () {
  // التحقق من حجم الشاشة قبل تطبيق الكود
  if (window.innerWidth <= 767) {
    navul.style.transform = "translateY(0)";
    navul.style.borderBottomLeftRadius = "400px";
    barsIcon.classList.add("d-none");
    closeIcon.classList.remove("d-none");
    document.body.classList.add("no-scroll");
  }
});

closeIcon.addEventListener("click", function () {
  // التحقق من حجم الشاشة قبل تطبيق الكود
  if (window.innerWidth <= 767) {
    navul.style.transform = "translateY(-1500px)";
    navul.style.borderBottomLeftRadius = "none";
    closeIcon.classList.add("d-none");
    barsIcon.classList.remove("d-none");
    document.body.classList.remove("no-scroll");
  }
});

const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("fixed"); // إضافة كلاس
  } else {
    navbar.classList.remove("fixed"); // إزالة الكلاس
  }
});
