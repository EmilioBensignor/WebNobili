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