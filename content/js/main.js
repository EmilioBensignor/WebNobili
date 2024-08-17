// GSAP Effect
const nobili = document.querySelectorAll("#nobili");
gsap.registerPlugin(ScrollTrigger);
nobili.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
});

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show')
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));