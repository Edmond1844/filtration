import { setThemeColor } from "./store.js";

function toggleThemeColor() {
    let storedTheme = localStorage.getItem('stortTheme');

    let themeColor;
    
    if(storedTheme) {
        themeColor = JSON.parse(storedTheme);
    } else {
        console.log('Пусто');
    }

    let page = document.querySelector('.filtration__page');

    let wrapperBtn = document.createElement('div');
    wrapperBtn.className = 'filtration__btn-toggle-wrapper';

    let btnToggle = document.createElement('button');
    btnToggle.className = 'filtration__btn-toggle';

    if (themeColor === 'dark') {
        page.classList.add('filtration__dark');
        btnToggle.classList.add('filtration__dark-theme');
    }

    btnToggle.addEventListener('click', () => {
        page.classList.toggle('filtration__dark');

        let newTheme = [];
        
        if (page.classList.contains('filtration__dark')) {
            newTheme = 'dark';
        } else {
            console.log('тема светлая');
            newTheme = 'light'; 
        }

        localStorage.setItem('stortTheme', JSON.stringify(newTheme)); 
        setThemeColor(newTheme); 

        btnToggle.classList.toggle('filtration__dark-theme');
    });

    wrapperBtn.append(btnToggle);
    page.appendChild(wrapperBtn);
}

export default toggleThemeColor;


