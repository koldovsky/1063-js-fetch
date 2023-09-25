const response = await fetch('api/products.json');
const products = await response.json();

function renderProducts(products, rate) {
    let productsHtml = '';
    for (const product of products) {
        productsHtml += 
        `<article class="product-card">
            <img src="${product.imageUrl}" alt="${product.title}">
            <h3 class="product-card__h3">${product.title}</h3>
            <p class="product-card__description">${product.description}</p>
            <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                    Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                    Buy - ${(product.price * rate).toFixed(2)}
                </button>
            </div>
        </article>`;
    }
    document.querySelector('.products__list').innerHTML = productsHtml;
}

let currencies;
async function changeCurrency() {
    const currency = document.querySelector('.products__currency').value;
    if (!currencies) {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        currencies = await response.json();
    }
    const rate = currencies.rates[currency];
    renderProducts(products, rate);
}

document.querySelector('.products__currency').addEventListener('change', changeCurrency);

renderProducts(products, 1);
