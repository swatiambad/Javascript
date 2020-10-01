/*let counter=1;

function dosomething(){
	console.log(counter);
	if(counter==10){
		clearInterval(timer);
	}
	counter++;
	
}
let timer=setInterval("dosomething()",1000);*/


//setTimeout
/*let t=setTimeout(function() {
	console.log("hello");
}, 5000);

function add() {
 	clearTimeout(t);
 } */

 //currentDate
 
/* setInterval (function () {
 	let currentDate=new Date();
 	let currentTime=currentDate.toLocaleTimeString();
 document.getElementById('clock').innerHTML=currentTime;
 },1000);*/
 /*let currentDate=new Date();
 let currentTime=currentDate.toLocaleTimeString();
 document.getElementById('clock').innerHTML=currentTime;*/

 let users=[
 {name:"gauri",age:21},
 {name:"teju",age:20},
 {name:"swati",age:23}
 ];


let user;

 function getuser() {
 	return new Promise((resolve,reject)=>{
 		 user=users.filter(function (u) {
 			return u.age==21;
 		});
 		 if(user.length==1){
 		 	resolve(user[0]);
 		 }
 		 else{
 		 	reject("user was not found");
 		 }
 		
 });
 
}

function updateuser(user) {
	return new Promise((resolve,reject)=>{
		user.name="geet";
		resolve(user);
	});
}

function updateage(user) {
	return new Promise((resolve,reject)=>{
		user.age=25;
		resolve(user);
	});
}

async function callEverything() {
	let response=await getuser();
	console.log(response);
	let user1=await updateuser(response);
	console.log(user1);
	let user2=await updateage(user1);
	console.log(user2);

}
callEverything();

/*getuser()
.then((response)=>{
	console.log(response);
	updateuser(response).then((response1)=>{
		console.log(response1);
	});
    })

.catch((error)=>console.log(error));*/

/*function updatname() {*/
	/*setTimeout (function () {*/
	/*	user[0].name="geet";
	console.log(user[0]);*/
	/*},5000);*/
	
/*}*/
/*getuser(updatname);*/

/*getuser (function () {
	user[0].name="geet";
	console.log(user[0]);
});*/
/*let response=getuser();
console.log(response);*/
