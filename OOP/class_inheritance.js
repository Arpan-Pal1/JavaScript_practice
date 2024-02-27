class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Dev extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
        
    }

    addcourse(){
        console.log(`new course was added by ${this.username}`);
    }
}

const arpan = new Dev('arpan', 'arpan@gmil.com', '123')

console.log(arpan.logMe());
console.log(arpan.addcourse());


console.log(arpan instanceof Dev);

