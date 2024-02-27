// Object singleton

const tinderUser = new Object()

tinderUser.id = "123abc"

tinderUser.name = "Arpan"

tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: 'arpanpalme@gmail.com',
    fullname: {
        userFullName: {
            firstName: "Arpan",
            lastName: "Pal"
        }
    }
}


// console.log(regularUser.fullname.userFullName.firstName);

// object merging

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "y",
    4 : "z"
}

// console.log(obj1[1]);  // I can't access using '.'

// const obj3 = { obj1, obj2 }
// console.log(obj3); 
//output { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'y', '4': 'z' } }


// const obj3 = Object.assign({}, obj1, obj2) //assign(target: {}, source: any)
// console.log(obj3); if we don't give {} then it will work perfectly but this is a good practice and {} work as a target




// you can also use spread operator (best choise to do)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.values(tinderUser).length);
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));
console.log(tinderUser.hasOwnProperty('firstname'));
