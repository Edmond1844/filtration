import addBtn from "./addBtn.js";
import getProducts from "./getProducts.js";

let container = document.createElement('div');
container.setAttribute('class', 'filtration__container');

let btnWrapper = document.createElement('div');
btnWrapper.setAttribute('class', 'filtration__wrapper-btn');

let btnList = document.createElement("ul");
btnList.setAttribute('class', 'filtration__btn-list');
btnWrapper.appendChild(btnList);

container.append(btnWrapper);

document.body.appendChild(container);

addBtn(btnList);
getProducts('http://localhost:3001/products', container);