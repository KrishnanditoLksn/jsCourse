

//let object = {key1 : value1 , key2 : "value2", key3 : "value3"}

const spaceship = {
        firstName : "Luke" ,
        lastName: "Skywalker", 
        age: 19,
        isJedi : true 
    }

console.log(`Halo, ${user.firstName} is here ${user.lastName}`);


user["firstName"]
console.log(`bad , ${user["firstName"]}`);
console.log(`Saya berasal dari ${user["home world"]}`);

spaceship.color = "Red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);

delete spaceship.manufacturer;
console.log(spaceship)