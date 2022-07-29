let string1="strings demo";

let string2="   string2      ";

let startindex=0;

let endindex=6;

//length of a string

console.log(string1.length);

//substring of a string

console.log("substring :"+string1.substring(startindex,endindex))

// slice reurns sub part of string in new string


console.log("slice :"+string1.slice(1,5))


//merge of two strings concat

console.log(string1.concat(string2));


//remove spaces of a string trim()

console.log(string2.trim());



console.log(string1.slice(-12,-1));

//check string starts with
console.log(string1.startsWith("string"))

//check a string ends with
console.log(string1.endsWith("demo"))

//to uppercase 

console.log(string1.toUpperCase());

console.log(string1.toLocaleUpperCase())


//to lowercase


console.log(string1.toLocaleLowerCase());

console.log(string1.toLocaleLowerCase());


//index of return index if not found return -1

console.log(string1.indexOf("demo"));

console.log(string1.indexOf("k"));

//lastIndex of return last index if not found return -1

console.log(string1.lastIndexOf("s"));


//charAt() fid the charcter at given index by default it will take o th index


console.log(string1.charAt(5));

//charCodeAt() returns unicode of string unicode is alpahbets and symbols denoted by digits

console.log(string1.charCodeAt(5));


//replace a text in string

console.log(string1.replace('demo','Demo'));

//replace all 

console.log(string1.replace('s','D'));


//padding of a string padding value will be greaterthan length of string

let str2="padding";

console.log(str2.padStart(8,'*'));

//padding of a string padding value will be greaterthan length of string

console.log(str2.padEnd(8,"*"));


//repeat a string

console.log(str2.repeat(3));


//split of a string into single word

console.log(string1.split(''))


console.log(string1.split('.'))

console.log(string1.split(';'))

//search a string


console.log(string1.search('demo'));

//reverse of a string

let ssp=string1.split("");

let se=(ssp.reverse());

console.log(se.join(''))


// for (let index = 0; index < string1.length-1; index++) {
    
//     console.log(index)
// }

function reverse(str){

if(str==="")
    return "";
    else
        return "rev" + reverse(str.substr(1)) + str.charAt(0);

}

reverse("string1");


