
const menuBtn = document.getElementById("menuBtn");
// ✅ Close menu on click
document.querySelectorAll(".hero-nav a").forEach(link => {
  link.addEventListener("click", () => {
    heroNav.classList.remove("active");
  });
});

const heroSocials = document.getElementById("heroSocials");

menuBtn.addEventListener("click", () => {
  heroSocials.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !heroSocials.contains(e.target)) {
    heroSocials.classList.remove("active");
  }
});


// ********************************************************************************************************
// ********************************************************************************************************


console.log("Cover loaded ✅");
// Experience section active step
const expSection = document.querySelector("#experience");
const steps = document.querySelectorAll(".experience .step");

const expObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        steps.forEach((s) => s.classList.remove("active"));
        steps[2].classList.add("active"); // step 3 active
      }
    });
  },
  { threshold: 0.5 }
);

expObserver.observe(expSection);



// ===============================
// Tall Slideshow JS
// ===============================
// const slideshow = document.getElementById("tallSlideshow");

// if (slideshow) {
//   const slides = slideshow.querySelectorAll(".slide");
//   let index = 0;

//   setInterval(() => {
//     slides[index].classList.remove("active");
//     index = (index + 1) % slides.length;
//     slides[index].classList.add("active");
//   }, 2500); // change slide every 2.5 sec
// }
// ===============================
// ===============================  

// Project section active step
// const projectSection = document.querySelector("#project2");
// const pSteps = document.querySelectorAll(".project .step");

// const projectObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         pSteps.forEach((s) => s.classList.remove("active"));
//         pSteps[4].classList.add("active"); // step 5
//       }
//     });
//   },
//   { threshold: 0.5 }
// );

// projectObserver.observe(projectSection);
// Thanks section active step 9
// const thanksSection = document.querySelector("#contact");
// const tSteps = document.querySelectorAll(".thanks .step");

// const thanksObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         tSteps.forEach((s) => s.classList.remove("active"));
//         tSteps[8].classList.add("active"); // step 9
//       }
//     });
//   },
//   { threshold: 0.5 }
// );

// thanksObserver.observe(thanksSection);

// AOS.init({
//   duration: 900,   // smooth speed
//   once: true,      // animation only once
//   easing: "ease-in-out",
// });

