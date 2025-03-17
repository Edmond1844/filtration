// import getDataProducts from "./getDataProduct.js";
function getProducts(dataArray, cardProductList) {
    cardProductList.innerHTML = '';

    dataArray.forEach(itemProduct => {
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
    });
}

// function getProducts(cardProductList) {
//     cardProductList.innerHTML = '';
//     getDataProducts('http://localhost:3001/laptops')
//     console.log(getDataProducts)
//     .then(products => {
//         products.forEach(itemProduct => {
//             let cardProductItem = document.createElement('li');
//             cardProductItem.setAttribute('class', 'filtration__card-product-Item');
//             cardProductList.appendChild(cardProductItem);
    
//             let productImage = document.createElement('img');
//             productImage.src = itemProduct.img;
//             productImage.alt = itemProduct.productName;
//             productImage.width = itemProduct.width;
//             productImage.height = itemProduct.height;
    
//             let productName = document.createElement('h2');
//             productName.textContent = itemProduct.productName;
//             productName.setAttribute('class', 'filtration__card-product-name');
    
//             let productPrice = document.createElement('p');
//             productPrice.textContent = itemProduct.price.toLocaleString('ru-RU') + ' ₽';
//             productPrice.setAttribute('class', 'filtration__card-product-price');
    
//             cardProductItem.append(productImage, productName, productPrice);
//         });
//     });
// }

export default getProducts;