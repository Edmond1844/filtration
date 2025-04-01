// import products from "./data.js";
// import getProducts from "./getProducts.js";

// function sortProducts(sortType, cardProductList) {
//     let sortedProducts;

//     if (sortType === 'alf-up') {
//         sortedProducts = [...products].sort((a, b) => a.productName.localeCompare(b.productName));
//     } else if (sortType === 'alf-down') {
//         sortedProducts = [...products].sort((a, b) => b.productName.localeCompare(a.productName));
//     } else if (sortType === "ascending") {
//         sortedProducts = [...products].sort((a, b) => a.price - b.price);
//     } else if (sortType === "descending") {
//         sortedProducts = [...products].sort((a, b) => b.price - a.price);
//     }
    
//     getProducts(sortedProducts, cardProductList);

// }

// export default sortProducts;