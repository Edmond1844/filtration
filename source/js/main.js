import loadProducts from "./load.js";
import renderSortButtons from "./renderSortButtons.js";
import toggleThemeColor from "./localStorage/toggleThemeColor.js";

let page = document.createElement('div');
page.className = 'filtration__page';

let container = document.createElement('div');
container.className = 'filtration__container';

let btnList = document.createElement('ul');
btnList.className = 'filtration__btn-list';

let cardProductList = document.createElement('ul');
cardProductList.className = 'filtration__card-product-list';

let containerCart = document.createElement('div');
containerCart.className = 'filtration__cart-wrapper';

let cartTitle = document.createElement('h2');
cartTitle.textContent = 'Корзина';
cartTitle.className = 'filtration__cart-title';

let cartList = document.createElement('ul');
cartList.className = 'filtration__cart-list';

containerCart.append(cartTitle, cartList);
container.append(btnList, cardProductList);
page.append(container, containerCart);
document.body.appendChild(page);


renderSortButtons();
loadProducts();
toggleThemeColor();


