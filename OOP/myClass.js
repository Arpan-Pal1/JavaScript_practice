// es6

// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const arpan = new User('arpan', 'arpanpalme@gmil.com', 'password')

// console.log(arpan.encryptPassword());
// console.log(arpan.changeUsername());


// BTS

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const eshita = new User('Eshita', 'eshita@email.com', '123')

console.log(eshita.changeUsername());
console.log(eshita.encryptPassword());