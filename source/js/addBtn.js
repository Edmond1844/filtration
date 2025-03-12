import sortProducts from "./sort.js";

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
    }
];

function addBtn(btnList, cardProductList) {
    filtrationBottons.forEach(botton => {
        let btnItem = document.createElement('li');
        btnItem.setAttribute('class', 'filtration__btn-item');
        btnList.appendChild(btnItem);
    
        let btnfilter = document.createElement('button');
        btnfilter.setAttribute('class', 'filtration__btn-filter');
        btnfilter.type = botton.type;
        btnfilter.setAttribute('data-sort', botton["data-sort"]);
        btnfilter.textContent = botton.buttonName;
        btnfilter.addEventListener('click', function(){
            sortProducts(btnfilter.getAttribute('data-sort'), cardProductList);
        })
        btnItem.appendChild(btnfilter);
    });
}

export default addBtn;