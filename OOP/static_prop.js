class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const arpan = new User('arpan')

console.log(arpan.createId())