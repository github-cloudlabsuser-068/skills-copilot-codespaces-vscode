// calculator.js
function calculate(firstNumber, secondNumber, operation) {
    let result;
    switch (operation) {
        case 'add':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case 'subtract':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case 'multiply':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case 'divide':
            if (secondNumber != '0') {
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
            } else {
                throw new Error('Division by zero');
            }
            break;
        default:
            throw new Error('Invalid operation');
    }
    return result;
}

module.exports = calculate;