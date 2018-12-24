class Hello {
    age: number;
    name: string;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }

    show() {
        console.log('hello', this.name, this.age);
    }
}

module.exports = Hello;