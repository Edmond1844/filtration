import sortProducts from "./sort.js";
import filterProducts from "./filter.js";

let filtrationBottons = [
    {
        "buttonName": "По алфавиту ↑",
        "type": "button",
        "data-sort": "alf-up"
    },
    {
        "buttonName": "По алфавиту ↓",
        "type": "button",
        "data-sort": "alf-down"
    },
    { 
        "buttonName": "В наличии",
        "type": "button",
        "data-sort": "in-stock"
    },
    { 
        "buttonName": "Не в наличии",
        "type": "button",
        "data-sort": "not-available"
    },
    { 
        "buttonName": "По возрастанию",
        "type": "button",
        "data-sort": "ascending"
    },
    { 
        "buttonName": "По убыванию",
        "type": "button",
        "data-sort": "descending"
    },
    { 
        "buttonName": "Товары меньше 5000",
        "type": "button",
        "data-filter": "less5000"
    },
    { 
        "buttonName": "Товары от 5000 до 10000",
        "type": "button",
        "data-filter": "between-5000-and-10000"
    },
    { 
        "buttonName": "Товары больше 10000",
        "type": "button",
        "data-filter": "greater10000"
    },
];
function addBtn(btnList, cardProductList) {
    filtrationBottons.forEach(button => {
        let btnItem = document.createElement('li');
        btnItem.setAttribute('class', 'filtration__btn-item');
        btnList.appendChild(btnItem);
        let btnFilter = document.createElement('button');
        btnFilter.setAttribute('class', 'filtration__btn-filter');
        btnFilter.type = button.type;
        btnFilter.setAttribute('data-sort', button["data-sort"]);
        btnFilter.setAttribute('data-filter', button["data-filter"]);
        btnFilter.textContent = button.buttonName;
        btnFilter.addEventListener('click', function() {
            if (btnFilter.hasAttribute('data-sort')) {
                sortProducts(btnFilter.getAttribute('data-sort'), cardProductList);
            } 
            else if (btnFilter.hasAttribute('data-filter')) {
                filterProducts(btnFilter.getAttribute('data-filter'), cardProductList);
            }
        });
        btnItem.appendChild(btnFilter);
    });
}

export default addBtn;