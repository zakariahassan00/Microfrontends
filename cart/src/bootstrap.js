import faker from 'faker';

function mount (HTMLElement) {
    const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`;
    HTMLElement.innerHTML = cartText;
};

// isolation
if (process.env.NODE_ENV === 'development') {
    const cartUniqueElement = document.querySelector('#dev-cart');
    if (cartUniqueElement) mount(cartUniqueElement);
}

export default { mount }