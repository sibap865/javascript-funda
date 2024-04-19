// Fundamentals of JavaScripts
// Uncomment  w.r.t space and learn
// open index.html in live server (extension)
// check out results in console


// TOPICS:

// Array and objects
// functions return
// async js coding

// let's start 

// array 
var arr =[1,2,3,true,{},[],"",];
// you can put anything you want to store in array


// array: foreach,map,filter,find,index of

// array: foreach
var arr =[1,2,3,4];
// we are a funtion with param val for each val in the array
// arr.forEach(function(val){
//     console.log(val + 2);
//     console.log(val + " hello");
// })

// array: map
var arr =[1,2,3,4];
// var newArr =arr.map(function(val){
//     return 13;
// })
// console.log(newArr);


// var newArr =arr.map(function(val){
//     return val =12;
// })
// console.log(newArr);

// array: filter
// var arr =[1,2,3,4];
// var newArr =arr.filter(function(val){
//     if(val>3){return true;}
//     else return false; //(optional line)
// })
// console.log(newArr);


// array: find
// var arr =[1,2,3,4];
// var newArr =arr.find(function(val){
//     if(val === 2) return val;
// })
// console.log(newArr);

// array: indexOf
// var index =arr.indexOf(2);
// console.log(index);


// var obj ={
//     name:"sibaprasad",
//     age:21
// }
// console.log(obj.name)   //---|___
// console.log(obj['name'])//---| Both are same

// var obj ={
//     name:"sibaprasad",
//     age:21
// }
// // obj.age =25; we can change like this

// // if you  don't want change it in outside you can freeze it

// Object.freeze(obj);
// obj.age =25; //the value will not be update
// console.log(obj.age)   

// function length
// function abcd(a,b,c){

// }
// console.log(abcd.length);


// everything is object in javascript
// console.log(console.dir(abcd))

// not work normally 
// var blob = await fetch('https://randomuser.me/api/')
// var res =await blob.json();
// console.log(res);


// if code runs line by  line we call it as synchronous
//  asynchronous

// async function abcd(){
//     var call =await fetch('https://randomuser.me/api/');
//     var res = await call.json();

//     console.log(res.results[0].name);
// };

// abcd();








