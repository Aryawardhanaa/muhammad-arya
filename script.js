const typedText = document.getElementById('typed-text');
const text = "Hello, World!";
let index = 0;

function type() {
    typedText.innerHTML += text[index];
    index++;

    if (index >= text.length) {
        clearInterval(typingInterval);
    }
}

const typingInterval = setInterval(type, 100);