function filtrarProductos(tipo) {
  const productos = document.querySelectorAll('.productItem');

  productos.forEach(producto => {
    producto.style.display = 'none';
  });

  const productosFiltrados = document.querySelectorAll(`.productItem[data-tipo="${tipo}"]`);
  productosFiltrados.forEach(producto => {
    producto.style.display = 'flex';
  });
}

const botones = document.querySelectorAll('.filterButton');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    botones.forEach(b => b.classList.remove('active'));
    boton.classList.add('active');
    let tipo = boton.textContent.trim().toLowerCase().replace('ñ', 'n');
    filtrarProductos(tipo);
  });
});

filtrarProductos("bano");

const botonBano = [...botones].find(boton => boton.textContent.trim().toLowerCase() === 'baño');
if (botonBano) {
  botonBano.classList.add('active');
}

const productItem = document.querySelectorAll('.productItem');

productItem.forEach(item => {
  item.addEventListener('mouseover', () => {
    productItem.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.add('faded');
      }
    });
  });

  item.addEventListener('mouseout', () => {
    productItem.forEach(otherItem => {
      otherItem.classList.remove('faded');
    });
  });
});