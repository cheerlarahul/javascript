// Named function

function message(){
    console.log('named function message')
}

message();


// anonymous function

let fun1 = function (){
    console.log("anonymous function")
} 
fun1();
//imediately invoked function

let fun2=(function(num){
    console.log("imediately invoked function")
    console.log(num)
})(6);


//arrow function

let fun3=()=>console.log("arrow function")
fun3();