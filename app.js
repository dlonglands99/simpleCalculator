let allClear = document.getElementById("allClear");
let operatorKeys = document.getElementsByClassName("operatorKey");
let numberKeys = document.getElementsByClassName("numberKey");
let equals = document.getElementById("equals");
let userInput = document.getElementById("userInput");
let storedValue = "";
let storedOperator = "";

allClear.addEventListener("click", () => {
    storedValue = "";
    storedOperator = "";
    userInput.value = "";
});

//number key onClick listener
for (numberKey of numberKeys) {
    numberKey.addEventListener("click", function() {
        userInput.value += this.innerText;
    });
}

//operator key onClick listener
for (operatorKey of operatorKeys) {
    operatorKey.addEventListener("click", function() {
        storedOperator = this.innerText;
        storedValue = userInput.value;
        userInput.value = "";
    })
}

//equals onClick listener
equals.addEventListener("click", () => {
    if (storedOperator == "+") {
        userInput.value = Number(storedValue) + Number(userInput.value);
    } else if (storedOperator == "-") {
        userInput.value = Number(storedValue) - Number(userInput.value);
    } else if (storedOperator == "*") {
        userInput.value = Number(userInput.value) * Number(storedValue);
    } else if (storedOperator == "/") {
        userInput.value = Number(storedValue) / Number(userInput.value);
    } else if (storedOperator == "%") {
        userInput.value = Number(storedValue) % Number(userInput.value);
    }
});
