const chatBtn = document.querySelector('.chat__button');
chatBtn.addEventListener('click', sendChatMessage);

async function sendChatMessage() {
    const message = document.querySelector('.chat__text').value;
    const response = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({message}),
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    });
    if (response.ok) {
        const data = await response.json();
        document.querySelector('.chat__response').innerHTML = data.data;
    }
}

async function getChatData() {
    const data = await (await fetch('/api/chat')).json();
    document.querySelector('.chat__response').innerHTML = data.data;
}

document.querySelector('.chat__refresh').addEventListener('click', getChatData);

getChatData();