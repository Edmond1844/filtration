import { setThemeColor } from "./store.js";

function toggleBtnThemeColor() {
    let storedTheme = localStorage.getItem('stortTheme');

    let themeColor;
    
    if(storedTheme) {
        themeColor = JSON.parse(storedTheme);
    } else {
        console.log('Пусто');
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
            console.log('тема светлая');
                newTheme = 'light'; 
        }

        localStorage.setItem('stortTheme', JSON.stringify(newTheme)); 
        setThemeColor(newTheme); 

        btnToggle.classList.toggle('filtration__dark-theme');
    });

    wrapperBtn.append(btnToggle);
    container.appendChild(wrapperBtn);
}

export default toggleBtnThemeColor;


