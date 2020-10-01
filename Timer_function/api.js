//fetch
//get Request

/*fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
  response.json().then((data) =>{
  	console.log(data);
  });
})
.catch(error=>{
	console.log(error);
})*/






//POST REQUEST

fetch("https://jsonplaceholder.typicode.com/users",{
	method:"POST",
	body:JSON.stringify({
		name:"Shubham",
		username:"shubh"
	}),
	headers:{
           "Content-Type":"application/json"
	},

}).then((response)=>{
	response.json().then((data)=>{
		console.log(data);
	});
});

