// import { setThemeColor } from "./store.js";

// function toggleBtnThemeColor() {
//     let dataColor = localStorage.getItem('dataColor');

//     let themeColor;
    
//     if(dataColor) {
//         themeColor = JSON.parse(dataColor);
//     } else {
//         console.log('Пусто');
//     }

//     let container = document.querySelector('.filtration__container');

//     let wrapperBtn = document.createElement('div');
//     wrapperBtn.className = 'filtration__btn-toggle-wrapper';

//     let btnToggle = document.createElement('button');
//     btnToggle.className = 'filtration__btn-toggle';

//     if (themeColor === 'dark') {
//         container.classList.add('filtration__dark');
//         btnToggle.classList.add('filtration__dark-theme');
//     }

//     btnToggle.addEventListener('click', () => {
//         container.classList.toggle('filtration__dark');

//         let newTheme;
//         if (container.classList.contains('filtration__dark')) {
//             newTheme = 'dark';
//         } else {
//             console.log('тема светлая');
//         }

//         localStorage.setItem('dataColor', JSON.stringify(newTheme)); 
//         setThemeColor(newTheme); 

//         btnToggle.classList.toggle('filtration__dark-theme');
//     });

//     wrapperBtn.append(btnToggle);
//     container.appendChild(wrapperBtn);
// }

// export default toggleBtnThemeColor;

import { setThemeColor } from "./store.js";

function toggleBtn() {
    let dataColor = localStorage.getItem('dataColor');

    let themeColor;
    
    if (dataColor) {
        try {
            themeColor = JSON.parse(dataColor);
        } catch (error) {
            console.error("Ошибка при парсинге JSON:", error);
            themeColor = 'light'; 
        }
    } else {
        console.log('Пусто');
        themeColor = 'light'; 
    }

    let container = document.querySelector('.filtration__container');

    let wrapperBtn = document.createElement('div');
    wrapperBtn.className = 'filtration__btn-toggle-wrapper';

    let btnToggle = document.createElement('button');
    btnToggle.className = 'filtration__btn-toggle';

    if (themeColor === 'dark') {
        container.classList.add('filtration__dark');
        btnToggle.classList.add('filtration__dark-theme');
    }

    btnToggle.addEventListener('click', () => {
        container.classList.toggle('filtration__dark');

        let newTheme;
        if (container.classList.contains('filtration__dark')) {
            newTheme = 'dark';
        } else {
            newTheme = 'light'; 
            console.log('тема светлая');
        }

        localStorage.setItem('dataColor', JSON.stringify(newTheme)); 
        setThemeColor(newTheme); 

        btnToggle.classList.toggle('filtration__dark-theme');
    });

    wrapperBtn.append(btnToggle);
    container.appendChild(wrapperBtn);
}

export default toggleBtn;
