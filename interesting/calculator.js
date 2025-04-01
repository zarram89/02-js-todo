const container = document.querySelector("#calculator");
const calculateButton = document.querySelector("#calculate");
const number1 = document.querySelector("#num1");
const number2 = document.querySelector("#num2");
const operator = document.querySelector("#operator");
const result = document.querySelector("#result");
const resultsHistory = document.querySelector(".results-history");

const OPERATIONS = {
    ADD: 'add',
    SUBTRACT: 'subtract',
    MULTIPLY: 'multiply',
    DIVIDE: 'divide'
};

const mathOperations = {
    [OPERATIONS.ADD]: (a, b) => a + b,
    [OPERATIONS.SUBTRACT]: (a, b) => a - b,
    [OPERATIONS.MULTIPLY]: (a, b) => a * b,
    [OPERATIONS.DIVIDE]: (a, b) => a / b
};

function calculate(action, digit1, digit2) {
    if (!mathOperations[action.value]) {
        throw new Error("Неизвестная операция");
    }
    return mathOperations[action.value](digit1, digit2);
}

function validateInputs(num1, num2, operator) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Пожалуйста, введите числа");
    }
    if (operator === OPERATIONS.DIVIDE && num2 === 0) {
        throw new Error("На ноль делить нельзя");
    }
}

function addResultToHistory(resultValue) {
    const resultDiv = document.createElement('div');
    resultDiv.className = 'history-item';
    resultDiv.textContent = resultValue;

    // Добавляем обработчик клика для удаления
    resultDiv.addEventListener('click', function() {
        this.remove();
    });

    resultsHistory.appendChild(resultDiv);
}

calculateButton.addEventListener('click', function() {
    try {
        const num1 = parseFloat(number1.value);
        const num2 = parseFloat(number2.value);

        validateInputs(num1, num2, operator.value);

        const calculation = calculate(operator, num1, num2);
        result.textContent = calculation;

        // Добавляем результат в историю
        addResultToHistory(calculation);
    } catch (error) {
        alert(error.message);
    }
});
