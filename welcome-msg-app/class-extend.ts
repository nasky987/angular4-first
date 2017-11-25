class Person {
    static BOOLD_TYPE: string = 'O';

    constructor(public name, public age) {

    }
}

class Employee extends Person {
    constructor(private department, private role) {
        super('', 20);
    }
}