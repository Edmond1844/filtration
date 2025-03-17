import addBtn from "./addBtn.js";
import getProducts from "./getProducts.js";
import products from "./data.js";

let container = document.createElement('div');
container.setAttribute('class', 'filtration__container');

let btnWrapper = document.createElement('div');
btnWrapper.setAttribute('class', 'filtration__wrapper-btn');

let btnList = document.createElement("ul");
btnList.setAttribute('class', 'filtration__btn-list');
btnWrapper.appendChild(btnList);

let wrapperCard = document.createElement('div');
wrapperCard.setAttribute('class', 'filtration__card-wrapper');

let cardProductList = document.createElement('ul');
cardProductList.setAttribute('class', 'filtration__card-product-list');

wrapperCard.appendChild(cardProductList);
container.append(btnWrapper, wrapperCard);

document.body.appendChild(container);

getProducts(products, cardProductList);
addBtn(btnList, cardProductList);