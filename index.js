// console.log("Hello, World!");
// console.log("This is a sample JavaScript file.");

// let a = 34;
// if (a>10) {
//     let  a = 40;
//     console.log("a is inside the block: " + a);
// }
// console.log("a is outside the block: " + a);

// function sum(a, b) {
//     return a + b;
// }
// console.log("The sum is: " + sum(230,30));


// const sum = (a, b) => { return a + b };
// console.log("The sum is: " + sum(12,30));

// const data = function(msg){
//     return "hello , i m using js"+ msg;
// }
// console.log(data("and node"));


// (() => {
    // console.log("This is an IIFE (Immediately Invoked Function Expression)");
// })();


// function sum(a, b) {
//     return a + b;
// }

// function sumwithmsg(clbk,msg){
//     const result = clbk(2,6);
//     console.log("hey, your result is: " + result + " and your message is: " + msg);
// }

// sumwithmsg(sum, "Hello, this is a test message!");

// function login(msg,error){
//     if(error){
//         console.log("Error: " + error);
//     }
//     else{
//         console.log("Success: " + msg);
//     }
// }

// function loginhandler(username, password, callback){
//     if(username == "shivam" && password == "12345"){
//         callback("Login successful!", null);
//     }
//     else{
//         callback(null, "Invalid username or password.");
//     }
// }

// // loginhandler("shivam", "12345", login);
// loginhandler("shivam", "wrongpassword", login);

// console.log("one")
// setTimeout(() => {
//     console.log("two")
// }, 10);
// // console.log("two")
// console.log("three")

// setTimeout(() => {
//     console.log("one");
//     setTimeout(() => {
//         console.log("two");
//         setTimeout(() => {
//             console.log("three");
//             setTimeout(() => {
//                 console.log("four");
//                 setTimeout(() => {
//                     console.log("five");
//                     setTimeout(() => {
//                         console.log("six");
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// const mypromise = new Promise((resolve, reject) => {
//     const username = "shivam";
//     const password = "12345";
//     if (username === "shivam" && password === "12345") {
//         resolve("Login successful!");
//     }
//     else {
//         reject("Invalid username or password.");
//     }
// })

// mypromise.then((msg) => {
//     console.log("Success: " + msg);
// }).catch((error) => {
//     console.log("Error: " + error);
// }).finally(() => {
//     console.log("All done");
// });


// const mypromise = new Promise((resolve, reject) => {
//     const number = 4; 
//     if (number % 2 === 0) {
//         resolve("even");
//     }
//     else {
//         reject("odd");
//     }
// })

// mypromise.then((msg) => {
//     console.log("Success: " + msg);
// }).catch((error) => {
//     console.log("Error: " + error);
// }).finally(() => {
//     console.log("All done");
// });

// async function handledata(){
//     try{
//         console.log("Before promise");
//         const q = await mypromise;
//         console.log(q);
//     }
//     catch(err){
//         console.log("Error: " + err);
//     }
//     finally{
//         console.log("All done");
//     }
// }
// handledata();


// const mypromise = new Promise((resolve, reject) => {
//     const username = "shivam";
//     const password = "12345";   
//     if (username === "shivam" && password === "12345") {
//         resolve("Success");
        
//     }   
//     else {
//         reject("Invalid username or password.");
//     }
// })

// // async function handledata(){
// //     try{
// //         console.log("Before promise");
// //         const q = await mypromise;
// //         console.log(q);
// //     }
// //     catch(err){
// //         console.log("Error: " + err);
// //     }finally{
// //         console.log("All done");
// //     }
// // }
// // handledata();
// const orderreceive = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Order received");
//     }, 1000);
// });

// async function handledata2(){
//     try{
//         const msg = await mypromise;
//         if(msg == "Success"){
//             const orderstatus = await orderreceive;
//             setTimeout(() => {
//                 console.log("Order received");
                
//             }, 1000);
//         }
//         console.log(msg);
//     }
//     catch(err){
//         console.log("Error: " + err);
//     }
//     finally{
//         console.log("All done");
//     }
// }
// handledata2();

// function orderreceive() {
    
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order received");
//         }, 1000);
//     })
// }

// async function orderhandler(){
//     try{
//     const status = await orderreceive();
//     const prepare = await orderprepared();
//     const dispatch = await orderspatch();
//     const deliever = await orderdelieverd();
//     console.log(status)
//     }catch(err){
//         console.log(err);
//     }
// }

// orderreceive().then((msg) =>{
//     console.log(msg)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log("All done");
// })

//  function orderprepared() {
    
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order prepare");
//         }, 1000);
//     })
// }
// function orderspatch() {
    
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order is dispatched");
//         }, 1000);
//     })
// }
// function orderdelieverd() {
    
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order delivered");
//         }, 1000);
//     })
// }

// orderhandler().then((msg) => {
//     console.log(msg)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log("All done");
// })
 
// function orderRecieve() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order received");
//         }, 1000);
//     });
// }

// async function orderHandler(){
//     try{
//     const status=await orderRecieve();
//     console.log(status)
//     }catch(err){
//         console.log(err)
//     }
// }

// orderHandler();

// function orderPrepared() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order prepared");
//         }, 1000);
//     });
// }


// function orderDispatched() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order dispatched");
//         }, 1000);
//     });
// }

// function orderDelivered() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order delivered");
//         }, 1000);
//     });
// }

// async function orderHandler() {
//     try {
//         console.log(await orderRecieve());
//         console.log(await orderPrepared());
//         console.log(await orderDispatched());
//         console.log(await orderDelivered());

//         console.log("Thank you for shopping with us!");
//     } catch (err) {
//         console.log(err);
//     }
// }

// orderHandler();

// function fetchdata(){
//     const serverdata = fetch('https://fakestoreapi.com/products')
//     console.log(serverdata)
// }
const button = document.getElementById('myButton');
const container = document.getElementById('container');
console.log(button)
async function fetchdata(){
        const serverdata = await fetch('https://fakestoreapi.com/products');
        const data = await serverdata.json();
        // console.log(data);   
        container.innerHTML = `JSON.stringify(${data})`
}

button.addEventListener('click', fetchdata);
// fetchdata();