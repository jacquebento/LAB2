console.log('Hello, World!');
// this is an alert
// alert('Hello, World!');

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

fullName("Jacqueline", "Coke zero with lemon");

// show the year in the footer
let date =  new Date().getFullYear();
document.querySelector("#date").innerHTML = date;

// button
document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = 'New button label';
};

document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = 'Default button label';
};

// counter button, text colour change and odd or even check
    let count = 1;
     document.getElementById('btn-counter').onclick = () => {
     count = count + 1;
     document.getElementById('txt-counter').style.color = count % 2 === 0 ? 'blue' : 'red';
     document.getElementById('txt-counter').classList = count % 2 === 0 ? 'even' : 'odd';
    
    document.getElementById('txt-counter').innerHTML = 'Number: ' + count + ' - ' + document.getElementById('txt-counter').classList;
}


// for loop to create a list - you can see the list in the console
console.log('');
console.log('This is the ordered list that was requested:');

for (let i = 1; i <= 100; i++) {
// ordered list element by its id
const numbersList = document.getElementById('numbers');

// Create a new <li> element with the createElement() document method
    const listItem = document.createElement('li');

// Set the text content of the new <li> element based on even or odd index
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    
    console.log(i + ' ' +  listItem.textContent)
// Append the <li> element to the ordered list
    numbersList.appendChild(listItem);
}



