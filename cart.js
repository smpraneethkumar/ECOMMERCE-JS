

let defDisplay = `
<div class="container">
    <h1>Cart</h1>
    <hr> <br><br><br>
    <h1 class="display-1"> Your Cart is Empty</h1>
    <button type="button" class="btn btn-outline-dark"><a class="nav-link active" aria-current="page" href="product.html"> Continue Shopping</a></button>

</div>`

console.log(defDisplay);

let itemList = document.getElementById("itemList")


let itemData = []

async function fetchDataforProd() {
    const response = await fetch ("https://fakestoreapi.com/products")
    const data = await response.json()
    console.log(data);
    
    data.map((ele)=>{
        itemData.push(ele);
    })
    
}
fetchDataforProd()