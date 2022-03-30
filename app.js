
let count = 1;
let price = 125;
const localStorageCount = localStorage.getItem("itemsInCart");


if (localStorageCount) {
  productInBasket.classList.add("product_added");
  emptyBasketText.style.display = "none";
  cartCounter.classList.add("itemsCountOnCart");

  result.innerHTML = localStorageCount;
  quantity.innerHTML = localStorageCount;
  cartCounterValue.innerHTML = localStorageCount;
}

// Mobile Carousel
const changeMainImage = (currentImgId, currentImg) => {
  carosel[currentImgId].classList.add("product_image_default");
  carosel[currentImgId].classList.remove("product_image");
  currentImg.classList.remove("product_image_default");
  currentImg.classList.add("product_image");
};

// button next
buttonNext.addEventListener("click", (e) => {
  const currentImg = document.querySelector(".product_image_default");
  let currentImgId = parseInt(currentImg.id) + 1;

  if (carosel.length === currentImgId) {
    currentImgId = 0;
  }
  changeMainImage(currentImgId, currentImg);
});

// button previous
buttonPrevious.addEventListener("click", () => {
  const currentImg = document.querySelector(".product_image_default");
  let previousImgId = parseInt(currentImg.id) - 1;

  if (previousImgId < 0) {
    previousImgId = carosel.length - 1;
  }
  changeMainImage(previousImgId, currentImg);
});

// Mobile product container


avatar.addEventListener("click", () => {
  cartContainer.classList.toggle("mobile_cart_container");
  avatar.classList.toggle("avatar_border");
});
cartImage.addEventListener("click", () => {
  cartContainer.classList.toggle("mobile_cart_container");
});
// Mobile product container

// Desktop product container

// Adding products in the basket
addToCartButton.addEventListener("click", () => {
  productInBasket.classList.add("product_added");
  emptyBasketText.style.display = "none";
  cartCounter.classList.add("itemsCountOnCart");
  localStorage.setItem("itemsInCart", count);
});

// Delete the product from the basket
iconDelete.addEventListener("click", () => {
  productInBasket.classList.remove("product_added");
  emptyBasketText.style.display = "flex";
  cartCounter.classList.remove("itemsCountOnCart");
  localStorage.clear();
});
// Desktop image selection

// Openning and closing the mobile menu
burgerMenu.addEventListener("click", () => {
  sideMenuMobile.classList.add("mobile_menu");
  grayedOutBody.style.display = "block";
});

closeButtonMobile.addEventListener("click", () => {
  sideMenuMobile.classList.remove("mobile_menu");
  grayedOutBody.style.display = "none";
});
// Openning and closing the mobile menu

// Counting of the product
plusProduct.addEventListener("click", () => {
  count += 1;
  result.innerHTML = count;
  quantity.innerHTML = count;
  cartCounterValue.innerHTML = count;
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
    cartCounterValue.innerHTML = count;
    const priceDecrease = (price -= 125);
    priceShoes.innerHTML = `$${priceDecrease}.00`;
    totalPriceBasket.innerHTML = ` $${priceDecrease}.00`;
  }
});
// Counting of the product

// Desktop carousel

desktopImagesThumbnail.forEach((img) => {
  img.addEventListener("click", (e) => {
    const clickedImg = e.target;
    const clickedImgId = clickedImg.id;

    desktopImagesThumbnail.forEach((images) => {
      images.classList.remove("image_default");
    });
    clickedImg.classList.add("image_default");

    desktopDefaultProductImage.src = `images/image-product-${clickedImgId}.jpg`;
    const newCurrentImage = document.querySelector(".image_default");
  });
});
desktopDefaultProductImage.addEventListener("click", () => {
  desktopCarousel.classList.add("desktopCarousel");
  grayedOutBodyDesktop.style.display = "block";
});

closeButtonDesktop.addEventListener("click", () => {
  desktopCarousel.classList.remove("desktopCarousel");
  grayedOutBodyDesktop.style.display = "none";
});

// Light box gallery


previousButtonDesktop.addEventListener("click", () => {
  const currentImg = document.querySelector(".product_image_desktop_default");
  let previousImgId = parseInt(currentImg.id) - 1;

  if (previousImgId < 0) {
    previousImgId = lightboxImages.length - 1;
  }
  changeMainImageDesktop(previousImgId, currentImg);
});

nextButtonDesktop.addEventListener("click", () => {
  const currentImg = document.querySelector(".product_image_desktop_default");
  let currentImgId = parseInt(currentImg.id) + 1;

  if (lightboxImages.length === currentImgId) {
    currentImgId = 0;
  }
  changeMainImageDesktop(currentImgId, currentImg);
});

const changeMainImageDesktop = (currentImgId, currentImg) => {
  lightboxImages[currentImgId].classList.add("product_image_desktop_default");
  lightboxImages[currentImgId].classList.remove("product_image_desktop");
  currentImg.classList.remove("product_image_desktop_default");
  currentImg.classList.add("product_image_desktop");
};
