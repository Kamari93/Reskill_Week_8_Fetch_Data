fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (response.ok) return response.json()
        return Promise.reject(response)
        // response.json()
    })
    // .then(data => console.log(data.slice(0, 11)))
    .then(data => data.slice(0, 15))
    .then(data => data.forEach((item) => {
        const markUp = `<li>${item.id}: Title: ${item.title}</li>`;
        document.querySelector('ul').insertAdjacentHTML("beforeend", markUp);
        console.log(`{ ID: ${item.id}; Title: ${item.title} }`)
    }))
    .catch(err => console.log('Something went wrong: ' + err))