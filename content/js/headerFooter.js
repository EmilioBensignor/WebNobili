// Constantes
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
    link: "https://www.facebook.com/NobiliMadeinItaly"
  },
  {
    img: "instagramIcon",
    link: "https://www.instagram.com/nobili_madeinitaly/",
  },
  {
    img: "pinterestIcon",
    link: "https://it.pinterest.com/nobili_madeinitaly/",
  },
  {
    img: "youtubeIcon",
    link: "https://www.youtube.com/@nobili_madeinitaly",
  },
  {
    img: "linkedInIcon",
    link: "https://www.linkedin.com/company/nobilimadeinitaly/",
  },
];

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
    <a class="${redes[redFooter].img} iconRed bgContain" href="${redes[redFooter].link}" target="_blank"></a>
  `;
}