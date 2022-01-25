// Find button on page
const btn = document.querySelector('button');

// Find container on page
const container = document.querySelector('.container');

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

function renderPosts(response) {
    const fragment = document.createDocumentFragment();
    response.forEach(post => {
        const card = document.createElement('div');
        card.classList.add('card');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = post.title;
        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = post.body
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        fragment.appendChild(card);
    });
    container.appendChild(fragment);
}

// Add Listner to button
btn.addEventListener('click', (e) => {
    getPosts(renderPosts);
});