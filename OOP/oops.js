// Object literel

const user = {
    name : 'Arpan',
    age : 23,
    isLoggedIn : true,

    greeting : function(){
        console.log(`hello ${this.name}`);
    }
}

console.log(user.greeting());
// console.log(this);   --> this will give an empty {} in nodejs in browser it will give you window object



// const promiseOne = new Promise()    // new constructor function

function User(username, age){
    this.username = username
    this.age = age

    return this
}

const userOne = new User('Arpan', 23)
const userTwo = new User('Ironman', 60)   // it will overWrite the old one

// console.log(userOne);
// console.log(userTwo);



/* 
****************************************************


new keyword -> always create a empty instance, constructor function call, 

*/

