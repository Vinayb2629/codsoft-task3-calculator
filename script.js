// script.js

let display = document.getElementById('display');
let displayValue = '0';
let pendingValue;
let evalStringArray = [];

const appendNumber = (num) => {
    if (displayValue === '0') {
        displayValue = num.toString();
    } else {
        displayValue += num.toString();
    }
    display.innerText = displayValue;
};

const appendOperator = (operator) => {
    pendingValue = displayValue;
    displayValue = '0';
    display.innerText = displayValue;
    evalStringArray.push(pendingValue);
    evalStringArray.push(operator);
};

const clearDisplay = () => {
    displayValue = '0';
    pendingValue = undefined;
    evalStringArray = [];
    display.innerText = displayValue;
};

const calculate = () => {
    evalStringArray.push(displayValue);
    let evaluation = eval(evalStringArray.join(' '));
    displayValue = evaluation.toString();
    display.innerText = displayValue;
    evalStringArray = [];
};
