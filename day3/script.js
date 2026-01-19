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

 function calculatesubtotal(){
    const subtotalvalue=items.reduce((total,item)=>{
        return total+item.price*item.Qtn;
    },0);
    
    subtotal.innerHTML=`${subtotalvalue}`
    return subtotalvalue;
 }

 

function calculategst(){
    let gstvalue =calculatesubtotal()*(18/100);
    gst.innerHTML=`${gstvalue}`;
    return gstvalue;
}



function totalval(){
    let totals=calculatesubtotal()+calculategst();
    Total.innerHTML=`${totals}`

}

calculate.addEventListener("click",function(){
     calculatesubtotal();
     calculategst();
     totalval();

})