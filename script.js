let numbers = document.querySelectorAll(".number"),
    operators = document.querySelectorAll(".operator"),
    clear = document.querySelector(".clear"),
    clearAll = document.querySelector(".clear_all"),
    demical = document.querySelector(".demical"),
    display = document.querySelector(".display"),
    result = document.querySelector("equals"),
    memoryCurrentNumber = 0,
    memoryNewNumber = false,
    memoryPendingOperation = "";

console.log(numbers);