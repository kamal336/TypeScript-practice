"use strict";
// declare variable type
let myName = 'Akter Kamal';
let age = 30;
let isMarried = false;
isMarried = true;
console.log(myName, age, isMarried);
// any type variable 
let salary = 30000;
salary = 'No job yet';
console.log(salary);
// Array type
const friends = ['naim', 'koli', 'akter', 'dewan'];
console.log(friends);
const ages = [33, 11, 44, 55, 21, 52];
ages.push(33);
console.log(ages);
// typescript function 
function add(first, second) {
    const result = first + second;
    return result;
}
console.log(add(353, 22));
// Arrow function
const getDetails = (name, myAge) => {
    const detail = name + myAge;
    return detail;
};
console.log(getDetails('kamal ', 32));
// object type 
const myObj = {
    name: 'sahi',
    age: 31,
    salary: 133000,
    gender: 'male',
    liveIn: 'South Korea'
};
console.log(myObj);
