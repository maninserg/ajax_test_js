// Find button of get posts on page
const btn = document.querySelector('.btn-get-posts');

// Find button of create new post on page
const btnCreatePost = document.querySelector('.btn-create-new-post');

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
    xhr.send();
}

function createPost(body, cb) {
    // Create xhr object
    const xhr = new XMLHttpRequest();

    // Setting of request .open(method, url)
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');

    xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

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
    // body to json
    xhr.send(JSON.stringify(body));
}

function cardTemplate(post) {
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
    return card;
}

function renderPosts(response) {
    const fragment = document.createDocumentFragment();
    response.forEach(post => {
        const card = cardTemplate(post);
        fragment.appendChild(card);
    });
    container.appendChild(fragment);
}

// Add Listner to button of get posts
btn.addEventListener('click', (e) => {
    getPosts(renderPosts);
});

//Add Listener to button of create new post
btnCreatePost.addEventListener('click', e => {
    const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };
    createPost(newPost, (response) => {
        const card = cardTemplate(response);
        container.insertAdjacentElement('afterbegin', card);
    })
});