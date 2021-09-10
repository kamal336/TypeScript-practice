// declare variable type
let  myName:string = 'Akter Kamal';
let age:number = 30;
let isMarried = false;
isMarried = true;
console.log(myName,age,isMarried)
// any type variable 
let salary: any = 30000;
salary = 'No job yet';
console.log(salary)

// Array type
const friends:string[] = ['naim','koli','akter','dewan'];
console.log(friends)

const ages: number[] = [33,11,44,55,21,52];
ages.push(33)
console.log(ages)

// typescript function 
function add (first:number,second:number):number{
    const result  = first + second;
    return result;
}

console.log(add(353,22))
 
// Arrow function
const getDetails = (name:string,myAge:number):string|number=>{
    const detail = name + myAge;
    return detail;
}

console.log(getDetails('kamal ',32));

// object type 
const myObj ={
    name: 'sahi',
    age: 31,
    salary: 133000,
    gender: 'male',
    liveIn: 'South Korea'
    
}
console.log(myObj)