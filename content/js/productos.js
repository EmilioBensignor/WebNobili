const products = [
  {
    name: "ABC",
    category: "bano",
    designer: "Centro Stile",
    image: "abc-bano.png",
    link: "#"
  },
  {
    name: "SAND",
    category: "bano",
    designer: "Meneghello Paolelli Associati",
    image: "seven-bano.png",
    link: "#"
  },
  {
    name: "SEVEN",
    category: "bano",
    designer: "Centro Stile",
    image: "sand-bano.png",
    link: "#"
  },
  {
    name: "ABC",
    category: "bano",
    designer: "Centro Stile",
    image: "abc-bano.png",
    link: "#"
  },
  {
    name: "SAND",
    category: "bano",
    designer: "Meneghello Paolelli Associati",
    image: "seven-bano.png",
    link: "#"
  },
  {
    name: "SEVEN",
    category: "bano",
    designer: "Centro Stile",
    image: "sand-bano.png",
    link: "#"
  },

  {
    name: "ABC",
    category: "cocina",
    designer: "Cocina",
    image: "abc-bano.png",
    link: "#"
  },
  {
    name: "SAND",
    category: "cocina",
    designer: "Cocina",
    image: "seven-bano.png",
    link: "#"
  },
  {
    name: "SEVEN",
    category: "cocina",
    designer: "Cocina",
    image: "sand-bano.png",
    link: "#"
  },
  {
    name: "ABC",
    category: "cocina",
    designer: "Cocina",
    image: "abc-bano.png",
    link: "#"
  },
  {
    name: "SAND",
    category: "cocina",
    designer: "Cocina",
    image: "seven-bano.png",
    link: "#"
  },
  {
    name: "SEVEN",
    category: "cocina",
    designer: "Cocina",
    image: "sand-bano.png",
    link: "#"
  },
];

function filterProducts(category) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  const filteredProducts = products.filter(product => product.category === category);

  filteredProducts.forEach(product => {
    const productItem = document.createElement("a");
    productItem.className = "productItem columnAlignCenter text-center";
    productItem.href = product.link;
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