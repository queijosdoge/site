function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let fechaMenu = document.querySelector('.fecha-menu');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        fechaMenu.classList.remove('close');
        
        document.querySelector('.icon').src = "./images/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        fechaMenu.classList.add('close');
        document.querySelector('.icon').src = "./images/close_white_36dp.svg";
    }
}

function fechaMenu() {
    document.querySelector('.fecha-menu').addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.remove('open');
        document.querySelector('.fecha-menu').classList.remove('close');
        document.querySelector('.icon').src = "./images/menu_white_36dp.svg";

    });
}
    