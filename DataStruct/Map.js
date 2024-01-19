
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);


const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(myMap)
console.log(myMap.size)
console.log(capital.get("London"));
console.log(capital.size);
console.log(capital.get("New Delhi"));
capital.set("New Delhi", "India");

/*
wrong map
*/
const wrongMap = new Map();
wrongMap["My Key"] = "My Value";
console.log(wrongMap["My Key"]);



