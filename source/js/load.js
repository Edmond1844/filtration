import getData from "./api.js";
import renderProducts from "./render.js";

function loadProducts() {
    getData('http://localhost:3001/laptops')
    .then(itemCard => {
        itemCard.forEach(item => {
            renderProducts(item)
        });
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    }); 
}

export default loadProducts;
