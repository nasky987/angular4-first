class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
Person.BOOLD_TYPE = 'O';
class Employee extends Person {
    constructor(department, role) {
        super('', 20);
        this.department = department;
        this.role = role;
    }
}
