// find button on page
const btn = document.querySelector('button');

function getPosts(cb) {
    // Create xhr object
    const xhr = new XMLHttpRequest();

    // Setting of request .open(method, url)
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    // Add Listener of load data from server
    xhr.addEventListener('load', () => {
        // parse json to array of objects
        const response = JSON.parse(xhr.responseText);
        // response to callback function
        cb(response);

    });

    // Add Listener of error
    xhr.addEventListener('error', () => {
        console.log('error');
    });

    // Send request to server
    xhr.send();
}

// Add Listner to button
btn.addEventListener('click', (e) => {
    getPosts((response) => {
        console.log(response);
    });
});