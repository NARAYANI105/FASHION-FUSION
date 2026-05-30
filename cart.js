// ==========================
// FASHION FUSION CART SYSTEM
// ==========================

let cart = JSON.parse(
localStorage.getItem("fashionFusionCart")
) || [];

updateCartCount();

// ==========================
// ADD TO CART
// ==========================

function addToCart(productId){

const product =
productData.find(
item => item.id === productId
);

if(!product) return;

cart.push(product);

localStorage.setItem(
"fashionFusionCart",
JSON.stringify(cart)
);

updateCartCount();

alert(
product.name +
" added to cart"
);

}

// ==========================
// UPDATE COUNT
// ==========================

function updateCartCount(){

const count =
document.getElementById(
"cartCount"
);

if(count){

count.textContent =
cart.length;

}

}

// ==========================
// REMOVE ITEM
// ==========================

function removeFromCart(id){

cart =
cart.filter(
item => item.id !== id
);

localStorage.setItem(
"fashionFusionCart",
JSON.stringify(cart)
);

updateCartCount();

renderCart();

}

// ==========================
// TOTAL PRICE
// ==========================

function getTotalPrice(){

let total = 0;

cart.forEach(item=>{

total += item.price;

});

return total;

}

// ==========================
// CART MODAL
// ==========================

function renderCart(){

let modal =
document.getElementById(
"cartModal"
);

if(!modal){

modal =
document.createElement("div");

modal.id =
"cartModal";

modal.style.position =
"fixed";

modal.style.top =
"0";

modal.style.right =
"0";

modal.style.width =
"400px";

modal.style.height =
"100vh";

modal.style.background =
"#1e293b";

modal.style.padding =
"20px";

modal.style.overflowY =
"auto";

modal.style.zIndex =
"9999";

document.body.appendChild(
modal
);

}

let html = `
<h2>
Shopping Cart
</h2>
<hr><br>
`;

if(cart.length === 0){

html += `
<p>
Cart is Empty
</p>
`;

}

cart.forEach(item=>{

html += `
<div
style="
margin-bottom:20px;
padding:10px;
border-bottom:1px solid #444;
">

<h4>
${item.name}
</h4>

<p>
₹${item.price}
</p>

<button
onclick="
removeFromCart(${item.id})
"
style="
padding:8px 15px;
margin-top:10px;
cursor:pointer;
">
Remove
</button>

</div>
`;

});

html += `
<hr>

<h3>
Total:
₹${getTotalPrice()}
</h3>

<br>

<button
onclick="closeCart()"
style="
padding:12px 20px;
cursor:pointer;
">
Close
</button>
`;

modal.innerHTML = html;

}

// ==========================
// OPEN CART
// ==========================

function openCart(){

renderCart();

document
.getElementById(
"cartModal"
)
.style.display =
"block";

}

// ==========================
// CLOSE CART
// ==========================

function closeCart(){

const modal =
document.getElementById(
"cartModal"
);

if(modal){

modal.style.display =
"none";

}

}

// ==========================
// BUTTON EVENT
// ==========================

document.addEventListener(
"DOMContentLoaded",
()=>{

const cartBtn =
document.getElementById(
"cartBtn"
);

if(cartBtn){

cartBtn.addEventListener(
"click",
openCart
);

}

});

window.addToCart =
addToCart;

window.removeFromCart =
removeFromCart;

window.openCart =
openCart;

window.closeCart =
closeCart;
