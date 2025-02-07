let row = document.querySelector(".row");





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
      let x =  `
       <div class="card  col-4" style="width: 50px;  display:grid; margin:7px;text-align: center;">
      <img src="${currObj.image}"alt="iamges is not getting">
         
        <h5 class="card-title" style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${currObj.title}</h5>
        <p class="card-text" style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${currObj.description}</p><hr>
        <p>${currObj.price} </p>
      </div><hr>
      <div class="card-body">
       <button type="button" class="btn btn-dark details " data-id="${currObj.id}">Details</button>
       <button type="button" class="btn btn-dark">Add to Cart</button>
      </div>
    </div>`
    image+=x;
  })
      row.innerHTML=image;
      let detailsBtn = document.querySelectorAll(".details")
      detailsBtn.forEach((deBtn)=>{
        deBtn.addEventListener("click",(e)=>{
           let id = e.target.dataset.id 
            console.log(e);
           
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

    // setting data into localstorage 
    // localStorage.setItem("source",)


    // ----for details button 
    // let detaBtn = document.getElementsByClassName("details")

    //   detaBtn.addEventListener("click",(e)=>{

    //         console.log("the button wass  clicked!");
            
    //   });

    
    // let dbtn = `${data1.title}`

    // console.log(dbtn);


    let productpage = document.getElementById("productpage")

productpage.addEventListener("click",(e)=>{
    localStorage.setItem("id",e.target.dataset.id)
})
    
    
   



 