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

  if (result.innerHTML > 1) {
    let newPrice = (price += 125);
    priceShoes.innerHTML = `$${newPrice}.00`;
  }
});

minusProduct.addEventListener("click", () => {
  if (result.innerHTML > 1) {
    count -= 1;
    result.innerHTML = count;
    let priceDecrease = (price -= 125);
    priceShoes.innerHTML = `$${priceDecrease}.00`;
  }
});
//Counting of the product
