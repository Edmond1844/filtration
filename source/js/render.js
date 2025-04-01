function renderProducts(item) {
    let cardProductList = document.querySelector('.filtration__card-product-list');

    let cardProductItem = document.createElement('li');
    cardProductItem.setAttribute('class', 'filtration__card-product-Item');
    cardProductList.appendChild(cardProductItem);
        
    let productImage = document.createElement('img');
    productImage.src = item.img;
    productImage.alt = item.productName;
    productImage.width = item.width;
    productImage.height = item.height;
        
    let productName = document.createElement('h2');
    productName.textContent = item.productName;
    productName.setAttribute('class', 'filtration__card-product-name');
        
    let productPrice = document.createElement('p');
    productPrice.textContent = item.price.toLocaleString('ru-RU') + ' ₽';
    productPrice.setAttribute('class', 'filtration__card-product-price');
        
    cardProductItem.append(productImage, productName, productPrice);
}

export default renderProducts;
