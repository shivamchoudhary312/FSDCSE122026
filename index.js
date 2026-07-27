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

function login(msg,error){
    if(error){
        console.log("Error: " + error);
    }
    else{
        console.log("Success: " + msg);
    }
}

function loginhandler(username, password, callback){
    if(username == "shivam" && password == "12345"){
        callback("Login successful!", null);
    }
    else{
        callback(null, "Invalid username or password.");
    }
}

// loginhandler("shivam", "12345", login);
loginhandler("shivam", "wrongpassword", login);
