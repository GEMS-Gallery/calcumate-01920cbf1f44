document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    let currentInput = "";
    let operator = null;
    let firstOperand = null;

    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function() {
            const value = this.getAttribute("data-value");

            if (value === "=") {
                if (firstOperand !== null && operator !== null) {
                    const secondOperand = parseFloat(currentInput);
                    let result = 0;
                    switch (operator) {
                        case "+":
                            result = firstOperand + secondOperand;
                            break;
                        case "-":
                            result = firstOperand - secondOperand;
                            break;
                        case "*":
                            result = firstOperand * secondOperand;
                            break;
                        case "/":
                            result = firstOperand / secondOperand;
                            break;
                    }
                    display.textContent = result;
                    currentInput = result.toString();
                    firstOperand = null;
                    operator = null;
                }
            } else if (["+", "-", "*", "/"].includes(value)) {
                if (currentInput !== "") {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = "";
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});
