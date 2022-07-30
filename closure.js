function closure(num){
    let x=0;
    
    function inner(){
for (let index = 0; index <=num; index++) {

    console.log(index)
}

    }
return inner;
}

let c1=closure(10);

c1();

//The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

// (arayitems,index,totalarray)

let arr1=[10,20,30,40,50]

console.log(arr1.map(item=>item*2))


//filer The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

// (arayitems,index,totalarray)


console.log(arr1.filter(num=>num>=20))


// for each The forEach() method calls a function and iterates over the elements of an array. The forEach() method can also be used on Maps and Sets.

// function(currentValue, index, arr) - a function to be run for each element of an array
// currentValue - the value of an array
// index (optional) - the index of the current element
// arr (optional) - the array of the current elements


arr1.forEach(item=>{
console.log(item)
})


//Reduce metod 

//(accumelator,element,index,array) by default give  one value to accumelator after every iteration accumelator valube will be the result of previous iteration

const add=arr1.reduce(function(acc,ele,ind,arr){
 return  (acc>ele) ? acc : ele;
},arr1[0]);

add;


//for of loop iterable - an iterable object (array, set, strings, etc).


for(let item of arr1){
    console.log(item)
}

let string='code'

for(let item of string){
    console.log(item)
}



// //for in loop iterable - an iterable object (array, set, strings, etc).

// for(let element in obj1){
//     console.log(obj1[element]);
// }



for(let ele in arr1){
    console.log(arr1[ele])
}


for(let str in string){
    console.log(string[str])
}