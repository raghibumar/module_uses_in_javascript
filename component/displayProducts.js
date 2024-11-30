const displayProducts = (data, productsMainContainer) => {
  productsMainContainer.innerHTML = "";

  data.map((product) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.classList.add("product-image");
    imageContainer.append(imageElement);

    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");

    const titleElement = document.createElement("p");
    titleElement.classList.add("product-title");
    titleElement.textContent = product.title;

    const priceElement = document.createElement("p");
    priceElement.classList.add("product-price");
    priceElement.textContent = product.price;

    const ratingElement = document.createElement("p");
    ratingElement.classList.add("product-rating");
    ratingElement.textContent = product.rating.rate;

    textContainer.append(titleElement, priceElement, ratingElement);

    cardContainer.append(imageContainer, textContainer);

    productsMainContainer.append(cardContainer);
  });
};

export { displayProducts };
