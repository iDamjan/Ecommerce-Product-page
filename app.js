const burgerMenu = document.querySelector(".burgerMenu");
const grayedOutBody = document.querySelector(".grayedOut_body");
const sideMenuMobile = document.querySelector(".mobile_menu_hide");
const closeButtonMobile = document.querySelector(".closeButtonMobile");
const buttonNext = document.querySelector(".next");
const buttonPrevious = document.querySelector(".previous");

const plusProduct = document.querySelector(".plus");
const minusProduct = document.querySelector(".minus");
const result = document.querySelector(".result");
const priceShoes = document.querySelector(".price");
const carosel = document.querySelectorAll(".carosel img");

const addToCartButton = document.querySelector(".add_toCart");
const productInBasket = document.querySelector(".product_added_hide");
const emptyBasketText = document.querySelector(".cart_empty_text");

const totalPriceBasket = document.querySelector(".total_price");
const quantity = document.querySelector(".quantity");
const iconDelete = document.querySelector(".icon_delete");

const imagesCount = carosel.length;

const desktopImagesThumbnail = document.querySelectorAll(".little_images img");
const desktopCarousel = document.querySelector(".desktopCarousel");
const desktopDefaultProductImage = document.querySelector(
  ".product_image_default_desktop"
);

let count = 1;
let price = 125;

//Mobile Carousel
const changeMainImage = (currentImgId, currentImg) => {
  carosel[currentImgId].classList.add("product_image_default");
  carosel[currentImgId].classList.remove("product_image");
  currentImg.classList.remove("product_image_default");
  currentImg.classList.add("product_image");
};

//button next
buttonNext.addEventListener("click", (e) => {
  const currentImg = document.querySelector(".product_image_default");
  let currentImgId = parseInt(currentImg.id) + 1;

  if (carosel.length === currentImgId) {
    currentImgId = 0;
  }
  changeMainImage(currentImgId, currentImg);
});

//button previous
buttonPrevious.addEventListener("click", () => {
  const currentImg = document.querySelector(".product_image_default");
  let previousImgId = parseInt(currentImg.id) - 1;

  if (previousImgId < 0) {
    previousImgId = carosel.length - 1;
  }
  changeMainImage(previousImgId, currentImg);
});

//Mobile product container
const avatar = document.querySelector(".avatar");
const cartContainer = document.querySelector(".mobile_cart_container_hide");

avatar.addEventListener("click", () => {
  cartContainer.classList.toggle("mobile_cart_container");
});

//Adding products in the basket
addToCartButton.addEventListener("click", () => {
  productInBasket.classList.add("product_added");
  emptyBasketText.style.display = "none";
});

//Delete the product from the basket
iconDelete.addEventListener("click", () => {
  productInBasket.classList.remove("product_added");
  emptyBasketText.style.display = "flex";
});
//Desktop image selection

//Openning and closing the mobile menu
burgerMenu.addEventListener("click", () => {
  sideMenuMobile.classList.add("mobile_menu");
  grayedOutBody.style.display = "block";
});

closeButtonMobile.addEventListener("click", () => {
  sideMenuMobile.classList.remove("mobile_menu");
  grayedOutBody.style.display = "none";
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
    totalPriceBasket.innerHTML = ` $${newPrice}.00`;
  }
});

minusProduct.addEventListener("click", () => {
  if (result.innerHTML > 1) {
    count -= 1;
    result.innerHTML = count;
    quantity.innerHTML = count;
    const priceDecrease = (price -= 125);
    priceShoes.innerHTML = `$${priceDecrease}.00`;
    totalPriceBasket.innerHTML = ` $${priceDecrease}.00`;
  }
});
//Counting of the product

//desktop carousel

desktopImagesThumbnail.forEach((img) => {
  img.addEventListener("click", (e) => {
    const clickedImg = e.target;

    desktopImagesThumbnail.forEach((images) => {
      images.classList.remove("image_default");
    });
    clickedImg.classList.add("image_default");

    desktopDefaultProductImage.src = clickedImg.src;
  });
});
