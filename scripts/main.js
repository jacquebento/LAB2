console.log('Hello, World!');
// this is an alert
alert('Hello, World!');

const FIRSTNAME = 'Jacqueline';
// const do not change, you can't assign a new value to a constant
let lastName = 'Bento';
lastName = 'Bento';
// var lastName = "Caetano"; // ES5 - older sintax
let age = 25;
age = true;
// console.log(typeof age, age)
// console.log(FIRSTNAME, lastName);

const fullName = (first, drink) => {
    console.log(first + "'s favorite drink is " + drink)
}

fullName("Jacqueline", "milk");

