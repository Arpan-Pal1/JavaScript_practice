// singleton - by constractor 

// object literals

const mySym = Symbol('key1')

// console.log(typeof mySym);

const jsUser = {
    name : "Arpan",
    "full name" : "Arpan Pal",
    [mySym] : 5,
    age : 23,
    location : "sonamukhi",
    email : "arpanpalme@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
} 

// console.log(jsUser.name);
// console.log(jsUser['name']);

// You cant access "full name" by .

// console.log(typeof jsUser.mySym); // type string

// console.log(typeof jsUser[mySym]);

// jsUser.name = "Arpann"
// console.log(jsUser);

/* if you want not to change the object element then you can freez it

 Object.freeze(jsUser)

 jsUser.name = "Arpan"

 console.log(jsUser); you cant freez  */


 jsUser.greeting = function (){
    console.log('hello js User');
 }



 console.log(jsUser.greeting); // gives function reference
//  console.log(jsUser.greeting()); // gives actual content


jsUser.greeting2 = function(){
    console.log(`Hello ${this["full name"]}! Good morning`);
}

console.log(jsUser.greeting2());


