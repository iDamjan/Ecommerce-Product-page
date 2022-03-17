const burgerMenu = document.querySelector('.burgerMenu');
const sideMenuMobile = document.querySelector('.mobile_menu_hide');
const closeButtonMobile = document.querySelector('.closeButtonMobile');

burgerMenu.addEventListener('click',() => {

    sideMenuMobile.classList.add('mobile_menu');

    
})

closeButtonMobile.addEventListener('click', () =>{
    sideMenuMobile.classList.remove('mobile_menu');
})

