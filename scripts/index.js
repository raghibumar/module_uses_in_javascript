import { displayProducts } from "../component/displayProducts.js";
import getProducts from "../component/fetchProducts.js";
import navbar from "../component/navbar.js";

const productsMainContainer = document.querySelector("#products");

// Showing navbar
document.querySelector("#navbar-container").innerHTML = navbar();

// Get Products and Show in UI
function getProductsData() {
  getProducts(`https://fakestoreapi.com/products`).then((value) => {
    displayProducts(value, productsMainContainer);
  });
}
getProductsData();
