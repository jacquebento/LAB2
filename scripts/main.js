

// show the year in the footer
let date =  new Date().getFullYear();
document.querySelector("#date").innerHTML = date;

// alert button and hover button
document.getElementById('btn-alert').onclick = () => {
    alert('Hello, World!');
}

    document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = 'Click here';
};

    document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = 'Alert Button';
};

// counter button, text colour change and odd or even check
    let count = 1;
     document.getElementById('btn-counter').onclick = () => {
     count = count + 1;
     console.log(count)
     document.getElementById('txt-counter').style.color = count % 2 === 0 ? 'blue' : 'red';
     document.getElementById('txt-counter').classList = count % 2 === 0 ? 'even' : 'odd';
    console.log(document.getElementById('txt-counter').classList)
    document.getElementById('txt-counter').innerHTML = 'Number: ' + count + ' - ' + document.getElementById('txt-counter').classList;
}


// for loop to create a list

for (let i = 1; i <= 100; i++) {
// ordered list element by its id
const numbersList = document.getElementById('numbers');

// Create a new <li> element with the createElement() document method
    const listItem = document.createElement('li');

// Set the text content of the new <li> element based on even or odd index
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    listItem.style.backgroundColor = i % 2 === 0 ? 'mediumblue' : 'lightblue';
    
    console.log(i + ' ' +  listItem.textContent)
// Append the <li> element to the ordered list
    numbersList.appendChild(listItem);
}

