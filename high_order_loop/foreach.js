const coding = ['python', 'cpp', 'js', 'java']


coding.forEach( function(item){
    // console.log(item);
})


coding.forEach( (item) =>{
    // console.log(item);
})


// ***** callback function does not contain any name *****



function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})




const myCoding = [
    {
        languageName : 'python',
        extaintion : '.py'
    },
    {
        languageName : 'javascript',
        extaintion : '.js'
    },
    {
        languageName : 'C++',
        extaintion : '.cpp'
    }
]

/*myCoding.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.extaintion);
    console.log('------------');

})

*/



// foreach loop does not return anything

const values = coding.forEach( (item) => {
    return item
})

console.log(values);  // ---> gives undefined