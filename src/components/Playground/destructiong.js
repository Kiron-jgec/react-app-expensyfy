
//object destrucering
const person = {

    Name:"Kiron",
    age:23,
    location:{
        city:"Bhagwangola",
        temp:29
    }

}

const {Name,age}=person

console.log(Name,age)

// array destrucing

const address = ['Bhagwangola','Murshidabad','West Bengal','742135']

const [ps,dist,state,zip]= address;
console.log(ps,dist,state,zip)



