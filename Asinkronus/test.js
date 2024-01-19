//Proses yang dijalankan berdasarkan sebuah urutan dan saling menunggu disebut dengan proses synchronous.
console.log("welcome")

setTimeout(() => {
    console.log("Tks dah mampir cuy")
}, 3000);

console.log("ku disini cuy")


function getUsers(callback) {
    //simulate network delay

    setTimeout(() => {
        const users = ['Jon','Jack','Abigail']
        callback(users)
    
    if (isOffline) {
        callback(new Error('cannot retrieve users due offline'),null)
        return
    }

    callback(null , users)
    }, 3000);
}

function usersCallback(users){
    console.log(users)
}

getUsers(usersCallback)