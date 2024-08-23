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

filtrarProductos("bano");

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