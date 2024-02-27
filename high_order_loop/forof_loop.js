/* for of loop (array specific)
["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}


const greeting = "hello world"

for (const greet of greeting) {
    console.log(`each char is ${greet}`);
}

*/


/* Maps (Same as js object. store data in key value pair. no duplicate value is present here. order maintain) 

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'America')
map.set('UK', 'United Kingdom')

console.log(map);

for (const [key, value] of map) {
    console.log(`key ${key} and the value ${value}`);
}

*/


/*
const obj = {
    name : 'arpan',
    title : "pal",
    age : 23,
}

for (const [key, value] of obj) {
    console.log(`The key is ${key} and the value is ${value}`);
}


For of loop does not work for object because object is not iterable
*/



