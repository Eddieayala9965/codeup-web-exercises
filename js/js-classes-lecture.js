

// creating a dog object with a function
    // factory function
    const createDog = (name, gender, breed, weight, color, altered) => {
        let result = {
            name,
            gender,
            breed,
            weight,
            color,
            altered,
            bark: function () {
                console.log(`${this.name}, a ${this.breed}, barked`)
            }
        }
        return result
    };
// let b = createDog("yellow", "frfr", "jr", "gtg", "tgt", "tret")
// console.log(b.bark)

class Car {
    constructor(year, make, model) {
        this.year = year;
        this.make = make;
        this.model = model;
    }
    drives() {
        console.log(`the ${this.make} ${this.model} starts driving super fast`);
    }
}
    (function() {
let car = new Car(2016, "Honda", "Civic")
       car.drives()
    })();
