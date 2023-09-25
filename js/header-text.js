const headerText = document.querySelector('.header__title');

const greetings = [
    'HELLO',
    'ПРИВІТ!',
    'GREETINGS',
    'HOLA!',
    'HEY!',
    'HI'
];

function getRandomEl(arr) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}

headerText.innerText = getRandomEl(greetings);

