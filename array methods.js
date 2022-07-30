// ARRAY LENGTH

let arr=[10,20,30,40,50]

console.log(arr.length)

// push an element to an array


console.log(arr.push(60))

console.log(arr)

// pop an element to an array

console.log(arr.pop(60))

console.log(arr)


//remove  an first element to an array


console.log(arr.shift())

console.log(arr)

// add  an first element to an array

console.log(arr.unshift(10))

console.log(arr)


// reverse an array


console.log(arr.reverse())


// sorting of an array

let arr1=['cat','apple','xerox']

let arr2=[20,10,70,60,]

console.log(arr1.sort())

console.log(arr1)

console.log(arr2.sort())

console.log(arr2)


//join is seperate ajn each elemet in array with given input

console.log(arr1.join(" "))


// array converted to string


console.log(arr2.toString())


// fill is used to fill the total array with input

// filling element and we can give index where start the filling of element

// console.log(arr.fill(100))

// console.log(arr.fill(100,1))


//merge two array concat

console.log(arr1.concat(arr2))


//splice The splice() method returns an array by changing (adding/removing) its elements in place.

//(startingindex,number  of items remove, add item ,add item)

console.log(arr)

console.log(arr.splice(1,0,"50",'70'))


// find  Index of an element

console.log(arr.indexOf(50))

// find last Index of an element

arr.push(50);

console.log(arr.lastIndexOf(50));


// slice is subarray of given array

// (startindex,endinedx) end index not included

console.log(arr)

console.log(arr.slice(1,4))


// includes check that elemnt is included in array

console.log(arr.includes(50))

//The map() method creates a new array with the results of calling a function for every array element.

let arr3=[1,2,3,4,5]
function multiply(num){
return num*2;
}
multiply(arr3);

console.log(arr3.map(multiply))


//foreach The forEach() method executes a provided function for each array element.

//not return anything 

function increase(num){
return ++num;
}
multiply(arr3);

console.log(arr3.map(increase))


