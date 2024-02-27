const myArray = [0, 1, 2, 3, 4, 5]


// console.log(myArray);




// shallow copy by default

// const newArray = new Array(1,2,3)
// console.log(typeof newArray); -> Object


//array method

// myArray.push(6)
// myArray.pop()
// console.log(myArray);

// console.log(myArray.includes(10)); gives Boolean

// console.log(myArray.indexOf(3));    if the data not in array then it will give you -1 otherwise it gives the index

// console.log(myArray);

const newArr = myArray.join()

// console.log(newArr);
// console.log(typeof newArr);


// slice and splice

// slice - works as python slice 

// console.log("original array ->", myArray);

const mNarray = myArray.slice(0,3)

// console.log("sliced array -> ", mNarray);

// splice


// console.log("original array ->", myArray);

//spliced manipulate the original array 
const splicedArray = myArray.splice(0,3)

// console.log("spliced array -> ", splicedArray);

// console.log("original array ->", myArray);