var Hello = /** @class */ (function () {
    function Hello(name, age) {
        this.age = age;
        this.name = name;
    }
    Hello.prototype.show = function () {
        console.log('hello', this.name, this.age);
    };
    return Hello;
}());
module.exports = Hello;
