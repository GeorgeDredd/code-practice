//--------- Basic Types
let id:number = 5
// console.log('ID:', id);

let company: string  = "RevoCart"

let isPublished: boolean = true

let x: any = 'Hello'
x = true

let age: number
// age = "Geo" //error

let ids: number[] = [1, 2, 3, 4, 5]
// ids.push("Hello") //error

let arr: any[] = [1, true, 'Hello']

//--------- Tuple
let person: [number, string, boolean] = [1, 'George', true] 

//--------- Tuple array
let employee: [number, string][] 

employee = [
    [1, 'George'],
    [2, 'George'],
    [3, 'George'],
]

//--------- Union
let pid: string | number = 22

//--------- Enums / Enumerated type
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}
// console.log(Direction1.Up); //1

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}
// console.log(Direction2.Up); //Up

//--------- Objects
type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'John',
}

//--------- Type Assertion
let cid: any = 1
let customerId = <number>cid
// let customerId = cid as number
// customerId = true //error


//--------- Functions
function addNum(x:number, y: number): number {
    return x + y
}
// console.log(addNum(1, 2)); //3


//--------- Void - void type returns nothing
function log(message: string | number): void {
    console.log(message)    
}
// log(true) //error

 
//--------- Interfaces
interface UserInterface {
    readonly id: number // makes property unassignable
    name: string
    age?: number // makes property optional
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
}

// Works
type Point = number | string
const p1: Point = 1

// Does not work
// interface Point = number | string
// const p1: Point = 1


//--------- Functions
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x:number, y: number): number => x + y
const sub: MathFunc = (x:number, y: number): number => x - y


//--------- Classes
interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person implements PersonInterface {
    // private id: number      
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const george = new Person(1, 'George Odo')
// george.id = 5 //error
const mike = new Person(2, "Mike Jordan")

// console.log(george.register()) // George Odo is now registered
// console.log(george, mike); // Person {id: 1, name: 'George Odo'} Person {id: 2, name: 'Mike Jordan'}


//--------- Subclass
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, "Edozie", "Software Dev")
// console.log(emp.name) // Edozie
// console.log(emp.register()) // Edozie is now registered


//--------- Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['Brad', "John", "Jill"])
// numArray.push('hello') //error
// strArray.push(1) //error