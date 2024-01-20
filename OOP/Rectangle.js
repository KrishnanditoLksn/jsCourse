class Geometry{
    constructor(height , width){
        this.height = height;
        this.width = width;
    }

    get area(){
        return this.calcArea()
    }

    calcArea(){
        return this.height  * this.width;
    }
    
    *getSides(){
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }

    static distance(a , b ){
        const dx = a.height-b.height;
        const dy = a.width - b.width;

        return Math.hypot(dx, dy);
    }
}

// Expression; the class is anonymous but assigned to a variable
// const Rectangle = class {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };




class Rectangle extends Geometry{
    
}

const geo1  = new Geometry(10,10);
const geo2 = new Geometry(5,5);


console.log(geo1.area)
console.log(Geometry.distance(geo1 , geo2))