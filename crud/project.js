let superheroes=[
{
	name:"Samarth",
	age:22,
	planet:"Asgard",
	height:"6.3"
},
{
	name:"Gauri",
	age:23,
	planet:"Earth",
	height:"6"
},
{
	name:"teju",
	age:23,
	planet:"Asgard",
	height:"5.2"
}

]

function display(superarray){
  let tabledata="";
 
  superarray.forEach(function (superhero,index) {
  	
  	let currestrow = `<tr>
               <td>${index+1} </td>
               <td>${superhero.name} </td>
               <td>${superhero.age} </td>
               <td>${superhero.planet} </td>
               <td>${superhero.height} </td>
               <td><button onclick='deletesuperhero(${index})' >Delete</button>
              <button onclick='showmodal(${index})' >Update</button></td>

  	</tr>`
     tabledata += currestrow;
  	
  });
  document.getElementsByClassName("tdata")[0].innerHTML=tabledata;
  /*document.getElementById("tdata").innerHTML = tabledata;*/

}
display(superheroes);

//Add value and display
function addsuperhero(e) {
	e.preventDefault();
	let superhero={};

	let name=document.getElementById('name').value;
	let age=document.getElementById('age').value;
	let planet=document.getElementById('planet').value;
	let height=document.getElementById('height').value;

superhero.name=name;
superhero.age=Number(age);  //conver string to number
superhero.planet=planet;
superhero.height=height;
superheroes.push(superhero);

/*console.log(superheroes);*/
	/*console.log(name,age,planet,height);*/
	display(superheroes);

	document.getElementById('name').value="";
     document.getElementById('age').value="";
	document.getElementById('planet').value="";
	document.getElementById('height').value="";

}

//search code  =>
function searchbyname() {
	let search=document.getElementById('searchname').value;
	let newdata=superheroes.filter(function (superhero) {
		return superhero.name.indexOf(search)!=-1;

	})
	display(newdata);
	
}

//delete
function deletesuperhero(index) {
superheroes.splice(index,1);
display(superheroes);
}

let updataIndex;


function copysuperhero(index) {
	updataIndex=index;
	console.log(updataIndex);
	 let superhero=superheroes[index];
    console.log(superhero);

    document.getElementById('upname').value=superhero.name;
     document.getElementById('upage').value=superhero.age;
	document.getElementById('upplanet').value=superhero.planet;
	document.getElementById('upheight').value=superhero.height;
}

//update code

function updateSuperhero(e) {
	e.preventDefault();
	let superhero=superheroes[updataIndex];
   console.log(superhero);
	let name=document.getElementById('upname').value;
	let age=document.getElementById('upage').value;
	let planet=document.getElementById('upplanet').value;
	let height=document.getElementById('upheight').value;

superhero.name=name;
superhero.age=Number(age);  //conver string to number
superhero.planet=planet;
superhero.height=height;

   console.log(superhero);

/*console.log(superheroes);*/
	/*console.log(name,age,planet,height);*/
	display(superheroes);

	//code fro hide any where
let modal=document.getElementsByClassName("modal")[0];
	modal.style.display="none";
	
}

//show table
function showmodal(index){
	let modal=document.getElementsByClassName("modal")[0];
	modal.style.display="block";
	copysuperhero(index);

}

//hide table
function hidemodal(event){
	if(event.target.className=="modal"){
		let modal=document.getElementsByClassName("modal")[0];
	modal.style.display="none";
	}
	
}