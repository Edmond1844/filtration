let filtrationBottons = [
    { 
        "buttonName": "В наличии",
        "type": "button",
        "data-sort": "inStock"
    },
    { 
        "buttonName": "Не в наличии",
        "type": "button",
        "data-sort": "notAvailable"
    },
    { 
        "buttonName": "Пиццы",
        "type": "button",
        "data-sort": "pizzas"
    },
    { 
        "buttonName": "Пиццы в наличии",
        "type": "button",
        "data-sort": "pizzasInStock"
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

function addBtn(btnList) {
    filtrationBottons.forEach(botton => {
        let btnItem = document.createElement('li');
        btnItem.setAttribute('class', 'filtration__btn-item');
        btnList.appendChild(btnItem);
    
        let btnfilter = document.createElement('button');
        btnfilter.setAttribute('class', 'filtration__btn-filter');
        btnfilter.type = botton.type;
        btnfilter.setAttribute('data-sort', botton["data-sort"]);
        btnfilter.textContent = botton.buttonName;
        btnItem.appendChild(btnfilter);
    });
}

export default addBtn;