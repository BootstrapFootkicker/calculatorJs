let numberButtons = document.querySelectorAll('.number');
let display = document.querySelector('.calculator-display');
let operatorButtons = document.querySelectorAll('.operator');
let equalButton = document.querySelector('.evaluate');
let displayText = [];

let result = 0;

function add(a, b) {
    console.log(a + b)
    return (a + b)
}

function subtract(a, b) {
    console.log(a - b);
    return (a - b);
}

function multiply(a, b) {
    console.log(a * b)
    return (a * b);
}

function divide(a, b) {
    console.log(a / b);
    return (a / b);
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);

        case '*':
            return multiply(a, b);

        case '/':
            return divide(a, b);

        default:
            console.log('ERROR!')

    }
}

function addToDisplay(value) {
    displayText.push(value);
    display.innerText = displayText.join('');
    console.log(displayText)
}

function isOperator(element) {
    return (element === '+' || element === '-' || element === '/' || element === '*');
}


function removeFromDisplay() {
    displayText.pop()
}

function displayResult(result) {
    if (result === undefined) {
        return;
    }
    display.innerText = result;
}

function clearDisplay(array) {
    return array = [];
}

function parseArray(array) {

    let a = 0;
    let b = 0;
    let indexOfOperator = 0;
    let result = 0;
    indexOfOperator = array.findIndex(isOperator)
    a = parseFloat(array.slice(0, indexOfOperator).join(''));
    b = parseFloat(array.slice(indexOfOperator + 1, array.length).join(''));
    result = operate(array[indexOfOperator], a, b);
    displayResult(result);
    displayText=[];
    console.log("a " + a);
    console.log("b " + b);
    console.log(array[indexOfOperator])
    console.log('result ' + result);
}


for (let btn of numberButtons) {

    btn.addEventListener('click', (event) => addToDisplay(btn.innerText));


}

for (let btn of operatorButtons) {
    btn.addEventListener('click', (event) => addToDisplay(btn.innerText));


}

equalButton.addEventListener('click', () => parseArray(displayText));
