let numbers = document.querySelectorAll(".number"),
    operations = document.querySelectorAll(".operator"),
    clear = document.querySelector(".clear"),
    clearAll = document.querySelector(".clear_all"),
    decimal = document.querySelector(".decimal"),
    display = document.querySelector(".display"),
    result = document.querySelector(".equals"),
    memoryCurrentNumber = 0,
    memoryNewNumber = false,
    memoryPendingOperation = "";


numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        numberPress(e.target.textContent);
    });
});

const numberPress = (number) => {
    if (memoryNewNumber) {
        display.value = number;
        memoryNewNumber = false;
    } else {
        if (display.value === "0") {
            display.value = number;
        } else {
            display.value += number;
        }
    }
};

operations.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        operationsF(e.target.textContent);
    });
});

const operationsF = (op) => {
    let localOperationMemory = display.value;
    if (memoryNewNumber && memoryPendingOperation !== "=") {
        display.value = memoryCurrentNumber;
    } else {
        memoryNewNumber = true;
        if (memoryPendingOperation === "+") {
            memoryCurrentNumber += +localOperationMemory; //+ перед чтобы привелось к числу, иначе складывалось бы как строки     
        } else if (memoryPendingOperation === "-") {
            memoryCurrentNumber -= +localOperationMemory;
        } else if (memoryPendingOperation === "*") {
            memoryCurrentNumber *= +localOperationMemory;
        } else if (memoryPendingOperation === "/") {
            memoryCurrentNumber /= +localOperationMemory;
        } else {
            memoryCurrentNumber = +localOperationMemory;
        }
        display.value = memoryCurrentNumber;
        memoryPendingOperation = op;
    }
};

clear.addEventListener("click", (e) => {
    clearF(e.target.textContent);
});

clearAll.addEventListener("click", (e) => {
    clearF(e.target.textContent);
});

const clearF = (op) => {
    if (op == "CE") {    // [CE] удаляет только последнее введённое число
        display.value = "0";
        memoryNewNumber = true;
    } else if (op == "C") { // [C] все вычисления будут очищены
        display.value = "0";
        memoryNewNumber = true;
        memoryPendingOperation = "0";
        memoryCurrentNumber = 0;
    }
};

decimal.addEventListener("click", (e) => {
    decimalF(e.target.textContent);
});

const decimalF =() => {
    let localDecimalMemory = display.value;
    if (memoryNewNumber) {
        localDecimalMemory = '0.';
        memoryNewNumber= false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        }
    }
    display.value = localDecimalMemory;
};

