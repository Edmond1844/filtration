import products from "./data.js";
import getProducts from "./getProducts.js";

function filterProducts(filterType, cardProductList) {
    let filteredProducts;
    if (filterType === "less5000") {
        filteredProducts = products.filter(itemPrice => itemPrice.price < 5000);
    } else if (filterType === "between-5000-and-10000") {
        filteredProducts = products.filter(itemPrice => itemPrice.price >= 5000 && item.price <= 10000);
    } else if (filterType === "greater10000") {
        filteredProducts = products.filter(itemPrice => itemPrice.price > 10000);
    }

    getProducts(filteredProducts, cardProductList);
}

export default filterProducts;