function getData(url) {
    return fetch(url)
    .then(res => { return res.json()})
    .catch(error => {
        console.error('Error:', error);
    });
}

export default getData;