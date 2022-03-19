const burgerMenu = document.querySelector('.burgerMenu');
const sideMenuMobile = document.querySelector('.mobile_menu_hide');
const closeButtonMobile = document.querySelector('.closeButtonMobile');
const buttonNext = document.querySelector('.next');
const buttonPrevious = document.querySelector('.previous');

const plusProduct = document.querySelector('.plus')
const minusProduct = document.querySelector('.minus')
const result = document.querySelector('.result')
const priceShoes = document.querySelector('.price')

let count = 1; 
let price = 125; 


burgerMenu.addEventListener('click',() => {

    sideMenuMobile.classList.add('mobile_menu');

    
})

closeButtonMobile.addEventListener('click', () =>{
    sideMenuMobile.classList.remove('mobile_menu');
})

plusProduct.addEventListener('click',() => {
    count += 1;
        result.innerHTML = count;

        if(result.innerHTML > 1) { 
            let newPrice = price += 125; 
            priceShoes.innerHTML = `$${newPrice}.00`;
        }


})

minusProduct.addEventListener('click',() => {
    if(result.innerHTML > 1) { 
    count -= 1;
        result.innerHTML = count;
        let priceDecrease = price -= 125;
        priceShoes.innerHTML = `$${priceDecrease}.00`
    }
        
})


