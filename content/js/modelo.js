// Opciones Colores

document.addEventListener('DOMContentLoaded', function () {
  const opcionesColores = document.querySelectorAll('.bordeColor');
  const grifoPrincipal = document.querySelector('#grifoPrincipal img');
  const grifoPrincipalMobile = document.getElementById('grifoPrincipalMobile');
  const nombreAcabado = document.getElementById('nombreAcabado');

  opcionesColores.forEach(opcion => {
    opcion.addEventListener('click', function () {
      document.querySelector('.bordeColor[data-selected="true"]').setAttribute('data-selected', 'false');

      this.setAttribute('data-selected', 'true');
      // Obtener la nueva URL de la imagen
      const nuevaImagenSrc = this.getAttribute('data-image');

      if (grifoPrincipal) {
        grifoPrincipal.src = nuevaImagenSrc;
      }

      if (grifoPrincipalMobile) {
        grifoPrincipalMobile.src = nuevaImagenSrc;
      }

      nombreAcabado.textContent = this.getAttribute('data-color');
    });
  });
});

// Accordions

const accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    for (let j = 0; j < accordions.length; j++) {
      const panelToClose = accordions[j].nextElementSibling;
      const spanToClose = accordions[j].querySelector('span');
      if (panelToClose.classList.contains("open") && j !== i) {
        panelToClose.classList.remove("open");
        spanToClose.textContent = '+';
      }
    }
    const panel = this.nextElementSibling;
    const span = this.querySelector('span');
    if (panel.classList.contains("open")) {
      panel.classList.remove("open");
      span.textContent = '+';
    } else {
      panel.classList.add("open");
      span.textContent = '-';
    }
  });
}