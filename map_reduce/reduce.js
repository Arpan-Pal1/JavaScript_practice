/*
Template

const array1 = [1, 2, 3, 4];

0+1+2+3+4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);

*/



const myNums = [1, 2, 3]

let myTotal = myNums.reduce((acc, curval) => {
  return acc + curval
}, 0)

myTotal = myNums.reduce((acc, curr) => acc + curr, 3)

// console.log(myTotal);


const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "py course",
    price: 999
  },
  {
    itemName: "mobile dev course",
    price: 5999
  },
  {
    itemName: "data science course",
    price: 12999
  },
]

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(total);