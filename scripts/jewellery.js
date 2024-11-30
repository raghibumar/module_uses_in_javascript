import { displayProducts } from "../component/displayProducts.js";
import getProducts from "../component/fetchProducts.js";
import navbar from "../component/navbar.js";
// Showing navbar
document.querySelector("#navbar-container").innerHTML = navbar();

const productsMainContainer = document.querySelector("#products");

// Get Products
function getAndShowProducts() {
  getProducts(`https://fakestoreapi.com/products/category/jewelery`).then(
    (data) => {
      displayProducts(data, productsMainContainer);
    }
  );
}

getAndShowProducts();
