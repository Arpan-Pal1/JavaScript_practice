// let myName = "Arpan"

// console.log(myName.length);


const myHeros = ['Thor', 'Spiderman']

let heroPower = {
    Thor : 'Hammer',
    Spiderman : 'Sling',

    getSpiderPower : function(){
        console.log(`spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.arpan = function(){  // creating a function on object that why every object can access the function
    console.log(`Arpan is in everywhere`);
}

// heroPower.arpan()

// myHeros.arpan()



Array.prototype.heyArpan = function(){
    console.log(`Hey Arpan are you there?`);
}

myHeros.heyArpan()  // now I create a function on Array 

// lets check can I access the function from object's prototype
// heroPower.heyArpan()  we don't have heyArpan function in my object


