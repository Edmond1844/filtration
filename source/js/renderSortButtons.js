// import sortProducts from "./sort.js";
// import filterProducts from "./filter.js";

// let filtrationBottons = [
//     {
//         "buttonName": "По алфавиту ↑",
//         "data-sort": "alf-up"
//     },
//     {
//         "buttonName": "По алфавиту ↓",
//         "data-sort": "alf-down"
//     },
//     { 
//         "buttonName": "В наличии",
//         "data-filter": "in-stock"
//     },
//     { 
//         "buttonName": "Не в наличии",
//         "data-filter": "not-available"
//     },
//     { 
//         "buttonName": "По возрастанию",
//         "data-sort": "ascending"
//     },
//     { 
//         "buttonName": "По убыванию",
//         "data-sort": "descending"
//     },
//     { 
//         "buttonName": "Товары меньше 5000",
//         "data-filter": "less5000"
//     },
//     { 
//         "buttonName": "Товары от 5000 до 10000",
//         "data-filter": "between-5000-and-10000"
//     },
//     { 
//         "buttonName": "Товары больше 10000",
//         "data-filter": "greater10000"
//     },
// ];

// function addBtn(btnList, cardProductList) {
    
// let typeButton = 'button'; 

//     filtrationBottons.forEach(button => {
//         let btnItem = document.createElement('li');
//         btnItem.setAttribute('class', 'filtration__btn-item');
//         btnList.appendChild(btnItem);
//         let btnFilter = document.createElement('button');
//         btnFilter.setAttribute('class', 'filtration__btn-filter');
//         btnFilter.type = typeButton;
//         if (button["data-filter"]) {
//             btnFilter.setAttribute('data-filter', button["data-filter"]);
//         } else {
//             btnFilter.setAttribute('data-sort', button["data-sort"]);
//         }
//         btnFilter.textContent = button.buttonName;
//         btnFilter.addEventListener('click', function() {
//             if (btnFilter.hasAttribute('data-sort')) {
//                 sortProducts(btnFilter.getAttribute('data-sort'), cardProductList);
//             } 
//             else if (btnFilter.hasAttribute('data-filter')) {
//                 filterProducts(btnFilter.getAttribute('data-filter'), cardProductList);
//             }
//         });
//         btnItem.appendChild(btnFilter);
//     });
// }

// export default addBtn;

import sortProducts from "./sort.js";
import { getItemCard } from "./arrayCopy.js"; 
import renderProducts from  "./render.js";
// import filterProducts from "./filter.js";

let filtrationBottons = [
    {
        "buttonName": "По алфавиту ↑",
        "data-sort": "alf-up"
    },
    {
        "buttonName": "По алфавиту ↓",
        "data-sort": "alf-down"
    },
    { 
        "buttonName": "В наличии",
        "data-filter": "in-stock"
    },
    { 
        "buttonName": "Не в наличии",
        "data-filter": "not-available"
    },
    { 
        "buttonName": "По возрастанию",
        "data-sort": "ascending"
    },
    { 
        "buttonName": "По убыванию",
        "data-sort": "descending"
    },
    { 
        "buttonName": "Товары меньше 5000",
        "data-filter": "less5000"
    },
    { 
        "buttonName": "Товары от 5000 до 10000",
        "data-filter": "between-5000-and-10000"
    },
    { 
        "buttonName": "Товары больше 10000",
        "data-filter": "greater10000"
    },
];

function button() {
    let cardProductList = document.querySelector('.filtration__card-product-list');

    let typeButton = 'button'; 
    let btnList = document.querySelector('.filtration__btn-list');

    filtrationBottons.forEach(Itembutton => {
        let btnItem = document.createElement('li');
        btnItem.setAttribute('class', 'filtration__btn-item');

        let btnFilter = document.createElement('button');
        btnFilter.setAttribute('class', 'filtration__btn-filter');
        btnFilter.type = typeButton;
        btnFilter.textContent = Itembutton.buttonName; 
        if (Itembutton["data-filter"]) {
            btnFilter.setAttribute('data-filter', Itembutton["data-filter"]);
        } else {
            btnFilter.setAttribute('data-sort', Itembutton["data-sort"]);
        }
        
        btnFilter.addEventListener('click', function() {
            cardProductList.innerHTML = '';

            let arrayItems = getItemCard(); 
                        
            if (btnFilter.hasAttribute('data-sort')) {
                const sortedProducts = sortProducts(btnFilter.getAttribute('data-sort'), arrayItems); 
                sortedProducts.forEach(card => renderProducts(card));
            } 
            else if (btnFilter.hasAttribute('data-filter')) {
                // filterProducts(btnFilter.getAttribute('data-filter'));
            }
        });

        btnItem.appendChild(btnFilter);
        btnList.appendChild(btnItem);
    });
}

export default button;