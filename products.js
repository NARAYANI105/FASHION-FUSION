const products = [

{
id:1,
name:"Floral Maxi Dress",
category:"Dress",
price:1999,
image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c"
},

{
id:2,
name:"Evening Gown",
category:"Dress",
price:3499,
image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
},

{
id:3,
name:"Summer Dress",
category:"Dress",
price:1499,
image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
},

{
id:4,
name:"Leather Handbag",
category:"Accessories",
price:2499,
image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3"
},

{
id:5,
name:"Luxury Watch",
category:"Accessories",
price:4999,
image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
},

{
id:6,
name:"Sunglasses",
category:"Accessories",
price:999,
image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083"
},

{
id:7,
name:"Matte Lipstick",
category:"Makeup",
price:699,
image:"https://images.unsplash.com/photo-1631730486784-fbf7c4d25e67"
},

{
id:8,
name:"Foundation",
category:"Makeup",
price:899,
image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348"
},

{
id:9,
name:"Mascara",
category:"Makeup",
price:599,
image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa"
},

{
id:10,
name:"Running Shoes",
category:"Shoes",
price:2999,
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},

{
id:11,
name:"Casual Sneakers",
category:"Shoes",
price:2499,
image:"https://images.unsplash.com/photo-1549298916-b41d501d3772"
},

{
id:12,
name:"High Heels",
category:"Shoes",
price:2199,
image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
}

];

const container=document.getElementById("product-container");
const search=document.getElementById("search");
const category=document.getElementById("category");

function displayProducts(items){

container.innerHTML="";

items.forEach(product=>{

container.innerHTML+=`
<div class="product">
<img src="${product.image}">
<div class="product-content">
<h3>${product.name}</h3>
<p>${product.category}</p>
<p class="price">₹${product.price}</p>
<button onclick="addToCart()">Add To Cart</button>
</div>
</div>
`;

});
}

displayProducts(products);

search.addEventListener("keyup",filterProducts);
category.addEventListener("change",filterProducts);

function filterProducts(){

let text=search.value.toLowerCase();
let cat=category.value;

let filtered=products.filter(product=>{

let matchName=product.name.toLowerCase().includes(text);

let matchCategory=
cat==="all" || product.category===cat;

return matchName && matchCategory;

});

displayProducts(filtered);
}

let cart=0;

function addToCart(){
cart++;
document.getElementById("cart-count").innerText=cart;
}
