function SetUsername(username) {

    this.username = username
    console.log(`called`);
}

function createUser(username, email, password) {
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const arpan = new createUser('arpan', 'arpan@gmail.com', '123')

console.log(arpan);