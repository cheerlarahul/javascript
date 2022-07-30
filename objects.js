// object


let obj1={
    name:"Alex",
    age:22,
    gender:"Male",
    place:"Hyderbad",
    like:["food",'gaming','movies'],
    adress:{
        Street: "Z-20 Sector 12",
        City: "Hyderabad",
        StateFull: "India"
    }
}

// object properties acessing (dot) notation

console.log(obj1)

console.log(obj1.like[0])

console.log(obj1.adress.City)


// object properties acessing [bracket] notation

console.log(obj1.adress["Street"])

console.log(obj1.adress["StateFull"])

obj1.salary=50000;



console.log(obj1.name="alexa");

const{name,age,gender,}= obj1;

const{name:n, age:a, gender:g}=obj1;

console.log(name);
console.log(obj1);


console.log(n)

const{code="XYZ"}=obj1;

console.log(code)

console.log(obj1)

for(let element in obj1){
    console.log(obj1[element]);
}