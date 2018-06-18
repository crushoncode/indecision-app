const square = function (x) {
    return x * x;
}; 

function square(x) {
    return x * x;
};

console.log(square(3));

const squareArrow = (x) => {
    return x * x;
};

const squareArrow = (x) => x * x; 

console.log(squareArrow(8));

    const name = 'Mike Smith';
    
    if (name) {
        let firstName = name.split(' ')[0]
        console.log(firstName);
}

const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
}

const getFirstName = (fullName) => fullName.split(' ')[0]
console.log(getFirstName('Serina Ko'));