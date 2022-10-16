let numberButtons = document.querySelectorAll('.number');
let display = document.querySelector('.calculator-display');
let operatorButtons = document.querySelectorAll('.operator');
let equalButton = document.querySelector('.evaluate');
let displayForA = '';
let displayForB = '';
let operator = ''
let operatorPressed = false;
let displayText = '';
let result = 0;
let equalPressed = false


function add(a, b) {
    console.log(a + b)
    result = a + b;
    return result
}

function subtract(a, b) {
    console.log(a - b)
    result = a - b;
    return result
}

function multiply(a, b) {
    console.log(a * b)
    result = a * b;
    return result
}

function divide(a, b) {
    console.log(a / b)
    result = a / b;
    return result
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            add(a, b);
            displayText.innerText = result;
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

function updateDisplay() {
    if (equalPressed === true) {
        displayText = result;
    }
    displayText = displayForA + operator + displayForB;
    display.innerText = displayText;


}

function displayResult() {
    displayText.innerText = result;
    console.log(result)
}

function setOperator(button) {
    if (displayForA.length > 0) {
        operator = button.innerText;
        operatorPressed = true;
        console.log(operator);
        updateDisplay()

    }
}

function getOperatorPressed() {
    console.log(operatorPressed)
    return operatorPressed;
}

function setDisplay(button) {
    if (getOperatorPressed() === true) {
        displayForB += button
        console.log("b " + displayForB);
        updateDisplay();
        console.log("display text " + displayText)
        return displayForB
    }
    displayForA += button;
    console.log("A " + displayForA);
    updateDisplay();
    console.log("display text " + displayText)
    return displayForA

}


for (let btn of numberButtons) {

    btn.addEventListener('click', (event) => setDisplay(btn.innerText));


}

for (let btn of operatorButtons) {
    btn.addEventListener('click', (event) => setOperator(btn));


}

equalButton.addEventListener('click', (event) => {

    operate(operator, parseFloat(displayForA),
        parseFloat(displayForB));
    display.innerText = result;


})