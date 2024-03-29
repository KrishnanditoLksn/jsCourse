// try{
//     console.log("Awal blok try")
// }catch(error){
//     console.log("Akhir blok try")
// }

// try {
//     console.log("Awal blok try");   // (1)
//     errorCode;                      // (2)
//     console.log("Akhir blok try");  // (3)
// } catch (error) {
//     console.log("Terjadi error!");  // (4)
// }

// try {
//     console.log("Awal blok try");   // (1)
//     errorCode;                      // (2)
//     console.log("Akhir blok try");  // (3)
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// try {
//     console.log("Awal blok try");
//     console.log("Akhir blok try");
// } catch (error) {
//     console.log("Baris ini diabaikan");
// } finally {
//     console.log("Akan tetap dieksekusi");
// }


// const json = '{ "name": "Yoda", "age": 20 }';

// try {
//     const user = JSON.parse(json)

//     console.log(user.name)
//     console.log(user.age)
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
// }

// const json = '{ bad json }';
 
// try {
//   const user = JSON.parse(json);
 
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }


// const json = '{ "age": 20 }';
 
// try {
//   const user = JSON.parse(json);
 
//   console.log(user.name); // undefined
//   console.log(user.age);  // 20
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// const json = '{ "age": 20 }';
// try {
// const user = JSON.parse(json);

// if (!user.name) {
//     throw new SyntaxError("'name' is required.");
// }

//   console.log(user.name); // undefined
//   console.log(user.age);  // 20
// } catch (error) {
//     console.log(`JSON Error: ${error.message}`);
// }



const json = '{ "name": "Yoda", "age": 20 }';
try {
  const user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }
 
  errorCode;
 
  console.log(user.name); // Yoda
  console.log(user.age);  // 20
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}


try { 
    // ...
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}