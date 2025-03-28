function getDataProducts(url) {
    fetch(url)
    .then(res => res.json())
    .then((productsItem) => {  
        let cardProductList = document.querySelector('.filtration__card-product-list');
        
        productsItem.forEach((itemProduct) => {
            let cardProductItem = document.createElement('li');
            cardProductItem.setAttribute('class', 'filtration__card-product-Item');
            cardProductList.appendChild(cardProductItem);
    
            let productImage = document.createElement('img');
            productImage.src = itemProduct.img;
            productImage.alt = itemProduct.productName;
            productImage.width = itemProduct.width;
            productImage.height = itemProduct.height;
    
            let productName = document.createElement('h2');
            productName.textContent = itemProduct.productName;
            productName.setAttribute('class', 'filtration__card-product-name');
    
            let productPrice = document.createElement('p');
            productPrice.textContent = itemProduct.price.toLocaleString('ru-RU') + ' ₽';
            productPrice.setAttribute('class', 'filtration__card-product-price');
    
            cardProductItem.append(productImage, productName, productPrice);
        })
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });  
}

export default getDataProducts;
