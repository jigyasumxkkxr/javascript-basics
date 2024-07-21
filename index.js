// let firstName="Jigyasu"
// let lastName="Makkar"
// console.log("Welcome "+firstName+" "+lastName)

// let firstName="reena"
// let gender="female"
// if(gender=="female"){
//     console.log("welcome "+firstName)
// }
// else{
//     console.log("you are a man")
// }

// for(let i=0;i<=100;i++){
//     console.log(i)
// }

// const ageArray=[15,25,2,5,56,63,12,5,3,5]

// // for(let i=0;i<ageArray.length;i++){
// //     if(ageArray[i]%2==0){
// //         console.log(ageArray[i])
// //     }
// // }

// let minNumber=ageArray[0];
// for(let i=1;i<ageArray.length;i++){
//     if(ageArray[i]>minNumber){
//         minNumber=ageArray[i];
//     }
// }
// console.log(minNumber);

// const personArray=["jigyasu","riya","himanshu"]
// const genderArray=["male","female","male"]
// for(let i=0;i<personArray.length;i++){
//     if(genderArray[i]=="male"){
//         console.log(personArray[i])
//     }
// }

// const user1={
//     firstName:"jigyasu",
//     gender:"male"
// }
// console.log(user1["firstName"])

// const users=[{
//     firstName:"jigyasu",
//     gender:"male"
// },{
//     firstName:"riya",
//     gender:"female"
// },{
//     firstName:"himanshu",
//     gender:"male"
// }]
// let usersLenght=users.length;
// for(let i=0;i<usersLenght;i++){
//     if(users[i]["gender"]=="male"){
//         console.log(users[i]["firstName"])
//     }
// }

// const arr=[1,2,3,4,5,6,7,8,9]
// arr.reverse()
// console.log(arr)

// function sum(a,b){
//     return a+b;
// }
// const value=sum(2,6);
// console.log(value)

// function sum(num1, num2, funtoCall) {
//     let result = num1 + num2;
//     funtoCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum
// sum(1,5,displayResult);

// function calculateArithmetic(a,b,type){
//     if(type=="sum"){
//         return a+b;
//     }
//     else if(type=="diff"){
//         return a-b;
//     }
//     else if(type=="mul"){
//         return a*b;
//     }
//     else{
//         return a/b;
//     }
// }
// let ans=calculateArithmetic(5,4,"div");
// console.log(ans);

// function calculateArithmetic(a, b, funtoCall){
//     return funtoCall(a,b);
// }

// function sum(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// let value=calculateArithmetic(5,4,sub);
// console.log(value)

// function sayhello(){
//     console.log("hello world");
// }

// setTimeout(sayhello,2000); // setTimeout(function,delay,arg1,arg2,....)

// let timeoutID = setTimeout(function() {
//     console.log('This message will not be displayed.');
//   }, 5000);
  
//   // Clear the timeout before it executes
//   clearTimeout(timeoutID);
  
// let intervalID = setInterval(function() {
//     console.log('This message will be displayed every 5 seconds.');
//   }, 5000);
  
//   // Clear the interval after 15 seconds
//   setTimeout(function() {
//     clearInterval(intervalID);
//     console.log('Interval cleared.');
//   }, 15000);
  