let value = 0;
const valueSpan = document.getElementById('value') as HTMLSpanElement;

document.getElementById('incrementBtn')!.addEventListener('click', () => {
    value++;
    updateDisplay();
});

document.getElementById('decrementBtn')!.addEventListener('click', () => {
    value--;
    updateDisplay();
});

function updateDisplay() {
    valueSpan.textContent = value.toString();
}
