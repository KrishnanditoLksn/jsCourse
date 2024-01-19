// function expression
const sayHello = (greet) => {
    console.log(`${greet}!`)
}

// const sayName = (name) => {
//     console.log(`Nama saya ${name}`)
// }

const sayName = name => console.log(`Nama saya ${name}`);

// const sayMe = () =>{
//     console.log("Gutten morgen")
// }

const sayMe= () => console.log("Selamat pagi semuanya!");
const subtraction = (a , b) => a * b;



sayName("Jone")
sayMe()
console.log(subtraction(2 ,1))

const arr = [1,2,3]
const arr2 = [3,2,1]

var relativeSortArray = function(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++) {
            console.log(arr1 , arr2[j])
        }
    }
};

relativeSortArray(arr,arr2)

