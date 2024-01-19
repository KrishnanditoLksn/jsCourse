//Contoh kode di bawan ini  merupakan salah satu gaya penulisan kode imperatif. 
//Di mana proses pengisian nilai array baru (newNames) berdasarkan array lama (names) dilakukan secara manual
//how to solve

// const names = ['Harry', 'Ron' , 'Jeff','Thomas']
// const newNamesWithExcMark = []

// for (let index = 0; index < names.length; index++) {
//     newNamesWithExcMark.push(`${names[index]}`)
// }

// console.log(newNamesWithExcMark)



//secara deklaratif 
//what to solve

const names2 = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNamesWithExcMark = names2.map((name)=>`${name}!`);
console.log(newNamesWithExcMark)