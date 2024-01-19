function minimal(a , b){
    if(a  <  b ){
        return a
    }
    if(b < a ){
        return b
    }
    else{
        return a
    }
}


function findIndex(array , number ){
    for (let i =0; i < array.length; i++) {
        if (array[i] == number) {
            return i
        }
    }
    return -1
}

console.log(findIndex([1, 2, 3, 4, 5], 5))
console.log( minimal(3, 2))