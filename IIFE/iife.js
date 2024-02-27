// Immediately Invoked Function Expression (IIFE)
// -> Function that immediately invoked and rid of golabl scope polution



(function name(){  // named iife
    console.log('DB connected');
})();

// ()()  first parenthesis is the function expression and second one is for the execution

(() =>{    // unnamed iife
    console.log('latest connection');
})();

//pass the parameter

((name) => {
    console.log(`Hello ${name}`);
})('arpan');