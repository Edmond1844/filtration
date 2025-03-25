// import check from "./searchProducts.js";
import getDataProducts from "./getDataProduct.js";

function renderProducts() {    
    let container = document.createElement('div');
    container.setAttribute('class', 'filtration__container');

    let searchWrapper = document.createElement('div');
    searchWrapper.setAttribute('class', 'filtration__search-wrapper');

    let btnList = document.createElement("ul");
    btnList.setAttribute('class', 'filtration__btn-list');

    let searchForm = document.createElement('form');
    searchForm.setAttribute('class', 'filtration__search-form');
    searchForm.setAttribute('action', '#');

    searchWrapper.append(btnList, searchForm);

    let searchInput = document.createElement('input');
    searchInput.setAttribute('class', 'filtration__search-input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Введите название товара';

    let searchBtn = document.createElement('button');
    searchBtn.setAttribute('class', 'filtration__search-btn');
    searchBtn.type = 'button';
    searchBtn.textContent = 'Поиск';
    
    // searchBtn.addEventListener('click', check);

    searchForm.append(searchInput, searchBtn);

    let wrapperCard = document.createElement('div');
    wrapperCard.setAttribute('class', 'filtration__card-wrapper');

    let cardProductList = document.createElement('ul');
    cardProductList.setAttribute('class', 'filtration__card-product-list');

    getDataProducts('http://localhost:3001/laptops');

    wrapperCard.appendChild(cardProductList);
    container.append(searchWrapper, wrapperCard);

    document.body.appendChild(container);
}

export default renderProducts;