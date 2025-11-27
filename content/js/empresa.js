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

// Video Caracteristicas + Modal
document.addEventListener("DOMContentLoaded", function () {
  let modal = document.getElementById("videoModal");
  let reproducirVideo = document.getElementById("reproducirVideo");
  let closeModalBtn = document.getElementById("closeModalBtn");
  let youtubeIframe = document.getElementById("youtubeIframe");
  let videoUrl = "https://www.youtube.com/embed/NXr3y2kN3GA?si=OWcqPOkk3TuT_sA2";

  // Open the modal and autoplay the video
  reproducirVideo.onclick = function () {
    youtubeIframe.src = videoUrl + "&autoplay=1";
    modal.style.display = "block";
  }

  // Close the modal and stop the video
  closeModalBtn.onclick = function () {
    modal.style.display = "none";
    youtubeIframe.src = "";
  }

  // Close the modal when clicking outside of the modal content
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      youtubeIframe.src = "";
    }
  }
});

// PDF
function openPDF() {
  window.open('/content/images/empresa/nobili_company_profile.pdf', '_blank');
}

// Swiper
const swiperWrapper = document.getElementById("swiperWrapper");
const slides = ["2", "3", "4", "5", "6", "7"];

for (let slide = 0; slide < slides.length; slide++) {
  swiperWrapper.innerHTML += `
    <div class="swiper-slide">
      <img src="/content/images/empresa/slider/companyprofile-cat-0${slides[slide]}.jpg" alt="<!--des-->" />
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