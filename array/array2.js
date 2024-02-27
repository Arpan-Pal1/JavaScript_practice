const marvel_heroes = ['thor', 'Ironman', 'spiderman']
const dc_heroes = ['batman', 'superman', 'flash']

// marvel_heroes.push(dc_heroes)

// it will take the array as a data and the output will be -> [ 'thor', 'Ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]
// marvel_heroes.push(dc_heroes)

// return a new array it will concat the two array
// const allheroes = marvel_heroes.concat(dc_heroes)



// spread operator (work same as concat but syntax is creazy [...first-array, ...second-array])

// const allNewHeroes = [...marvel_heroes, ...dc_heroes]


// flat() 

// Array.isArray(input) true and false

// Array.from()
// Array.of()


// console.log(marvel_heroes);
// console.log(dc_heroes);
// console.log(allNewHeroes);


let score1 = 100
let score2 = 1000
let score3 = 101

// console.log(Array.of(score1, score2, score3));



// from object to Array
// const arr = Array.from({name : "arpan"}) -> it will give you an empty array
// console.log(arr);

const person = {name : "arpan", age : 22}
const propertyKeys = Object.keys(person)  // for keys
const propertyValues = Object.values(person) // for values
const propertyEntries = Object.entries(person) // for values
console.log(propertyKeys);
console.log(propertyValues);
console.log(propertyEntries);