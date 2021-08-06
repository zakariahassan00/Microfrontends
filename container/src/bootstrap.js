import Products from 'products/ProductsIndex'
import Cart from 'cart/CartShow'

console.log("container!")

const productsElement = document.querySelector('#container__products');
const cartElement = document.querySelector('#container__cart');

Products.mount(productsElement);
Cart.mount(cartElement);