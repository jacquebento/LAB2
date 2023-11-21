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

fullName("Jacqueline", "milk");

// show the year in the footer
let date =  new Date().getFullYear();
document.querySelector("#date").innerHTML = date;

// button
document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = 'new button label';
};

document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = 'default button label';
};

// counter button and text colour change
let count = 1;
document.getElementById('btn-counter').onclick = () => {
     count = count + 1;
     document.getElementById('txt-counter').innerHTML = 'Number: ' + count
    //  classList = [];
     if(count % 2 == 0){
        document.getElementById('txt-counter').style.color = "blue";
        document.getElementById('txt-counter').classList.add('even');
        console.log("Class List: " + document.getElementById('txt-counter').classList)
        } else {
        document.getElementById('txt-counter').style.color = "red";
        document.getElementById('txt-counter').classList.add('odd');
        console.log("Class List: " + document.getElementById('txt-counter').classList)
        }  
}

//for loop
// Get the ordered list element by its id
const numbersList = document.getElementById('numbers');

// Loop to populate the ordered list with 100 child elements
for (let i = 1; i <= 100; i++) {
  // Create a new <li> element with the createElement() document method
  const listItem = document.createElement('li');

  // Set the text content of the new <li> element based on even or odd index
  listItem.textContent = i % 2 === 0 ? 'even' : 'odd';

  // Append the <li> element to the ordered list
  numbersList.appendChild(listItem);
}




const getOdd = (count) => {
    remainder = count % 2
    console.log("Count:" + remainder)
    if (remainder = 0) {
    document.getElementById('id').classList.add('even');
    } else {
    document.getElementById('id').classList.add('odd');
    }
}


