// Header
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  const openNav = document.getElementById('openNav');
  const logoNobili = document.getElementById('logoNobili');
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 500) {
    header.style.backgroundColor = '#FFF';
    logoNobili.style.backgroundImage = "url('/content/images/header-footer/logo-nobili-negro.svg')";
    openNav.style.backgroundImage = "url('/content/images/header-footer/Hamburger-Black.svg')"
  } else {
    header.style.backgroundColor = 'transparent';
    logoNobili.style.backgroundImage = "url('/content/images/header-footer/logo-nobili-blanco.svg')";
    openNav.style.backgroundImage = "url('/content/images/header-footer/Hamburger-White.svg')"
  }
});

// Acabados

const bordeColorElements = document.querySelectorAll(".bordeColor");

bordeColorElements.forEach(function(bordeColor) {
  bordeColor.addEventListener("click", function () {
    bordeColorElements.forEach(function(elem) {
      elem.classList.remove("bordeSeleccionado");
      elem.setAttribute("data-selected", "false");
    });

    this.classList.add("bordeSeleccionado");
    this.setAttribute("data-selected", "true");
  });
});

const swiper = new Swiper('.swiper', {
  freeMode: true,
  slidesPerView: "auto",
  spaceBetween: 12,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1080: {
      spaceBetween: 25,
    }
  }
});