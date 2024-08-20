const products = [
  { name: "ABC", category: "bano", designer: "Centro Stile", image: "abc-bano.png" },
  { name: "SAND", category: "bano", designer: "Meneghello Paolelli Associati", image: "seven-bano.png" },
  { name: "SEVEN", category: "bano", designer: "Centro Stile", image: "sand-bano.png" },
  { name: "ABC", category: "bano", designer: "Centro Stile", image: "abc-bano.png" },
  { name: "SAND", category: "bano", designer: "Meneghello Paolelli Associati", image: "seven-bano.png" },
  { name: "SEVEN", category: "bano", designer: "Centro Stile", image: "sand-bano.png" },

  { name: "ABC", category: "cocina", designer: "Cocina", image: "abc-bano.png" },
  { name: "SAND", category: "cocina", designer: "Cocina", image: "seven-bano.png" },
  { name: "SEVEN", category: "cocina", designer: "Cocina", image: "sand-bano.png" },
  { name: "ABC", category: "cocina", designer: "Cocina", image: "abc-bano.png" },
  { name: "SAND", category: "cocina", designer: "Cocina", image: "seven-bano.png" },
  { name: "SEVEN", category: "cocina", designer: "Cocina", image: "sand-bano.png" },
];

function filterProducts(category) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  const filteredProducts = products.filter(product => product.category === category);

  filteredProducts.forEach(product => {
    const productItem = document.createElement("div");
    productItem.className = "productItem columnAlignCenter text-center";
    productItem.innerHTML = `
      <img src="/content/images/productos/${product.image}" alt="${product.name}">
      <div class="productDescription columnAlignCenter">
        <p>${product.name}</p>
        <p>${product.designer}</p>
      </div>
    `;
    productList.appendChild(productItem);
  });

  document.querySelectorAll('.filterButton').forEach(button => button.classList.remove('active'));
  document.querySelector(`button[data-category="${category}"]`).classList.add('active');
}

filterProducts("bano");
