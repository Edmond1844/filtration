import { getItemCard } from "./localStorage/arrayCopy.js";

function sortProducts(sortType) {
    const copiedItemCard = getItemCard();
    let sortedProducts;

    if (sortType === 'alf-up') {
        sortedProducts = [...copiedItemCard].sort((a, b) => a.productName.localeCompare(b.productName));
        console.log(sortedProducts)    
    } else if (sortType === 'alf-down') {
        sortedProducts = [...copiedItemCard].sort((a, b) => b.productName.localeCompare(a.productName));
        console.log(sortedProducts)   
    } else if (sortType === "ascending") {
        sortedProducts = [...copiedItemCard].sort((a, b) => a.price - b.price);
        console.log(sortedProducts)   
    } else if (sortType === "descending") {
        sortedProducts = [...copiedItemCard].sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
}

export default sortProducts;