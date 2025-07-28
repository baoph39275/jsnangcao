
// Bubbling and Capturing
document.getElementById('parent').addEventListener('click', function() {
    console.log('Parent Clicked (Bubbling)');
});

document.getElementById('child').addEventListener('click', function(e) {
    console.log('Child Clicked');
    e.stopPropagation(); // Ngăn nổi bọt nếu muốn
});

// Capturing Example
document.getElementById('parent').addEventListener('click', function() {
    console.log('Parent Clicked (Capturing)');
}, { capture: true });

// Page Navigation
document.getElementById('scrollBtn').addEventListener('click', function() {
    document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
});

// DOM Traversing Example
const h1 = document.querySelector('h1');
console.log('Parent of h1:', h1.parentElement);
console.log('Next sibling of h1:', h1.nextElementSibling);

// Passing Arguments to Event Handler
document.getElementById('child').addEventListener('click', function() {
    passArgumentHandler('Argument Passed!');
});

function passArgumentHandler(message) {
    console.log(message);
}
