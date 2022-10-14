let btns = document.querySelectorAll('button');
let display=document.querySelector('.calculator-display');
let computation=''


function add(a, b) {
    console.log(a + b)
    return a + b;
}

function subtract(a, b) {
    console.log(a - b)
    return a - b;
}

function multiply(a, b) {
    console.log(a * b)
    return a * b;
}

function divide(a, b) {
    console.log(a / b)
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
        default:
            console.log('ERROR!')

    }
}

function updateDisplay(string){
    display.innerText=string;
}

function updateComputation(char){
    console.log(char);
    computation+=char;
    updateDisplay(computation)
}


for (let i of btns) {
    i.addEventListener('click', ()=>updateComputation(i.innerText)) ;
}