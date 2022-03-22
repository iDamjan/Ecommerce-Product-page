const burgerMenu = document.querySelector(".burgerMenu");
const sideMenuMobile = document.querySelector(".mobile_menu_hide");
const closeButtonMobile = document.querySelector(".closeButtonMobile");
const buttonNext = document.querySelector(".next");
const buttonPrevious = document.querySelector(".previous");

const plusProduct = document.querySelector(".plus");
const minusProduct = document.querySelector(".minus");
const result = document.querySelector(".result");
const priceShoes = document.querySelector(".price");
const carosel = document.querySelectorAll(".carosel img");

const addToCartButton = document.querySelector('.add_toCart');
const productInBasket = document.querySelector('.product_added_hide');
const emptyBasketText = document.querySelector('.cart_empty_text');

const totalPriceBasket = document.querySelector('.total_price');
const quantity = document.querySelector('.quantity');
const iconDelete = document.querySelector('.icon_delete');

const imagesCount = carosel.length;
console.log(imagesCount);
console.log(carosel[imagesCount - 1]);

let count = 1;
let price = 125;

//Mobile Carousel
//button next
buttonNext.addEventListener("click", () => {
  const currentImg = document.querySelector(".product_image_default");
  const nextImg = currentImg.nextElementSibling;

  currentImg.classList.remove("product_image_default");
  currentImg.classList.add("product_image");

  nextImg.classList.add("product_image_default");
  nextImg.classList.remove("product_image");

  if (carosel[imagesCount - 1].classList.contains("product_image_default")) {
    carosel[imagesCount - 1].classList.remove("product_image_default");
    carosel[imagesCount - 1].classList.add("product_image");
    carosel[0].classList.add("product_image_default");
    carosel[0].classList.remove("product_image");
  }
});
//button previous
buttonPrevious.addEventListener("click", () => {
  const currentImg = document.querySelector(".product_image_default");
  const previousImg = currentImg.previousElementSibling;

  currentImg.classList.remove("product_image_default");
  currentImg.classList.add("product_image");

  previousImg.classList.add("product_image_default");
  previousImg.classList.remove("product_image");

  if (carosel[0].classList.contains("product_image_default")) {
    carosel[imagesCount - 1].classList.add("product_image_default");
    carosel[imagesCount - 1].classList.remove("product_image");
    carosel[0].classList.remove("product_image_default");
    carosel[0].classList.add("product_image");
  }
});
//Mobile product container 
const avatar = document.querySelector('.avatar'); 
const cartContainer = document.querySelector('.mobile_cart_container_hide');

avatar.addEventListener('click', ()=> { 
  cartContainer.classList.toggle('mobile_cart_container')
})

//Adding products in the basket
addToCartButton.addEventListener('click',() => { 
  productInBasket.classList.add('product_added');
  emptyBasketText.style.display = 'none';
})

//Delete the product from the basket
iconDelete.addEventListener('click', () =>{
  productInBasket.classList.remove('product_added');
  emptyBasketText.style.display = 'flex';
})
//Desktop image selection

//Openning and closing the mobile menu
burgerMenu.addEventListener("click", () => {
  sideMenuMobile.classList.add("mobile_menu");
});

closeButtonMobile.addEventListener("click", () => {
  sideMenuMobile.classList.remove("mobile_menu");
});
//Openning and closing the mobile menu

//Counting of the product
plusProduct.addEventListener("click", () => {
  count += 1;
  result.innerHTML = count;
  quantity.innerHTML = count;
  if (result.innerHTML > 1) {
    let newPrice = (price += 125);
    priceShoes.innerHTML = `$${newPrice}.00`;
    totalPriceBasket.innerHTML =` $${newPrice}.00`;
    
  }
});

minusProduct.addEventListener("click", () => {
  if (result.innerHTML > 1) {
    count -= 1;
    result.innerHTML = count;
    quantity.innerHTML = count;
    let priceDecrease = (price -= 125);
    priceShoes.innerHTML = `$${priceDecrease}.00`;
    totalPriceBasket.innerHTML =` $${priceDecrease}.00`;
  }
});
//Counting of the product
