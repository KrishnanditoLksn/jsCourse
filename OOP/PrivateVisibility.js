class Car {
    #chassisNumber = null; // enclosing class
   
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.#chassisNumber = this.#generateChassisNumber();
    }

   // ... kode lainnya.
   get chassisNumber() {
    return this.#chassisNumber;
  }
  
  set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
  }
 
  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
 
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
 
  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
 
  #generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}
const car = new Car("Ijo" , "Merah" , 200)
car.reverse()