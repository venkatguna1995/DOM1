

// Change the content of an element using innerHTML or textContent.

let paragraph = document.getElementById('para')
let button = document.getElementById('button')    
button.addEventListener('click', () => {
    console.log("clicked")
    paragraph.innerHTML = "The Content Was Changed through Js File"
    // paragraph.style.cssText = "color:red"
});

// Change the style of an element using the style property.

let paragraph2 =  document.querySelector('#para2')
let button2 = document.querySelector('#button2')

button2.addEventListener('click', () => {
paragraph2.style.cssText = 'color:red'
})

// Create new HTML elements using createElement.

let heading = document.createElement('h2')

heading.innerHTML = "this new content from js file"

let parent = document.getElementsByTagName('div')

parent[0].appendChild(heading)

// Add, remove, or toggle classes with classList.

let paragraph3 = document.querySelector('.para3')
let button3 = document.querySelector('.button3')

button3.addEventListener('click', () => {
console.log("working")
paragraph3.classList.toggle("para3")
})



