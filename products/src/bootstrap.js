import faker from 'faker';

function mount (HTMLElement) {
    let products = '';

    for (let i = 0; i < 6; i++) {
    const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    };

    HTMLElement.innerHTML = products;
};

// isolation
if (process.env.NODE_ENV === 'development') {
    const productsUniqueElement = document.querySelector('#dev-products');

    if (productsUniqueElement) mount(productsUniqueElement)
}

export default { mount }