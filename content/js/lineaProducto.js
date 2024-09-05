const colorOptions = document.querySelectorAll('.circuloColor');
const productImage = document.getElementById('imagenProducto');
const colorName = document.getElementById('colorName');

colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    const newImage = option.getAttribute('data-image');
    const newColorName = option.getAttribute('data-color');

    productImage.src = newImage;
    colorName.textContent = newColorName;
  });

  option.addEventListener('mouseenter', () => {
    colorName.textContent = option.getAttribute('data-color');
  });

  option.addEventListener('mouseleave', () => {
    const currentColor = document.querySelector('.circuloColor[data-image="' + productImage.src.split('/').pop() + '"]');
    colorName.textContent = currentColor ? currentColor.getAttribute('data-color') : "Cromo brillo";
  });
});
