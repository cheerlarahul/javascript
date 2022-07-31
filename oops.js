//object create using normal

let oj1={
    name:'alexa',
    age:23
}


//object create using  Object.create()

let obj2=Object.create({})

obj2.name="alexa1";

obj2.age=50;

//object create using function

function obj3(){
    console.log("object")
}

let object3=new obj3()

object3.username="alexa2";

console.log(object3)

//object create using clas

class obj4{

}

let object4=new obj4();

object4.name="alexa4";

console.log(object4)



//class


class mobile{
    constructor(name,ram,color,rom,price){
        this.name=name;
        this.color=color;
        this.ram=ram;
        this.rom=rom;
        this.price=price;
    }

calling(){
    console.log("calling")
}

downloadapps(){
    console.log("apps downloaded")
}

installapps(){
console.log('apps are installed')
}

priceincrease(inc){
    this.price=inc;
}

}

let mobile2=new mobile("poco m4 pro","8GB","Black","128GB",16000)

mobile2.priceincrease(1000);

mobile2.price;

//ENCAPSULATION

class mobile{
    constructor(name,ram,color,rom,price){
        var name=name;
        var color=color;
        var ram=ram;
        var rom=rom;
        var price=price;
        var calling=()=>{
            console.log("calling")
        }
        
        var downloadapps=()=>{
            console.log("apps downloaded")
        }
        
        var installapps=()=>{
        console.log('apps are installed')
        }
        
        var priceincrease=(inc)=>{
            price=inc;
        }
        
        }
        
        
    }



    let mobile1=new mobile("poco m4 pro","8GB","Black","128GB",16000)
        
    mobile1.priceincrease(1000);
    
    mobile1.name;


    //abstraction



    //Inheritence


    class parent{
        constructor(){

        }

        get(){
            console.log("parent properties")
        }
    }
class child extends parent{

}

let child1=new child();


child1.get();

//Polymorphism


class parent{
    constructor(){

    }

    get(){
        console.log("parent properties")
    }
}
class child extends parent{
get(){
console.log("child")
}
}

let child3=new child();


child3.get();



//setTimeout excute a code after expire the time out

// use clearInterval to clear the interval


let id=setTimeout(time,i*1000)

function time(){
  for(var i=0; i<=5; i++){
    console.log(i)
  }
}


//set interval excutes repeatedly in given time interval

// use clearInterval to clear the interval

let id1=setInterval(time,1000)

function time(){
  for(let i=0;i<=5;i++){
     console.log(i)
  if(i==5){
  clearInterval(id1);  
  }
  }
 
}

