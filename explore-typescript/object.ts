// declare object type
const student:{name:string,age:number,salary:number} ={
    name: 'kamal',
    age: 29,
    salary: 33555
}

console.log(student)

// another way 
type Person = {
    name:string,
    age: number,
    company: string,
    salary:number,
    wife?:string
}

const kamal:Person ={
    name: 'a kamal',
    age: 35,
    company: 'hyundai',
    salary: 40000,
    wife: 'naim'
}
console.log(kamal)

const anwar:Person ={
    name: 'anwar kamal',
    age: 25,
    company: 'not yet',
    salary: 5000,

}

console.log(anwar)