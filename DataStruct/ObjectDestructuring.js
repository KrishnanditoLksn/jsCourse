const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

// let firstName = "Dimas";
// let age = 20;

// ({firstName , age} = profile);
// console.log(firstName)
// console.log(age)

// // tidak bisa karena JavaScript mengira kita membuat block statement
// // block statement tidak bisa berada pada sisi kiri assignment
// //{ firstName, age } = profile;
// ({firstName , age} = profile)

//const { firstName, age, isMale = false } = profile;
const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);