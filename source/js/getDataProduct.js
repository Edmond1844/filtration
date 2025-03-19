function getDataProducts(url) {
    fetch(url)
    .then(res => res.json())
    .then((productsItem) => {    
        console.log(productsItem)
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });  
}

export default getDataProducts;