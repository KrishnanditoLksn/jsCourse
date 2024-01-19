//impure function
let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4)); // 80

//pure function
const hitungLuasLingkaran2 = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
}

  console.log(hitungLuasLingkaran2(4)); // 50.24
  console.log(hitungLuasLingkaran2(4)); // 50.24
  console.log(hitungLuasLingkaran2(8)); // 200.96
  console.log(hitungLuasLingkaran2(8)); // 200.96


const createPersonWithAge = (age, person) => {
    return { ...person, age };
};

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({person,newPerson});

/*
Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang Anda buat.

Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
Hanya bergantung pada argumen yang diberikan.
Tidak menimbulkan efek samping.
*/

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNamesWithExcMark = names.map((name) => `${name}!`);
console.log({names,newNamesWithExcMark});

const user = {
  firstname:'Harry',
  lastName : 'Protter',
}

const renameLastNameUser = (newLastName , user)=>{
  user.lastname  = newLastName
}

renameLastNameUser('Potter' , user)
console.log(user)

const  createUserWithNewLastName = (newLastName,user)=>{
  return {...user , lastName : newLastName}
}

const newUser = createUserWithNewLastName('Potter' , user)
console.log(newUser)

