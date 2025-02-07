let maindiv = document.querySelector(".maindiv");



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


function createcards(source){
    var image =""
  source.forEach((currObj) => {
    let x =  `
     "<div class="card  col-4" style="width: 18rem; display:flex; margin:7px;text-align: center;">
    <img src="${currObj.image}" class="card-img-top" alt="iamges is not getting">
    <div class="card-body">
      <h5 class="card-title" style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${currObj.title}</h5>
      <p class="card-text" style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${currObj.description}</p><hr>
      <p>${currObj.price} </p>
    </div><hr>
    <div class="card-body">
     <button type="button" class="btn btn-dark details"data-id="${currObj.id}">Details</button>
     <button type="button" class="btn btn-dark">Add to Cart</button>
    </div>
  </div>`


  image+=x;
})
   maindiv.innerHTML=image;
}

function productDetailsData (data){


  let  singleData =data.filter((ele)=>{return ele.id==id })
  console.log(singleData);
  singleData[0].id

  let oneProductDetails  =      `
 <div class="container" style="margin-top: 80px;">
                <div class="row">
                    <div class="col-6">
                      <img src="${singleData[0].image}" alt="no image">
                    </div>
                    <div class="col-6" style="padding-left: 5%;">
                      <h1 style="color: gray;">${singleData[0].category}</h1>
                      <h2>${singleData[0].title}</h2>
                        <p>${singleData[0].rate}</p>
                      <h4>${singleData[0].price}</h4>
                        <p style="color: gray;">${singleData[0].description}</p>
                            <div class="divbutton">
                                <button type="button" class="btn btn-light details "data-id="${singleData.id}">Add to Cart</button>
                                <button type="button" class="btn btn-dark">Go to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      `
      maindiv.innerHTML=oneProductDetails;
 }



   
