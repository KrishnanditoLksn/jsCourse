const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

// let object ={key1 : "value1" , key2 : "value2"} 

// console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
// console.log(user["firstName"])

// spaceship.color = "Glossy red";
// spaceship["maxSpeed"] = 1300;


// spaceship["manufacturer"] = "Lambo Jawir"
// console.log(spaceship)


spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;

delete spaceship.manufacturer;

console.log(spaceship);
