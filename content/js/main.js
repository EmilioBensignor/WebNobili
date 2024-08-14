// Constantes
const nobili = document.querySelectorAll("#nobili");
const footerMenu = document.getElementById("footerMenu");
const redesFooter = document.getElementById("redesFooter");

// Arrays
const menuFooter = [
  {
    title: "INICIO",
    link: "#",
  },
  {
    title: "PRODUCTOS",
    link: "#",
  },
];
const redes = [
  {
    img: "facebookIcon",
    link: "#",
  },
  {
    img: "instagramIcon",
    link: "#",
  },
  {
    img: "pinterestIcon",
    link: "#",
  },
  {
    img: "youtubeIcon",
    link: "#",
  },
  {
    img: "linkedInIcon",
    link: "#",
  },
];

// GSAP Effect
gsap.registerPlugin(ScrollTrigger);
nobili.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
});

// Nav
document.getElementById('openNav').addEventListener('click', function () {
  document.querySelector('.nav').classList.add('open');
  document.body.classList.add('nav-open');
});

document.getElementById('closeNav').addEventListener('click', function () {
  document.querySelector('.nav').classList.remove('open');
  document.body.classList.remove('nav-open');
});

// Footer
for (let footerMenuItem = 0; footerMenuItem < menuFooter.length; footerMenuItem++) {
  footerMenu.innerHTML += `
    <li>
      <a href="${menuFooter[footerMenuItem].link}">${menuFooter[footerMenuItem].title}</a>
    </li>
  `;
}

function toggleAccordion(element) {
  const item = element.parentElement;
  const content = item.querySelector('.accordionContent');
  item.classList.toggle('open');

  if (item.classList.contains('open')) {
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    content.style.maxHeight = null;
  }
}


for (let redFooter = 0; redFooter < redes.length; redFooter++) {
  redesFooter.innerHTML += `
    <a class="${redes[redFooter].img} iconRed bgContain" href="${redes[redFooter].link}"></a>
  `;
}