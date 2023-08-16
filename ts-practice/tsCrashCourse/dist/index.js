"use strict";
//--------- Basic Types
let id = 5;
// console.log('ID:', id);
let company = "RevoCart";
let isPublished = true;
let x = 'Hello';
x = true;
let age;
// age = "Geo" //error
let ids = [1, 2, 3, 4, 5];
// ids.push("Hello") //error
let arr = [1, true, 'Hello'];
//--------- Tuple
let person = [1, 'George', true];
//--------- Tuple array
let employee;
employee = [
    [1, 'George'],
    [2, 'George'],
    [3, 'George'],
];
//--------- Union
let pid = 22;
//--------- Enums / Enumerated type
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Up); //1
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
//--------- Type Assertion
let cid = 1;
let customerId = cid;
// let customerId = cid as number
// customerId = true //error
//--------- Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 2)); //3
//--------- Void - void type returns nothing
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const george = new Person(1, 'George Odo');
// george.id = 5 //error
const mike = new Person(2, "Mike Jordan");
// console.log(george.register()) // George Odo is now registered
// console.log(george, mike); // Person {id: 1, name: 'George Odo'} Person {id: 2, name: 'Mike Jordan'}
//--------- Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Edozie", "Software Dev");
// console.log(emp.name) // Edozie
// console.log(emp.register()) // Edozie is now registered
//--------- Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', "John", "Jill"]);
// numArray.push('hello') //error
// strArray.push(1) //error
