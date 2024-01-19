function multiply(a, b) {
    return a * b;
}


const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

function exponentsFormula(baseNumber , exponent){
    const result = baseNumber ** exponent
    console.log(`${baseNumber}^${exponent} = ${result}`)
}

/*
rest parameter
*/

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
    result += number;
    }
    return result;
}

console.log(sum(1,2,3,4,5))
exponentsFormula(2)
introduce(user);
console.log(multiply(2 , 3))