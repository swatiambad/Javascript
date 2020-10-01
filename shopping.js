let products=[{
	name:"White Shirts",
	size:"L",
	color:"White",
	price:1200,
	image:"men1.jpg",
	description:"Good Looking Shirt"
},
{
	name:"Blue Shirts",
	size:"M",
	color:"Blue",
	price:1300,
	image:"men2.jpg",
	description:"Good Looking blue Shirt"
},
{
	name:"Grey Shirts",
	size:"S",
	color:"Grey",
	price:1500,
	image:"men1.jpg",
	description:"Good Looking Grey Shirt"
},
{
	name:"Red Female Shirt",
	size:"L",
	color:"Red",
	price:1900,
	image:"w3.jpg",
	description:"Good Looking Formal Shirt"
},
{
	name:"Blazer Female",
	size:"M",
	color:"Red",
	price:1200,
	image:"w1.jpg",
	description:"Good Looking Blazer Shirt"
},
{
	name:"White Top",
	size:"S",
	color:"White",
	price:2000,
	image:"w5.jpg",
	description:"Good Looking white top"
},

];
cart=[];
function displayproducts(ProductsData,who="productwrapper") {
	
	let productstring="";
	ProductsData.forEach(function(product,index){
		let {name,size,color,price,image,description}=product;
		if(who=="productwrapper"){
			//let productString=JSON.stringify(product);
                 productstring+=`<div class="product">
				<div class="prodimg">
					<img src="product_images/${image}"  width="100%" />
				</div>
				<h3> ${name}</h3>
				<p>Price: ${price}</p>
				<p>Color: ${color}</p>
                <p>Size: ${size}</p>
                <p>${description}</p>
                <p>
                	<button OnClick='addToCart("${index}")'>Add to Cart</button>
                </p>
			</div>`;
		}
		else if(who=="cart"){
			//let productString=JSON.stringify(product);
                 productstring+=`<div class="product">
				<div class="prodimg">
					<img src="product_images/${image}"  width="100%" />
				</div>
				<h3> ${name}</h3>
				<p>Price: ${price}</p>
				<p>Color: ${color}</p>
                <p>Size: ${size}</p>
                <p>${description}</p>
                <p>
                	<button OnClick='removefromcart("${index}")'>Remove from Cart</button>
                </p>
			</div>`;
		}
		
	});
document.getElementById(who).innerHTML=productstring
}

displayproducts(products);


function searchproduct(searchvalue){
let searchproducts=products.filter(function(product,index){
	let searchString=product.name+" "+product.color+" "+product.description;
    return product.name.toUpperCase().indexOf(searchvalue.toUpperCase())!=-1;
})
displayproducts(searchproducts);
}

function addToCart(index){
	cart.push(products[index]);
  /*cart.push(JSON.parse(productString));*/
   console.log(cart);
   displayproducts(cart,"cart");
}

function removefromcart(index){
	cart.splice(index,1);
	displayproducts(cart,"cart");
}