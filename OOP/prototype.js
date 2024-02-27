function addTwo(num){
    return num + 2
}

addTwo(5)

// function also a object

function User(username, age){
    this.username = username
    this.age = age
}

// as we know that function also a object that means we can create a prototype

User.prototype.greeting = function(){
    console.log(`Hello ${this.username}`);
}

User.prototype.famousYear = function(){
    console.log(`You will be famous at your age ${age + 5}`);
}

const arpan = new User('arpan', 23)

console.log(typeof arpan);
console.log(arpan.username);

arpan.greeting()
