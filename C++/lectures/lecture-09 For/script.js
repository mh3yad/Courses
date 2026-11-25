// Array of hardware products

const products = [
    {
        id: 1,
        name: "Gaming PC Case",
        price: 4500,
        image: "https://m.media-amazon.com/images/I/81mlE-cdrYL._AC_UY327_QL65_.jpg",
        description: "Gaming PC case with RGB cooling fans and transparent glass."
    },
    {
        id: 2,
        name: "RGB Gaming Case",
        price: 3500,
        image: "https://m.media-amazon.com/images/I/71ZznzpwnoL._AC_UY327_QL65_.jpg",
        description: "Black gaming computer case with orange RGB lighting."
    },
    {
        id: 3,
        name: "HP Gaming Desktop",
        price: 12000,
        image: "https://m.media-amazon.com/images/I/61z4+dyxL0L._AC_UY327_QL65_.jpg",
        description: "Desktop computer with AMD Ryzen 7 and GTX 1660 Super."
    }
];


// Get HTML element

const productsContainer = document.getElementById("products-container");


// Loop through products array

for (let i = 0; i < 3;i+=2) {

    productsContainer.innerHTML += `
        <div class="product">

            <img src="${products[i].image}" alt="${products[i].name}">

            <div class="product-info">

                <h2>${products[i].name}</h2>

                <p>${products[i].description}</p>

                <div class="price">
                    ${products[i].price} EGP
                </div>

                <button onclick="addToCart(${products[i].id})">
                    Add to Cart
                </button>

            </div>

        </div>
    `;

};


// Add to Cart Function

function addToCart(productId) {

    const selectedProduct = products.find(function(product) {
        return product.id === productId;
    });

    alert(selectedProduct.name + " Added to Cart!");

}