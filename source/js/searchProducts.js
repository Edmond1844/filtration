// function check(products, searchInput, searchForm) { 
//     const searchTerm = searchInput.value.toLowerCase();
//     let found = false;

//     products.some(checkProduct => {
//         if(checkProduct.productName.toLowerCase().includes(searchTerm)) {
//             found = true;
//         }
//     })

//     if (found) {
//         let resultSearch = document.createElement('p');
//         resultSearch.textContent = `${searchTerm} найдено`;
//         searchForm.appendChild(resultSearch);
//     } else {
//         let resultSearch = document.createElement('p');
//         resultSearch.textContent = `${searchTerm} не найдено`;
//         searchForm.appendChild(resultSearch);

//         console.log(resultSearch)
//     }

//     searchInput.value = '';
// }

// export default check;