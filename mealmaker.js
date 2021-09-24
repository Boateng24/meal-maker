const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },

    get appetizers () {
        return this._courses.appetizers
    },

    get mains () {
        return this._courses.mains
    },

    get desserts () {
        return this._courses.desserts
    },

    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },

    set mains(mains) {
        this._courses.mains = mains;
    },

    set desserts(desserts) {
        this._courses.desserts = desserts;
    },

    get courses () {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish)
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers'); 
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} summing to a total price of ${totalPrice}`
    },
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'flakes', 2.5);
menu.addDishToCourse('appetizers', 'pop corn', 4.5);

menu.addDishToCourse('mains', 'fufu', 10.00);
menu.addDishToCourse('mains', 'banku', 5.00);
menu.addDishToCourse('mains', 'abetee', 6.00);

menu.addDishToCourse('desserts', 'sobolo', 2.00);
menu.addDishToCourse('desserts', 'fula', 2.20);
menu.addDishToCourse('desserts', 'amuduro', 3.00);

let meal = menu.generateRandomMeal();
console.log(meal);