const buttons = document.querySelectorAll('.button');
const keys = document.querySelectorAll('.key')
const display = document.querySelector('.display');
const equals = document.querySelector('#equals');

for (let button of buttons) {
    button.addEventListener("mousedown", event => {
        button.classList.remove("norm");
        button.classList.add("clicked");
    })
    button.addEventListener("mouseup", event => {
        button.classList.remove("clicked");
        button.classList.add("norm");
    })
}

for (let key of keys) {
    key.addEventListener("click", event => {
        display.innerText += event.target.innerText;
        if (key.innerText === 'C') {
            display.innerText = '';
        }
    })
}

equals.addEventListener("click", event => {
    display.innerText = eval(display.innerText)
})
