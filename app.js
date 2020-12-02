// GET YEAR
let theDate = new Date();

document.querySelector(
  ".date"
).innerHTML = `&copy; ${theDate.getFullYear()} | All Right Reserved - Made with `;
document.querySelector(
  ".date-mobile"
).innerHTML = `&copy; ${theDate.getFullYear()} | All Right Reserved - Made with `;

// NAVBAR SLIDE
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // toggle navigation bar
    nav.classList.toggle("nav-acvtive");

    // Links animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
