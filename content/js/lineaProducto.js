const colorOptions = document.querySelectorAll('.bordeColor');
const productImage = document.getElementById('imagenProducto');
const colorName = document.getElementById('colorName');
const modelImages = document.querySelectorAll('.modelo img');
const modelColorTexts = document.querySelectorAll('.detalleColor p');
const modelColorIcons = document.querySelectorAll('.detalleColor img');
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

const cmsData = {
  "Cromo brillo": {
    "modelo1": "/content/images/lineaProducto/modelo1-cromo.png",
    "modelo2": "/content/images/lineaProducto/modelo2-cromo.png",
    "modelo3": "/content/images/lineaProducto/modelo3-cromo.png"
  },
  "Negro mate": {
    "modelo1": "/content/images/lineaProducto/modelo1-negro.png",
    "modelo2": "/content/images/lineaProducto/modelo2-negro.png",
    "modelo3": "/content/images/lineaProducto/modelo3-negro.png"
  }
}

let selectedOption = document.querySelector('.bordeColor[data-selected="true"]');

colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    const newColorName = option.getAttribute('data-color');
    const newImage = option.getAttribute('data-image');
    const newModelImages = cmsData[newColorName];

    productImage.src = newImage;

    modelImages.forEach((img, index) => {
      const modelKey = `modelo${index + 1}`;
      img.src = newModelImages[modelKey];
    });

    modelColorTexts.forEach(text => {
      text.textContent = newColorName;
    });

    modelColorIcons.forEach(icon => {
      if (newColorName === 'Cromo brillo') {
        icon.src = '/content/images/lineaProducto/cromoEjemplo.png';
      } else if (newColorName === 'Negro mate') {
        icon.src = '/content/images/lineaProducto/negroEjemplo.png';
      }
    });

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
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1080: {
      spaceBetween: 25,
    }
  }
});