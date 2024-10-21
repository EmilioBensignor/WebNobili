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
});

// Caracteristicas
const caracteristicasContainer = document.getElementById("caracteristicasContainer");

const caracteristicas = [
  {
    img: "investigacion-innovacion",
    alt: "",
    title: "INVESTIGACIÓN E INNOVACIÓN",
    text: "Desde hace más de sesenta años diseñamos la mejor tecnología para el agua, con la convicción de que nuestras plantas de producción tienen que reflejar la innovación tecnológica de nuestros productos. La eficacia de nuestros mezcladores es la tarjeta de presentación de nuestra marca, y garantiza los más altos niveles de fiabilidad.",
  },
  {
    img: "widd35",
    alt: "",
    title: "CARTUCHO NOBILI WIDD®",
    text: "El cartucho de inmersión total Nobili Widd® permite lograr unos objetivos ecosostenibles de primera categoría, ayudando a ahorrar agua y energía a diario. Sus especificaciones de diseño y el alto nivel de los materiales utilizados garantizan una fiabilidad inigualable: estamos tan seguros de su calidad, que la garantizamos durante 20 años.",
  },
  {
    img: "widd2020",
    alt: "",
    title: "CARTUCHO NOBILI WIDD® 2020",
    text: "El cartucho de inmersión total y movimiento axial Nobili Widd® 2020 revoluciona la estructura de los mezcladores tradicionales al eliminar el bloque del cartucho lateral y crear una línea extremadamente limpia y estilizada. La apertura del flujo en agua fría elimina las emisiones de dióxido de carbono resultantes del encendido involuntario de la caldera.",
  },
  {
    img: "nobili-termotech",
    alt: "",
    title: "CARTUCHO NOBILI TERMOTECH®",
    text: "El cartucho termostático Nobili Thermotech® define unos nuevos estándares de calidad, ya que aumenta la velocidad de mezcla del agua y reduce el tiempo de respuesta a los cambios bruscos de temperatura. Este maravilloso proyecto se realiza utilizando exclusivamente tecnopolímeros de alto rendimiento, que garantizan una gran resistencia a la temperatura.",
  },
  {
    img: "estilo",
    alt: "",
    title: "ESTILO",
    text: "La atención a la calidad estructural y al contenido en términos de innovación tecnológica y eficiencia funcional no significa que se preste menos atención a los valores creativos: nuestros modelos representan una síntesis perfecta entre innovación estilística, investigación ergonómica y evolución tecnológica.",
  },
  {
    img: "prototipado",
    alt: "",
    title: "PROTOTIPADO",
    text: "Tras la fase creativa, pasamos al diseño técnico y al prototipado del modelo: primero mediante la impresión 3D y luego con el desarrollo del prototipo de latón, una fase muy importante ya que nos permite sondear el impacto del modelo en el mercado y evaluar cuidadosamente la relación entre forma y acabado.",
  },
  {
    img: "analisis",
    alt: "",
    title: "ANÁLISIS",
    text: "Para garantizar la fiabilidad, la seguridad y la precisión del producto fabricado es necesario efectuar unos estrictos controles de calidad, además de, naturalmente, adoptar técnicas innovadoras durante la producción. En Nobili llevamos a cabo todo el ciclo productivo, incluidos los equipos de procesamiento, y comprobamos continuamente la calidad de los procesos y los materiales.",
  },
  {
    img: "prueba-griferia",
    alt: "",
    title: "PRUEBA",
    text: "Para cumplir con las estrictas normativas nacionales e internacionales orientadas a la protección del consumidor, cada uno de nuestros productos está provisto de un certificado de garantía: para asumir responsablemente este compromiso, es necesario llevar a cabo unos controles de calidad sistemáticos que, en la empresa, representan la última fase del proceso de producción.",
  },
  {
    img: "patentes-nobili",
    alt: "",
    title: "PATENTES",
    text: "Las ideas e intuiciones creativas de los arquitectos y diseñadores de los productos Nobili siempre han convivido con la innovación tecnológica. Nuestra primera invención introducida en el mercado se remonta a 1980: desde entonces, hemos obtenido más de 100 patentes, contribuyendo significativamente a la evolución tecnológica de todo el sector.",
  },
  {
    img: "certificaciones-internacionales",
    alt: "",
    title: "CERTIFICACIONES INTERNACIONALES",
    text: "Cada mezclador Nobili se diseña y fabrica dentro de nuestros departamentos y debe cumplir las normas internacionales más estrictas, garantizando la máxima calidad, seguridad y respeto por el medio ambiente. Para obtener más información sobre los artículos con una o más certificaciones, recomendamos consultar las fichas técnicas correspondientes.",
  },
];

for (let caracteristica = 0; caracteristica < caracteristicas.length; caracteristica++) {
  caracteristicasContainer.innerHTML += `
    <div class="caracteristica">
      <img class="imgCaracteristica" src="/content/images/vanguardia/${caracteristicas[caracteristica].img}.webp" alt="${caracteristicas[caracteristica].alt}">
      <div>
        <h2>${caracteristicas[caracteristica].title}</h2>
        <p>${caracteristicas[caracteristica].text}</p>
      </div>
    </div>
  `;
}

// Video Caracteristicas + Modal
document.addEventListener("DOMContentLoaded", function () {
  let modal = document.getElementById("videoModal");
  let reproducirVideo = document.getElementById("reproducirVideo");
  let closeModalBtn = document.getElementById("closeModalBtn");
  let youtubeIframe = document.getElementById("youtubeIframe");
  let videoUrl = "https://www.youtube.com/embed/hoDM-rqrIU4?si=vLnymYNQr1y4PglZ";

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