// index page images insert and edit all the images starts


// async function fetchData (){
//     const response = await fetch ("https://fakestoreapi.com/products")
//     const data = await response.json ()
//     console.log(data);
    
//     data.forEach((currObj) => {
//         const image =  `
//          <div class="card" style="width: 18rem;">
//         <img src="${currObj.image}" class="card-img-top" alt="iamges is not getting">
//         <div class="card-body">
//           <h5 class="card-title">thank u jesus</h5>
//           <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis repudiandae iure ex nemo optio perspiciatis omnis quae eligendi soluta ab et id architecto neque praesentium, at consequuntur voluptatum cumque?</p>
//           <p>$ 109.95 </p>
//         </div>
//         <div class="card-body">
//          <button>Details</button>
//          <button>Add to Cart</button>
//         </div>
//       </div>`
//       iImages.innerHTML = image;
//     })

// }
// fetchData()



// const productsData = []

// async function fetchData() {
//     const response = await fetch("https://fakestoreapi.com/products")
//     const data = await response.json()

//     data.products.forEach((currObj)=>{
//         productsData.push(currObj)
//     })
//     displayProducts(data.products)   
    
// }
// fetchData()

// function displayProducts(products){
//     let prodDivs = ""

//     products.map((prod)=>{
//         prodDivs += `
//              <div class="card" style="width: 18rem;">
//          <img src="${prod.image}" class="card-img-top" alt="iamges is not getting">
//          <div class="card-body">
//            <h5 class="card-title">thank u jesus</h5>
//            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis repudiandae iure ex nemo optio perspiciatis omnis quae eligendi soluta ab et id architecto neque praesentium, at consequuntur voluptatum cumque?</p>
//            <p>$ 109.95 </p>
//          </div>
//          <div class="card-body">
//           <button>Details</button>
//           <button>Add to Cart</button>
//          </div>
//        </div>        `
//     })
//     productsDiv.innerHTML = prodDivs
// }




// fetch ("https://fakestoreapi.com/products")

//     .then((res)=> res.json())
//     .then ((data)=> console.log(data) );
    



//     data.forEach((currObj)=>{
//         const proData = `
//          <div class="card" style="width: 18rem;">
//          <img src="${currObj.image}" class="card-img-top" alt="iamges is not getting">
//          <div class="card-body">
//            <h5 class="card-title">${title}</h5>
//            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis repudiandae iure ex nemo optio perspiciatis omnis quae eligendi soluta ab et id architecto neque praesentium, at consequuntur voluptatum cumque?</p>
//            <p>$ 109.95 </p>
//          </div>
//          <div class="card-body">
//           <button>Details</button>
//           <button>Add to Cart</button>
//          </div>
//        </div>
    
//        `

//        iImages.innerHTML = proData 
//     })
    

// const iImages = document.getElementById("indexImg")


const ele = document.getElementsByClassName(".container")
fetchData()
async function fetchData() {
    const response = await fetch ("https://fakestoreapi.com/products")
    const data = await response.json()
    console.log(data);
    

    data.forEach ((currObj)=>{
        const list =`<h1>${currObj.price}</h1>`
       
        list.
    })
}





 //index page images insert and edit all the images ends
