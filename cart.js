// let itemList = document.getElementById("itemList")
let mainCart = document.querySelector(".mainCart");
let emptyText = document.querySelector(".emptyText")
let oneProductItemsinCart = document.querySelector(".oneProductItemsinCart")








let cart =JSON.parse(localStorage.getItem("cart"))
let count =localStorage.getItem("count")
console.log(cart);




let itemData = []

async function fetchDataforProd() {
    const response = await fetch ("https://fakestoreapi.com/products")
    const data = await response.json()

    data.map((ele)=>{
        itemData.push(ele);
    })


    if(count==0){
        empty()
   }
   else{
    
       cartproducts(cart,data)
       
       
   }

    
}
fetchDataforProd()




function empty(){
    let defDisplay = `
<div class="container">
    <h1>Cart</h1>
    <hr> <br><br><br>
    <h1 class="display-1"> Your Cart is Empty</h1>
    <button type="button" class="btn btn-outline-dark"><a class="nav-link active" aria-current="page" href="product.html"> Continue Shopping</a></button>

</div>`
mainCart.innerHTML=defDisplay
}
function cartproducts(cart,data){
   let storeInit = ""
 
   
  for(let ele in cart){
    
    
  let productList =
        `
   <div class="itemdetails" style="border: 1px solid gray;  border-radius: 3px; display: flex; height: 180px;">
          <div style="width:30%;">
              <img src=${cart[ele].image} alt=""  style="width: 90px;height: 100px;margin-top:25px; margin-left:10px; ">
           </div>   
           <div style="width:30%; margin-top:25px;">
              <h5>${cart[ele].title}</h5>
           </div> 
           <div style="display:flex; flex-direction:column;margin-left:210px;margin-top:25px; ">  
           <div style="display : flex; ">
               <i data-id=${cart[ele].id} id="adding" class="fa-solid fa-plus "  style="padding: 5px;"></i>
               <p style="padding: 5px;">${cart[ele].qty}</p>
               <i data-id=${cart[ele].id} id="removing" class="fa-solid fa-minus" style="padding: 5px;"></i>
           </div>
           <div>
               <p>${cart[ele].qty} x ${cart[ele].price}</p>
               </div>
            </div>    
                
      </div>`
      
   storeInit+=productList;
    summary()

  }
   function summary(){
    let products=0;
    for (let ele in cart){
      products+=cart[ele].qty
    }
    let sum=0;
    for (let ele in cart){
      sum+=cart[ele].qty*cart[ele].price
    }

    

    let summary=` <div class="summary" style="border: 1px solid rgb(222, 219, 219); border-radius: 5px; width: 250px; text-align: center; height:210px;">
                    <h4 style="border: 1px solid gray;background-color:rgb(222, 219, 219);">Summary</h4> 
                    <p style="word-spacing :90px;">Products(${products}) <span>$${Math.floor(sum)}</span></p>
                    <p style="word-spacing :120px;">Shipping <span>$30</span></p>
                    <p style="word-spacing :80px;">Totalamount <span>$${Math.floor(sum)+30}</span></p>
                    <button style="background-color: black;color: white;width: 220px; height: 40px; border: 0px;">Go to checkout</button>
                </div>`
     document.querySelector(".forsummary").innerHTML=summary           
   } 

  oneProductItemsinCart.innerHTML=storeInit;

  let adding= document.querySelectorAll("#adding");
  let removing = document.querySelectorAll("#removing");    
//   for adding the value of the cart

  function addingHandler(){
      adding.forEach((sum)=>{
       sum.addEventListener("click",(e)=>{
             let id = e.target.dataset.id;
            cart[id].qty++;
            localStorage.setItem("cart",JSON.stringify(cart)) 
               cartproducts(cart,data)
        })
      })    
  }
  addingHandler()

//   for subracting the value of the cart
function subractingHandler(){
removing.forEach((sub)=>{
    sub.addEventListener("click",(e)=>{
        let id = e.target.dataset.id;
        cart[id].qty--;
        localStorage.setItem("cart",JSON.stringify(cart))
        cartproducts(cart,data)
    })
})
}
subractingHandler()
  
  
}












