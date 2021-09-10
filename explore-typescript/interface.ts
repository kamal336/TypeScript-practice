// interface type 
interface Details extends MoreDetails{
    name: string,
    age: number,
    job: string,
    salary: number,
    married: string
}

interface MoreDetails {
    haveBaby: boolean,
    liveIn: string
}

const naim: Details ={
    name: 'J Naim',
    age: 25,
    job: 'al fuad',
    salary: 18000,
    married: 'akter',
    haveBaby: false,
    liveIn: 'Bangladesh'
}

console.log(naim)