// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });

});


// ================= HEADER =================

window.addEventListener("scroll", () => {

  const header = document.getElementById("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.95)";
  } else {
    header.style.background = "rgba(0,0,0,0.75)";
  }

});


// ================= CURRENT YEAR =================

const yearElement = document.querySelector(".footer-bottom");

if (yearElement) {

  const currentYear = new Date().getFullYear();

  yearElement.innerHTML =
    `© ${currentYear} AR FITNESS. All Rights Reserved.`;

}
