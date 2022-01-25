// Create xhr object
const xhr = new XMLHttpRequest();

// Setting of request .open(method, url)
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// Add Listener of load data from server
xhr.addEventListener('load', () => {
    console.log(xhr.responseText);
});

// Add Listener of error
xhr.addEventListener('error', () => {
    console.log('error');
});

// Send request to server
xhr.send();
