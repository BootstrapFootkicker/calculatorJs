let numberButtons = document.querySelectorAll('.number');
let display = document.querySelector('.calculator-display');
let operatorButtons = document.querySelectorAll('.operator');
let equalButton = document.querySelector('.evaluate');
let deleteButton = document.querySelector('.delete');
let displayText = [];

function add(a, b) {
    console.log(a + b);
    return (a + b);
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
            console.log('ERROR!');

    }
}

//adds 'r' to array after initial operation to track whether an operation has already been done.
function nextOperation(array) {

    if (array.includes('r')) {
        console.log('r true');
        return true;
    } else {
        console.log('r false');
        return false;
    }

}

function isNegative(array) {
    let negative = false;
    if (array[0] === '-') {
        negative = true;
    }
    return negative;
}

function containsOperator(array) {
    let operators = ['/', '+', '-', '*'];
    let hasOperator = false;
    for (let operator in operators) {
        if (array.includes(operators[operator]) === true) {
            console.log(hasOperator)
            hasOperator = true;
        }
    }

    return hasOperator;
}

function addToDisplay(value) {

    //prevents user from inputting extra operators.
    if (containsOperator(displayText) === true && (value === '+' || value === '-' || value === '*' || value === '/') && isNegative(displayText) === false) {
        console.log(containsOperator(displayText))
        //if result is negative allows you to continue
        if (displayText[0] === 'r' && displayText[1] === '-' && ((value === '+' || value === '-' || value === '*' || value === '/'))) {
            console.log(displayText.shift());
            console.log('good fire')
        } else {
            console.log('wrong fire')
            return;
        }

    }

    //prevents user from inputting a 0 or operator as first value
    if (displayText.length < 1 && value === '0' || displayText.length < 1 && value === '+' || displayText.length < 1 && value === '-'
        || displayText.length < 1 && value === '*' ||
        displayText.length < 1 && value === '/') {

        return;
    }


    //only allows user to continue operating if the next value isn't an operator after getting initial result
    if (nextOperation(displayText) === true && (value === '+' || value === '-' || value === '*' || value === '/')) {

        console.log(displayText.shift())


    }

    //stops user from entering numbers after initial operation
    if (nextOperation(displayText) === true && (value !== '+' || value !== '-' || value !== '*' || value !== '/')) {


        return;
    }


    displayText.push(value);
    display.innerText = displayText.join('');
    console.log(displayText)
}

function isOperator(element) {
    return (element === '+' || element === '-' || element === '/' || element === '*');
}


function removeFromDisplay() {
    displayText.pop()
    updateDisplay();

}

function updateDisplay() {
    //checks so that calculator doesn't display 'r' token value
    if (displayText.includes('r')) {
        display.innerText = displayText.slice(1, displayText.length).join('');
    } else {
        display.innerText = displayText.join('');
    }

    //removes 'r' check value if user wants to start brand-new calculation
    if (displayText.length === 1 && displayText.includes('r')) {
        displayText.pop();
    }
}

function displayResult(result) {
    if (result === undefined) {
        return;
    }
    display.innerText = result;
}

function parseArray(array) {


    let a;
    let b;
    let indexOfOperator;
    let result;


    indexOfOperator = array.findIndex(isOperator)
    if (isNegative(array) === true) {
        console.log('parse negative')
        console.log("shift " + array.shift());
        indexOfOperator = array.findIndex(isOperator)
        a = parseFloat('-' + array.slice(0, indexOfOperator).join(''));
    } else {
        a = parseFloat(array.slice(0, indexOfOperator).join(''));
    }

    b = parseFloat(array.slice(indexOfOperator + 1, array.length).join(''));

    result = operate(array[indexOfOperator], a, b);

    displayResult(result);
    displayText = result.toString().split('');
    displayText.unshift('r')
    // console.log("a " + a);
    // console.log("b " + b);
    // console.log(array[indexOfOperator])
    // console.log('result ' + result);
}


for (let btn of numberButtons) {

    btn.addEventListener('click', (event) => addToDisplay(btn.innerText));


}

for (let btn of operatorButtons) {
    btn.addEventListener('click', (event) => addToDisplay(btn.innerText));


}

equalButton.addEventListener('click', () => parseArray(displayText));

deleteButton.addEventListener('click', removeFromDisplay);