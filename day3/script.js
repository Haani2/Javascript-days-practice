const cart = document.getElementById("cart");

const items=[
    {item:"Hoddie",price:2000,Qtn:1},
    {item:"Laptop",price:50000,Qtn:1},
    {item:"Mouse",price:3000,Qtn:1},
    {item:"Cable",price:500,Qtn:2}
];

const subtotal=document.getElementById("subtotal");
const Total=document.getElementById("total");
const gst=document.getElementById("gst");
const calculate=document.getElementById("calculateBtn");

function renderCartItem(){
    const a = items.map((item)=>{
   return cart.innerHTML=`<div class="cart-item">
          <span>${item.item}</span>
          <span>${item.price}</span>
          <span>${item.Qtn}</span>
          <span>₹${item.price * item.Qtn}</span>
        </div>`;

}).join("");

cart.innerHTML=a;
}
renderCartItem();

 