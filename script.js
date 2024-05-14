// show real products
var products =[
    {
       name:'White Chair',
       headline:'Soft light Cloud',
       price:'5000',
       image:'https://media.istockphoto.com/id/1161389159/photo/white-color-armchair-style-modern-chair-isolated-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=Er4RGpZf3RGLdwjHO4ahqIxvotW9GcoILlq2PBQKOo8='
    },
    {
        name:'Black Chair',
        headline:'Royal Chair',
        price:'9000',
        image:'https://images.unsplash.com/photo-1591565518071-f3c0b81725aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
     },
     {
        name:'Red Chair',
        headline:'Looks like Woow',
        price:'7000',
        image:'https://media.istockphoto.com/id/869078270/photo/armchair-isolated-on-white-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=BSBGae3sdyCHLH911Iv3mplZFoCbjq22ryBMqGpC5Rk='
     },
     {
        name:'Blue Chair',
        headline:'Soft and Comfy',
        price:'3000',
        image:'https://images.unsplash.com/photo-1529088261955-5ea19d5f4184?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
     },
]

var popular = [
    {
    name:"indonesia's Chair",
    headline:'Beauty Queen',
    price:'12000',
    image:'https://images.unsplash.com/photo-1611814771544-0baa57cb8224?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name:"Media Chair",
    headline:'The Studio Chair',
    price:'15000',
    image:'https://media.istockphoto.com/id/1130924169/photo/director-chair-movie-clapper-and-megaphone-with-neon-lights-on-black-background.jpg?s=1024x1024&w=is&k=20&c=rEA7vbVJ__JKtDZwKk9eGsIr-Dcji3OiSlRdhwnrF-A='
    },
    {
    name:'Summer Chair',
    headline:'Holiday Chair',
    price:'18000',
    image:'https://media.istockphoto.com/id/1371895062/photo/minimal-summer-holiday-travel-concept-door-to-sea-turquoise-background.jpg?s=1024x1024&w=is&k=20&c=mbwGv1MxTQk3fjWQTSWF0N8Uuc5vNDkX-ZDFC2A2fE4='
    }
];

var cart=[];

function addProduct(){
    var clutter = '';
products.forEach(function(product,index){
   clutter +=  `<div class="product w-fit rounded-xl p-2 bg-white">
   <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
   <img class='w-full h-full object-cover' src=${product.image} />
   </div>
   <div class="data w-full px-2 py-5">
       <h1 class="font-semibold text-xl leading-none tracking-tight">"${product.name}"</h1>
       <div class="flex justify-between w-full items-center mt-2">
           <div class="w-1/2">
               <h3 class="font-semibold opacity-20">${product.headline}</h3>
               <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
           </div>
           <button data-index='${index}' class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index='${index}'
                   class="add ri-add-line"></i></button>
       </div>
   </div>
</div>`;

})
document.querySelector('.products').innerHTML=clutter;

}

function addPopularProduct(){
    var clutter = '';
    popular.forEach(function(product){
      clutter += ` <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
      <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
          <img class="w-full h-full object-cover"
              src="${product.image}"
              alt="">
      </div>
      <div class="data py-2 w-full">
          <h1 class="leading-none font-semibold">${product.name}</h1>
          <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
          <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${product.price}</h4>
      </div>
  </div>`
    })

    document.querySelector('.populars').innerHTML=clutter;
}

function addtoCart(){
    document.querySelector('.products').addEventListener('click',function(details){
       if(details.target.classList.contains('add'))
        {
         cart.push(products[details.target.dataset.index]);
        //  console.log(cart)
        }
    })
}

function showCart(){
    document.querySelector('.carticon').addEventListener('click',function(){
        document.querySelector('.cartexpnd').style.display='block';
       var clutter= '';
       cart.forEach(function(prod,index){
         clutter += `
         <div class='flex gap-2 bg-white p-2 rounded-lg'>
         <div class='3-10 h-10 flex-shrink-0 rounded-lg bg-red-500 overflow-hidden'>
         <img class='w-full h-full object-cover' src='${prod.image}' alt='' />
         </div>
         <div>
         <h3 class='font-semibold'>${prod.name}</h3>
         <h5 class='text-sm font-semibold opacity-80'>${prod.price}</h5>
         </div>
         </div>
         `
       })
       document.querySelector('.cartexpnd').innerHTML = clutter;
    })
}

showCart()
addtoCart()
addPopularProduct()
addProduct();
// show real popular products

// on click of products add button add it to the cart