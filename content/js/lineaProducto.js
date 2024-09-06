const colorOptions = document.querySelectorAll('.bordeColor');
const productImage = document.getElementById('imagenProducto');
const colorName = document.getElementById('colorName');
const swiperWrapper = document.getElementById('swiperWrapper');

const slides = [
  {
    img: "galeria1.jpg",
  },
  {
    img: "galeria2.jpg",
  },
  {
    img: "galeria3.jpg",
  },
  {
    img: "galeria4.jpg",
  },
  {
    img: "galeria5.jpg",
  },
  {
    img: "galeria6.jpg",
  },
  {
    img: "galeria7.jpg",
  },
  {
    img: "galeria8.jpg",
  },
]

let selectedOption = document.querySelector('.bordeColor[data-selected="true"]');

colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    const newImage = option.getAttribute('data-image');
    const newColorName = option.getAttribute('data-color');

    productImage.src = newImage;

    selectedOption.setAttribute('data-selected', 'false');
    option.setAttribute('data-selected', 'true');
    selectedOption = option;
  });

  option.addEventListener('mouseenter', () => {
    const newColorName = option.getAttribute('data-color');
    colorName.textContent = newColorName;
    colorName.classList.add('show');
  });

  option.addEventListener('mouseleave', () => {
    colorName.classList.remove('show');
  });
});

for (let slide = 0; slide < slides.length; slide++) {
  swiperWrapper.innerHTML += `
    <div class="swiper-slide">
      <img src="/content/images/lineaProducto/${slides[slide].img}" alt="" />
    </div>
  `;
}

const swiper = new Swiper('.swiper', {
  freeMode: true,
  slidesPerView: "auto",
  spaceBetween: 12,
  centeredSlides: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1080: {
      spaceBetween: 25,
    }
  }
});