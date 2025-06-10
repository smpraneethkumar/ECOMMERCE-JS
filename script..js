let row = document.querySelector(".homeProduct");
let cartValue = document.querySelector("span");
let data1 = []

async function fetchData (){
        const response = await fetch ("https://fakestoreapi.com/products")
        const data = await response.json ()
        console.log(data);
        createcards(data);
        data.map((ele)=>{
          data1.push(ele);
        })
    }
    fetchData()
  
    function createcards(source){
      var image =""
    source.forEach((currObj) => {
    let x = 
    `
     <div  style="border: 1px solid gray; border-radius: 5px; width: 430px;text-align: center;height: 480px; ">
        <img src="${currObj.image}" alt="" style="width: 250px;height: 270px;">
        <h4 class="dis" style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${currObj.title}</h4>
        <p style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${currObj.description}</p>
        <hr>
        <p>$${currObj.price}</p>
        <hr>
        <button class="details" style="padding:10px;padding-left:20px;padding-right:20px;color:white;background-color: black; border:0cap;border-radius:3px;text-align:center;font-size:medium;"  data-id="${currObj.id}">Details</button>
        <button  data-id="${currObj.id}" data-image="${currObj.image}" data-price="${currObj.price}" data-title="${currObj.title}" class="addToCart" style="padding:10px;padding-left:20px;padding-right:20px;color:white;background-color:black; border:0cap;border-radius:3px;text-align: center;font-size: medium;" >Add to Cart</button>
      </div>
    `
    image+=x;
  })
 
      row.innerHTML=image;

      let addBtn = document.querySelectorAll(".addToCart");  
     
     addtocart(addBtn)
      
      
      let detailsBtn = document.querySelectorAll(".details")
      detailsBtn.forEach((deBtn)=>{
        deBtn.addEventListener("click",(e)=>{
           let id = e.target.dataset.id
                    
                 localStorage.setItem("id",id) 
                 console.log(localStorage.getItem("id"));          
                window.location.href="./product.html";
                })
              })
              
 }

    // for all button
    let allbtn = document.getElementById("all");

   allbtn.addEventListener("click",()=>{
   createcards(data1);
   })

// for mens button
let menbtn = document.getElementById("men");

   menbtn.addEventListener("click",()=>{
    let mens = data1.filter(ele=>ele.category=="men's clothing")
    createcards(mens);
    })

    // for womens button
    let womenbtn = document.getElementById("women");

    womenbtn.addEventListener("click",()=>{
      let women = data1.filter(ele=>ele.category=="women's clothing")
      createcards(women);
    })

    // for jewelery button
    let jewbtn = document.getElementById("jew");

    jewbtn.addEventListener("click",()=>{
      let jews = data1.filter(ele=>ele.category=="jewelery")
      createcards(jews);
      })

    // for electronic button
    let elebtn = document.getElementById("ele");

    elebtn.addEventListener("click",()=>{  
      let ele = data1.filter(ele=>ele.category=="electronics")
      createcards(ele)
    })  ;


    let productpage = document.getElementById("productpage")

productpage.addEventListener("click",(e)=>{
    localStorage.setItem("id",e.target.dataset.id)
})
    

  let cart={}
  let count=0;
  // for add  to cart btn
 
  if(localStorage.getItem("cart")){
    cart=JSON.parse(localStorage.getItem("cart"))
  }
  if(localStorage.getItem("count")){
    count=parseInt(localStorage.getItem("count"))
  } 
  updatecart()

  function addtocart(addBtn){
      addBtn.forEach((ele)=>{
        ele.addEventListener("click",(e)=>{
          let Id = e.target.dataset.id;
          console.log(Id);
          
          let Image = e.target.dataset.image;
          let Title = e.target.dataset.title;
          let Price = e.target.dataset.price;
      
          if(Id in cart){
            cart[Id].qty++
          }
        else{
          cartItems={
              id:Id,
              image:Image,
              title:Title,
              price:Price,
              qty:1
          }
          cart[Id]=cartItems
          count =count+1
      
          console.log(cart);
          
        }
        localStorage.setItem("cart",JSON.stringify(cart))
      
        // let cartCount = localStorage.getItem("count")
        updatecart()
        
    
        })
      })
}    

function updatecart(){ 
  cartValue.innerText=count
  localStorage.setItem("count",count)
}
 