const button: HTMLButtonElement = document.querySelector(".button");
export const screen: HTMLElement = document.querySelector(".screen");
const firstInput: HTMLInputElement = document.querySelector("#firstinput");
const secondInput: HTMLInputElement = document.querySelector("#secondinput");

function addNumber(a: number, b: number): void {
    screen.innerHTML = (a + b).toString();
} 


button.addEventListener('click', () => {
    const a: number = parseInt(firstInput.value);
    const b: number = parseInt(secondInput.value);
    addNumber(a, b);
});
