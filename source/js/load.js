import getData from "./api.js";
import renderProducts from "./render.js";
import { setItemCard } from "./arrayCopy.js";

function loadProducts() {
    getData('http://localhost:3001/laptops')
    .then(itemCard => {
        setItemCard(itemCard);
        itemCard.forEach(item => {
            renderProducts(item);
        });
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    }); 
}

export default loadProducts;
