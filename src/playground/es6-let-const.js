var nameVar = 'Serina';
var nameVar = 'Hey'
nameVar = 'Hey'

console.log('nameVar', nameVar);


let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst)


function getPetName() {
    const petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);


var fullName = 'Serina Ko'

if (fullName) {
    var firstName = fullName.split(' ')[0]
    console.log(firstName);
}

console.log(firstName);


var fullName = 'Serina Ko'

if (fullName) {
    const firstName = fullName.split(' ')[0]
    console.log(firstName);
}

console.log(firstName);


const fullName = 'Serina Ko'
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName);
}

console.log(firstName);
