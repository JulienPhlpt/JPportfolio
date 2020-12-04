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

// SCROLL TRIGGER
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.from(".content", {
  y: "-30%",
  // opacity: 0,
  duration: 2,
  ease: Power4.easeOut,
});

tl.from(
  ".stagger1",
  {
    y: "-50",
    opacity: 0,
    duration: 2,
    stagger: 0.3,
    ease: Power4.easeOut,
  },
  "-=1.2"
);

tl.from(
  ".hero-design",
  {
    y: "-30%",
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=3.4"
);

gsap.from(".transition2", {
  scrollTrigger: {
    trigger: ".transition2",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".transition3", {
  scrollTrigger: {
    trigger: ".transition3",
    start: "top center",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.6,
});

navSlide();
