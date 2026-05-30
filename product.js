// =====================================
// FASHION FUSION PRODUCTS
// =====================================

const categories = [
    "Men",
    "Women",
    "Shoes",
    "Accessories"
];

const menProducts = [
    "Casual Shirt",
    "Denim Jacket",
    "Hoodie",
    "Polo T-Shirt",
    "Cargo Pant",
    "Formal Shirt",
    "Track Pant",
    "Sweatshirt"
];

const womenProducts = [
    "Kurti",
    "Floral Dress",
    "Top",
    "Handbag",
    "Saree",
    "Palazzo",
    "Gown",
    "Ethnic Wear"
];

const shoeProducts = [
    "Sneakers",
    "Sports Shoes",
    "Running Shoes",
    "Loafers",
    "Sandals",
    "Canvas Shoes",
    "Boots"
];

const accessoryProducts = [
    "Watch",
    "Smart Watch",
    "Sunglasses",
    "Wallet",
    "Backpack",
    "Jewellery",
    "Leather Belt"
];

// =====================================
// PRODUCT ARRAY
// =====================================

const productData = [];

for(let i = 1; i <= 500; i++){

    const category =
    categories[
        Math.floor(
            Math.random() *
            categories.length
        )
    ];

    let name = "";

    if(category === "Men"){
        name =
        menProducts[
            Math.floor(
                Math.random() *
                menProducts.length
            )
        ];
    }

    if(category === "Women"){
        name =
        womenProducts[
            Math.floor(
                Math.random() *
                womenProducts.length
            )
        ];
    }

    if(category === "Shoes"){
        name =
        shoeProducts[
            Math.floor(
                Math.random() *
                shoeProducts.length
            )
        ];
    }

    if(category === "Accessories"){
        name =
        accessoryProducts[
            Math.floor(
                Math.random() *
                accessoryProducts.length
            )
        ];
    }

    productData.push({

        id: i,

        name: `${name} ${i}`,

        category: category,

        price:
        Math.floor(
            Math.random() * 4000
        ) + 500,

        rating:
        (
            Math.random() * 2 + 3
        ).toFixed(1),

        image:
        `https://picsum.photos/400/500?random=${i}`

    });

}

// =====================================
// RENDER PRODUCTS
// =====================================

function renderProducts(products){

    const grid =
    document.getElementById(
        "productGrid"
    );

    if(!grid) return;

    grid.innerHTML = "";

    products.forEach(product => {

        grid.innerHTML += `

        <div class="product-card">

            <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy">

            <div class="product-content">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.category}
                </p>

                <div class="price">
                    ₹${product.price}
                </div>

                <p>
                    ⭐ ${product.rating}
                </p>

                <button
                onclick="openProduct(${product.id})">

                    View Details

                </button>

            </div>

        </div>

        `;

    });

}

// =====================================
// PRODUCT MODAL
// =====================================

function openProduct(id){

    const product =
    productData.find(
        item => item.id === id
    );

    if(!product) return;

    const modal =
    document.getElementById(
        "productModal"
    );

    const modalBody =
    document.getElementById(
        "modalBody"
    );

    modalBody.innerHTML = `

    <img
    src="${product.image}"
    style="
    width:100%;
    border-radius:15px;
    max-height:350px;
    object-fit:cover;
    ">

    <h2 style="margin-top:20px;">
        ${product.name}
    </h2>

    <p style="margin-top:10px;">
        Category:
        ${product.category}
    </p>

    <h3 style="margin-top:10px;">
        ₹${product.price}
    </h3>

    <p style="margin-top:10px;">
        ⭐ ${product.rating}
    </p>

    <button
    onclick="addToCart(${product.id})"
    style="
    width:100%;
    padding:15px;
    margin-top:20px;
    border:none;
    border-radius:10px;
    cursor:pointer;
    ">

        Add To Cart

    </button>

    `;

    modal.classList.remove(
        "hidden"
    );

}

// =====================================
// CLOSE MODAL
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const closeBtn =
        document.getElementById(
            "closeModal"
        );

        if(closeBtn){

            closeBtn.addEventListener(
                "click",
                () => {

                    document
                    .getElementById(
                        "productModal"
                    )
                    .classList.add(
                        "hidden"
                    );

                }
            );

        }

    }
);

// =====================================
// SEARCH
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderProducts(
            productData
        );

        const searchInput =
        document.getElementById(
            "searchInput"
        );

        if(searchInput){

            searchInput.addEventListener(
                "input",
                function(){

                    const value =
                    this.value
                    .toLowerCase();

                    const filtered =
                    productData.filter(
                        product =>
                        product.name
                        .toLowerCase()
                        .includes(value)
                    );

                    renderProducts(
                        filtered
                    );

                }
            );

        }

    }
);

// =====================================
// FILTERS
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const buttons =
        document.querySelectorAll(
            ".filter-btn"
        );

        buttons.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const category =
                    button.dataset.category;

                    if(
                        category === "All"
                    ){

                        renderProducts(
                            productData
                        );

                        return;
                    }

                    const filtered =
                    productData.filter(
                        product =>
                        product.category ===
                        category
                    );

                    renderProducts(
                        filtered
                    );

                }
            );

        });

    }
);

// =====================================
// GLOBAL ACCESS
// =====================================

window.openProduct =
openProduct;
