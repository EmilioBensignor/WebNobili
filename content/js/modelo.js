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