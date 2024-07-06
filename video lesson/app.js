//let, const

// let age = 31
// age = 132
// console.log(age)
// const age = 31
// age = 39 //Error
// console.log(age)

// let score;
// score = 10
// console.log(score);
// const score;
// score = 10
// console.log(score) //Error

//String, Numbers, Boolean, null, undefined

// const name = "Ozod";
// const age = 17;
// const rating = 4.5;
// const haveMillion$ = false;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof);

// const name = "Ozod";
// const age = 17;

// //Concatenation
// console.log('My name is ' + name + ' and I am ' + age);
// //Template String
// console.log(`My name is ${name} and I am ${age}`);

// const hello = `My name is ${name} and I am ${age}`
// console.log(hello);

// const s = "Hello World!";
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(''));
// const w = "technology, computers, it, code"
// console.log(w.split(", "));

//Arrays ===

// const numbers = [1, 2, 3, 4, 5, "Orange", "Banana", true,];
// numbers[2] = "Ozod"; //Add something to array
// numbers.unshift("Mango"); //Add something to the beginning
// numbers.push("Apple"); //Add something to the end
// numbers.pop() //Take the last one off

// console.log(numbers);

// console.log(Array.isArray());
// console.log(numbers.indexOf('Orange'));

// const person = {
//     firstName: 'Ozod',
//     lastName: 'Erkinov',
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         city: 'Tashkent',
//         district: 'Mirabad',
//         country: 'Uzbekistan'
//     }
// }
// console.log(person.firstName, person.lastName, person.hobbies[2], person.address.city);
// const {firstName, lastName, address: {city}} = person
// console.log(firstName, lastName, city,);
// person.email = '97450z727@gmail.com';
// console.log(person);

//TODO

// const todos = [
//   {
//     id: 1,
//     text: "Drive the car",
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     text: "Sell the account",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "learning JavaScript",
//     isCompleted: true,
//   },
// ];

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);
// console.log(todos[1].text);

//For
// for(let i = 0; i <= 10; i++){
//     console.log(`For Loop Number ${i}`);
// }
//While
// let i = 0
// while(i <= 10){
// console.log(`While Loop Number ${i}`);
// i++
// }

// for (let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
// }

// for (let todo of todos){
//     console.log(todo.text);
// }

//forEach, map, filter

// todos.forEach(function(todo){
//     console.log(todo.text);
// })

// const todoText = todos.map(function(todo){
//     return todo.isCompleted
// })
// console.log(todoText);

// const todoCompleted = todos.filter(function (todo) {
//   return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text
// })
// console.log(todoCompleted);

// const x = 4;
// const y = 9;

// if (x > 5 && /*||*/ y > 10) {
//   console.log("x is more than 5 and y is more than 10");
// } else if (x < 5 && /*||*/ y < 10) {
//   console.log("x is less than 5 and y is less than 10");
// } else {
//   console.log(Error);
// }

// const x = 11
// const color = x > 10 ? 'red' : 'blue'
// console.log(color);

// const x = 10
// const color = x >  10 ? 'red' : 'blue'

// switch(color){
//     case 'red':
//         console.log('color is red');
//     break;
//     case 'blue':
//         console.log('color is blue');
//     break;
//     default:
//         console.log('color is not red or blue');
//     break
// }

// function addNums(num1, num2) {
//   return(num1 + num2);
// }
// console.log(addNums(5, 4))
//addNums() NaN

// const addNums = (num1 = 1, num2 = 1) =>{
//     return num1 + num2
// }
// console.log(addNums(5, 5));

//Constructor function

// function Person(firstName, lastName, DoB) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.DoB = new Date(DoB);
  //     this.getBirthYear = function(){                |
  //         return this.DoB.getFullYear();             |
  //     }                                              |May rid of it by using prototype
  //     this.getFullName = function(){                 |
  //         return `${this.firstName} ${this.lastName}`|
  //     }
// }
// Person.prototype.getBirthYear = function () {
//   return this.DoB.getFullYear();
// };
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

//Class

// class Person{
//     constructor(firstName, lastName, DoB){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.DoB = new Date(DoB);
//     }                                                /*Just a prettier way*/
//     getBirthYear(){ 
//         return this.DoB.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// //Instantiate object
// const person1 = new Person("Ozod", "Erkinov", 26 - 10 - 2006);
// const person2 = new Person("Nobody", "Noone", 1 - 1 - 2000);
// console.log(person1);
// console.log(person2);
