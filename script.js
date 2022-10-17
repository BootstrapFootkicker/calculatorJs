let numberButtons = document.querySelectorAll('.number');
let display = document.querySelector('.calculator-display');
let operatorButtons = document.querySelectorAll('.operator');
let equalButton = document.querySelector('.evaluate');
let displayText = [];

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

function parseArray(array) {
    let isNegative = false;
    let a;
    let b;
    let indexOfOperator;
    let result;
    if (isOperator(array[0])) {
        console.log(array[0] + " negative!");
        console.log(array.shift());
        isNegative = true;
    }
    indexOfOperator = array.findIndex(isOperator)
    if (isNegative === true) {
        a = parseFloat('-' + array.slice(0, indexOfOperator).join(''));
    } else {
        a = parseFloat(array.slice(0, indexOfOperator).join(''));
    }

    b = parseFloat(array.slice(indexOfOperator + 1, array.length).join(''));

    result = operate(array[indexOfOperator], a, b);

    displayResult(result);
    displayText = result.toString().split('');
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
