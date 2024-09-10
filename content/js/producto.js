// Header
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  const openNav = document.getElementById('openNav');
  const logoNobili = document.getElementById('logoNobili');
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 500) {
    header.style.backgroundColor = '#FFF';
    logoNobili.style.backgroundImage = "url('/content/images/header-footer/logo-nobili-negro.webp')";
    openNav.style.backgroundImage = "url('/content/images/header-footer/Hamburger-Black.svg')"
  } else {
    header.style.backgroundColor = 'transparent';
    logoNobili.style.backgroundImage = "url('/content/images/header-footer/logo-nobili-blanco.webp')";
    openNav.style.backgroundImage = "url('/content/images/header-footer/Hamburger-White.svg')"
  }
})

// let selectedOption = document.querySelector('.bordeColor[data-selected="true"]');

// colorOptions.forEach(option => {
//   option.addEventListener('click', () => {
//     const newColorName = option.getAttribute('data-color');
//     const newImage = option.getAttribute('data-image');
//     const newModelImages = cmsData[newColorName];

//     productImage.src = newImage;

//     modelImages.forEach((img, index) => {
//       const modelKey = `modelo${index + 1}`;
//       img.src = newModelImages[modelKey];
//     });

//     modelColorTexts.forEach(text => {
//       text.textContent = newColorName;
//     });

//     modelColorIcons.forEach(icon => {
//       if (newColorName === 'Cromo brillo') {
//         icon.src = '/content/images/lineaProducto/opcionColor1.png';
//       } else if (newColorName === 'Negro mate') {
//         icon.src = '/content/images/lineaProducto/opcionColor2.png';
//       }
//     });

//     selectedOption.setAttribute('data-selected', 'false');
//     option.setAttribute('data-selected', 'true');
//     selectedOption = option;
//   });

//   option.addEventListener('mouseenter', () => {
//     const newColorName = option.getAttribute('data-color');
//     colorName.textContent = newColorName;
//     colorName.classList.add('show');
//   });

//   option.addEventListener('mouseleave', () => {
//     colorName.classList.remove('show');
//   });
// });

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