const products = [
    {
        id: 1,
        title: 'Baby Yoda',
        description: 'Baby Yoda sticker',
        price: 9.99,
        imageUrl: 'img/baby-yoda.svg'
    },
    {
        id: 2,
        title: 'Banana',
        description: 'Banana sticker',
        price: 10.99,
        imageUrl: 'img/banana.svg'
    },
    {
        id: 3,
        title: 'Girl',
        description: 'Girl sticker',
        price: 8.99,
        imageUrl: 'img/girl.svg'
    },
    {
        id: 4,
        title: 'Viking',
        description: 'Viking sticker',
        price: 7.99,
        imageUrl: 'img/viking.svg'
    }
];

function renderProducts(products) {
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
                    Buy - ${product.price}
                </button>
            </div>
        </article>`;
    }
    document.querySelector('.products__list').innerHTML = productsHtml;
}

renderProducts(products);