class Traveler {
    constructor(name) {
        this.name = name;
        this._food = 1;
        this._isHealthy = true;
    }

    get food() {
        return this._food
    }
    set food(newqtdFood) {
        this._food = newqtdFood
    }

    get isHealthy() {
        return this._isHealthy
    }
    set isHealthy(newBoolean) {
        this._isHealthy = newBoolean
    }

    hunt = () => {
        this.food += 2
    }
    eat = () => {
        if (this.food > 0) {
            this.food--
        }
        if (this.food === 0) {
            this.food = 0
            this.isHealthy = false
        }
    }
}

class Wagon {
    constructor(capacity) {
        this.capaciy = capacity
        this.passengers = []
    }

    getAvailableSeatCount = () => {
        return this.capaciy - this.passengers.length
    }
    join = (traveler) => {
        if (this.passengers.length < this.capaciy) {
            this.passengers.push(traveler)
        } else {
            return `Sorry, all the seats are busy!!`
        }
    }
    shouldQuarantine = () => {
        const validation = this.passengers.some((value) => value.isHealthy === false);
        if (validation === true) {
            return true
        } else {
            return `it' okay, Keep on !!`
        }
    }
    totalFood = () => {
        let sumAllFoods = 0
        this.passengers.forEach((value) => {
            sumAllFoods += value.food
        });

        return sumAllFoods
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);