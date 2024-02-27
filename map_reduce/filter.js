// Using filter we can add condition according to the condition it will return 
const numbers = [1, 2, 3, 4, 5]

const values = numbers.filter((item) => {
    if (item % 2 === 0) {
        return item
    }
})

// const values2 = numbers.filter((num) => num > 2)


// console.log(values2);


// doing same in using foreach

const newNums = []

numbers.forEach( (num) => {
    // if (num > 4) {
    //     newNums.push(num)
    // }
})

// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let userBook = books.filter( (book) => book.genre == 'Fiction')
userBook = books.filter( (book) => book.publish >= 1995 && book.genre == 'History')
console.log(userBook);