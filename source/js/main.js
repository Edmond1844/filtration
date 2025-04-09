import loadProducts from "./load.js";
import button from "./renderSortButtons.js";
import toggleBtnThemeColor from "./toggleBackgroundColor.js";

let container = document.createElement('div');
container.className = 'filtration__container';

let btnList = document.createElement('ul');
btnList.className = 'filtration__btn-list';

let cardProductList = document.createElement('ul');
cardProductList.className = 'filtration__card-product-list';

container.append(btnList, cardProductList);
document.body.appendChild(container);


button();
loadProducts();
toggleBtnThemeColor();