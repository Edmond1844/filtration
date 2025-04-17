import { getItemCard } from "./localStorage/arrayCopy.js";

function filterProducts(filterType) {
    const filterItemCard = getItemCard();
    let filteredProducts;

    if (filterType === "less5000") {
        filteredProducts = filterItemCard.filter(itemPrice => itemPrice.price < 5000);
        console.log('работает')
    } else if (filterType === "between-5000-and-10000") {
        filteredProducts = filterItemCard.filter(itemPrice => itemPrice.price >= 5000 && itemPrice.price <= 10000);
    } else if (filterType === "greater10000") {
        filteredProducts = filterItemCard.filter(itemPrice => itemPrice.price > 10000);
    } else if (filterType === "in-stock") {
        filteredProducts = filterItemCard.filter(itemPrice => itemPrice.inStock);
    } else if (filterType === "not-available") {
        filteredProducts = filterItemCard.filter(itemPrice => !itemPrice.inStock);
    }

    return filteredProducts;
}

export default filterProducts;