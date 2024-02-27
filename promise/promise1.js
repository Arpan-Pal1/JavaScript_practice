

const promiseOne = new Promise((resolve, reject) => {
    //do an async task
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})


// then has direct connection with resolve

promiseOne.then(() => {
    console.log('Promise consumed');
})



new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('async part 2');
        resolve()
    }, 1000)
}).then(
    () => {
        console.log('async 2 resolved');
    }
)



// third promise 

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: 'Arpan',
            email: 'arpanpalme@gamil.com'
        })
    }, 1000)
}).then((user) => {
    console.log(user);
})


// fourth promise


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: 'Arpan', email: 'arpanpalme@gmail.com' })
        } else {
            reject('Error. Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("The promise is either resolve or rejected");
    })



// promise five


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: 'Eshita', password: '123' })
        } else {
            reject('Error. JS Something went wrong')
        }
    }, 1000)
})


//async doesn't handle error directly

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// API

async function getUsername() {
    try {
        const response = await fetch('https://api.github.com/users/Arpan-Pal1')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }


}

// getUsername()


// using then catch
fetch('https://api.github.com/users/Arpan-Pal1')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})