let maindiv = document.querySelector(".allProduct");
let onclickDetails = document.querySelector(".onclickDetails")
let PPdetails = document.querySelector(".PPdetails")

 
let id = localStorage.getItem("id")
let dataPro = []

async  function fetchDataforProd (){
    const response =await fetch ("https://fakestoreapi.com/products")
    const data = await response.json ()
    console.log(data);
    
    data.map ((ele)=>{
        dataPro.push(ele);
    })
   
    if(id=="details"){
     createcards(data)
    
    }
   else{ 
       productDetailsData(data)
       
   }
}

fetchDataforProd()


// for five buttons funcations starts
 // for all button
 let allbtn = document.getElementById("all");

 allbtn.addEventListener("click",()=>{
 createcards(dataPro);
 })

// for mens button
let menbtn = document.getElementById("men");

 menbtn.addEventListener("click",()=>{
  let mens = dataPro.filter(ele=>ele.category=="men's clothing")
  createcards(mens);
  })

  // for womens button
  let womenbtn = document.getElementById("women");

  womenbtn.addEventListener("click",()=>{
    let women = dataPro.filter(ele=>ele.category=="women's clothing")
    createcards(women);
  })

  // for jewelery button
  let jewbtn = document.getElementById("jew");

  jewbtn.addEventListener("click",()=>{
    let jews = dataPro.filter(ele=>ele.category=="jewelery")
    createcards(jews);
    })

  // for electronic button
  let elebtn = document.getElementById("ele");

  elebtn.addEventListener("click",()=>{
    let ele = dataPro.filter(ele=>ele.category=="electronics")
    createcards(ele)
  })  ;
// for five buttons funcations ends




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
        <p>$659</p>
        <hr>
            <button  class="details" style="padding: 10px;padding-left: 20px;padding-right:20px;color:white;background-color: black; border: 0cap;border-radius: 3px;text-align: center;font-size: medium;"  data-hh="${currObj.id}" >Details</button>
            <button  data-id="${currObj.id}" data-image="${currObj.image}" data-price="${currObj.price}" data-title="${currObj.title}"class="addToCart" style="padding: 10px;padding-left: 20px;padding-right:20px;color:white;background-color: black; border: 0cap;border-radius: 3px;text-align: center;font-size: medium;" >Add to Cart</button>
    </div>

     `


  image+=x;
})
   maindiv.innerHTML=image;
   let cartBtns =document.querySelectorAll(".addToCart")
   addtocart(cartBtns)
}

function productDetailsData (data){


  let  singleData =data.filter((ele)=>{return ele.id==id })
  console.log(singleData);
  singleData[0].id

  let oneProductDetails  =  
  
      `
    <div style="display:flex;">      
      <div class="container" style="width:50%; height: 200px; width:500px"> 
                      <img src="${singleData[0].image}" alt="no image" style="height:400px;">
      </div>
             <div class="container" style=" width:50%;>
                      <h1  class="display-1"style="color:gray;"> ${singleData[0].category} </h1>
                      <h2>${singleData[0].title}</h2>
                      <p>${singleData[0].rate}</p>
                      <h4>${singleData[0].price}</h4>
                      <p style="color: gray;">${singleData[0].description}</p>
                      <button  type="button" class="btn btn-light details "data-id="${singleData.id}">Add to Cart</button>
                      <button  type="button" class="btn btn-dark"><a href="./cart.html">Go to Cart</a></button>
              </div> 
              
      </div>        
      `
      onclickDetails.innerHTML=oneProductDetails;
 }





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
 document.querySelector(".cartValue").innerText=count
 localStorage.setItem("count",count)
}


let detailsBtn = document.querySelectorAll(".details")
detailsBtn.forEach((deBtn)=>{
  deBtn.addEventListener("click",(e)=>{
     let id = e.target.dataset.id
   
    })
  })
  let hh = e.target.dataset.hh  
  console.log(hh);
  
