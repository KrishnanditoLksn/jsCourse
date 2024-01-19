const countDown =  start =>{
    do{
        console.log(start)
        start-=1
    }while(start > 0)
}
countDown(10)

//rekursif 
const coundDown = start=>{
    console.log(start)
    if(start > 0)coundDown(start - 1)
}
coundDown(10)