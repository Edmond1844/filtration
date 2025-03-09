const url = 'http://localhost:3001/products';

function getProducts(url, container) {
    fetch(url)
        .then(res => res.json())
        .then((dataProducts) => {    
            let products = dataProducts;

            products.forEach(itemProduct => {
                let box = document.createElement('div');
                box.textContent = itemProduct.productName;
                container.append(box);
            });
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        });
} 

export default getProducts;