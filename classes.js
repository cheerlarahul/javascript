// classes is used to The class keyword is used to create a class. The properties are assigned in a constructor function.


class human{
    constructor(name,age,hobbies,salary){
        this.name=name;
        this.age=age;
        this.hobbies=hobbies;
        this.salary=salary
    }

    get hobbiesupdate(){
        return this.hobbies+"reading newspaper"
    }

 
    set salaryupdate(s){

this.salary=s;
    }
}

const human1=new human("alex",25,['playing','movies','tech'],50000)

const human2=new human("alex",25,['playing','movies','tech'],0)



console.log(human1.hobbiesupdate)

human2.salaryupdate=10;

console.log(human2.salary);