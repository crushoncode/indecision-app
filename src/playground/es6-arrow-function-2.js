// arguments object - no longer bound with arrow functions

// ES5 function

    const add = function(a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

// We will get a reference error arguments is not defined.
// If you do find yourself needing arguments you're going to want to stick with an ES5 function instead.

const add = (a, b) => {
   console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));


// this keyword - no longer bound

// When we add a function onto an object property(printPlacesLived) this value is bound to that object(user).
// However, when we just define a regular anonymous function like this, there is no bound this value.
// It gets set equal to undefined. This dot name is accessible right here but it's not accessible down below.

const user = {
    name: 'Serina',
    cities: ['Melbourne', 'Seoul', 'Vancouver'],
    printPlacesLived: function() {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function(city) {
            console.log(this.name + ' has lived in ' + city)
        });
    }
};
user.printPlacesLived();

const user = {
    name: 'Serina',
    cities: ['Melbourne', 'Seoul', 'Vancouver'],
    printPlacesLived: function() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        });
    }
};
user.printPlacesLived();

// undefined cities: This arrow function doesn't bind its own value 
// so it's no longer equal to the object. It goes up to the parent scope which is the global scope.
// In that case this is indeed undefined.
// so if we do want to use 'this' we want to switch over to an ES5 function

const user = {
    name: 'Serina',
    cities: ['Melbourne', 'Seoul', 'Vancouver'],
    printPlacesLived: () => {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        });
    }
};
user.printPlacesLived();

// ES6 Method Definitions using map

var obj = {
    foo() {
        return 'bar';
    }
}

console.log(obj.foo());


const user = {
    name: 'Serina',
    cities: ['Melbourne', 'Seoul', 'Vancouver'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city; 
        });
        return cityMessages;   
    }
};

console.log(user.printPlacesLived());

// simplified version

const user = {
    name: 'Serina',
    cities: ['Melbourne', 'Seoul', 'Vancouver'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city); 
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());