


const fighter = {
    nameOfFighter: "Ryu",
    hp: 100,
    outfit: {
        color: "white",
        type: "karate gi",
    },
    attack: function () {
        console.log(`${this.nameOfFighter}Hadoken!`);
    }

}


// fighter.name = "Ryu"; diff way tp write an object
// console.log(fighter);

// how do we grab value??

// console.log(fighter.nameOfFighter);
// console.log(fighter.hp);
// console.log(fighter.outfit.type);

// other ways to go and console log functions and can decalre it as a variable

// const {nameOfFighter, hp} = fighter;
// console.log(nameOfFighter);
// console.log(hp);




// looping? idk hes breaking down how to pull with console log by doing forEach function

const cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "John Doe",
            age: 31
        }
    }
];