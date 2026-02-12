// Constantes
const footerMenu = document.getElementById("footerMenu");
const redesFooter = document.getElementById("redesFooter");

// Arrays
const menuFooter = [
  {
    title: "INICIO",
    link: "/",
  },
  {
    title: "PRODUCTOS",
    link: "/productos.html",
  },
  {
    title: "EMPRESA",
    link: "/empresa.html",
  },
  {
    title: "VANGUARDIA",
    link: "/vanguardia.html",
  },
  {
    title: "DÓNDE COMPRAR",
    link: "/donde-comprar.html",
  },
  {
    title: "CATÁLOGO",
    link: "https://nobili.com.ar/catalogo-nobili-2025.pdf",
    target: true,
  },
];
// const redes = [
//   {
//     img: "facebookIcon",
//     link: "https://www.facebook.com/profile.php?id=61562442500851"
//   },
//   {
//     img: "instagramIcon",
//     link: "https://www.instagram.com/nobili.arg/",
//   },
//   {
//     img: "youtubeIcon",
//     link: "https://www.youtube.com/channel/UCFaxmYTW5X3tdMGe722Xj-w",
//   },
// ];

// Nav
const navLinks = document.querySelectorAll('.navLink');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    navLinks.forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.classList.add('faded');
      }
    });
  });

  link.addEventListener('mouseout', () => {
    navLinks.forEach(otherLink => {
      otherLink.classList.remove('faded');
    });
  });
});


document.getElementById('openNav').addEventListener('click', function () {
  document.querySelector('.nav').classList.add('open');
  document.body.classList.add('nav-open');
});

const navAccordionToggle = document.querySelector('.navAccordionToggle');
if (navAccordionToggle) {
  navAccordionToggle.addEventListener('click', function () {
    this.closest('.navAccordion').classList.toggle('open');
  });
}

document.getElementById('closeNav').addEventListener('click', function () {
  document.querySelector('.nav').classList.remove('open');
  document.body.classList.remove('nav-open');
});

// Footer
for (let footerMenuItem = 0; footerMenuItem < menuFooter.length; footerMenuItem++) {
  if (menuFooter[footerMenuItem].target) {
    footerMenu.innerHTML += `
      <li>
        <a href="${menuFooter[footerMenuItem].link}" target="_blank">${menuFooter[footerMenuItem].title}</a>
      </li>
    `;
  } else {
    footerMenu.innerHTML += `
      <li>
        <a href="${menuFooter[footerMenuItem].link}">${menuFooter[footerMenuItem].title}</a>
      </li>
    `;
  }

}

// for (let redFooter = 0; redFooter < redes.length; redFooter++) {
//   redesFooter.innerHTML += `
//     <a class="${redes[redFooter].img} iconRed bgContain" href="${redes[redFooter].link}" target="_blank"></a>
//   `;
// }
