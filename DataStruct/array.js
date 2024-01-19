// let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);
// /*
// below undefined
// */
// console.log(myArray[5]);
// console.log("Panjang nilai myArray adalah " + myArray.length + ".");
// myArray.push("JS");
// console.log(myArray)

// myArray.pop()
// console.log(myArray)

// /*
// Metode shift() digunakan untuk mengeluarkan elemen pertama dari array
// */

// myArray.shift();
// /*
// unshift() digunakan untuk menambahkan elemen di awal array.
// */
// myArray.unshift("Apple");

// console.log(myArray)
// /*
// hanya menghapus data  pada  indexnya 
// */
// // delete myArray[1]
// // console.log(myArray)

// // Menghapus dari index 2 sebanyak 1 elemen
// myArray.splice(2, 1)
// console.log(myArray)

// const month = ['January', 'March', 'April', 'May'];
// console.log('before splice: ', month);

// month.splice(1, 0, 'February');
// console.log('after splice: ', month);


// /*
// untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen
// */


// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// console.log(favorites)

// /*
// dengan tanda '[]' dan "..."
// */

// console.log(...favorites);
// //operator spread 
// const favorited = ["Seafood", "Salad", "Nugget", "Soup"];
// const others = ["Cake", "Pie", "Donut"];
// const allFavorites = [...favorited, ...others];
// console.log(allFavorites);

// const obj1 = {firstName: 'Obie', age: 31};
// const obj2 = {firstName: 'Wan', gender: 'M'};

// const newObj = {...obj1, ...obj2};

// console.log(newObj);


var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
};


const f = createHelloWorld()
console.log(f([]))
