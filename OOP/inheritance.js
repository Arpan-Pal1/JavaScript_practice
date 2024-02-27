const User = {
    name : 'arpan',

}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'js',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User


const teacher = Teacher

// console.log(teacher.name);

// modern approch

Object.setPrototypeOf(TeachingSupport, Teacher)

/*
Task 
"arpan       " -> create a string method called trueLength that will trim all the unnessary spaces ignored and give only actual length
*/

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`Your actual length is ${this.trim().length}`);
}

let name = "arpan"

name.trueLength()

console.log('arpan           '.trueLength());



