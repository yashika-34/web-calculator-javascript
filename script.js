const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const equalsBtn = document.getElementById("equals");

let currentInput = "";

// Handle Button Clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        if (value) {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Clear Button
clearBtn.addEventListener("click", () => {
    currentInput = "";
    display.value = "";
});

// Delete Last Character
deleteBtn.addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
});

// Evaluate Expression
equalsBtn.addEventListener("click", () => {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch {
        display.value = "Error";
        currentInput = "";
    }
});

// Keyboard Support
document.addEventListener("keydown", (e) => {
    if ((e.key >= "0" && e.key <= "9") || "+-*/.".includes(e.key)) {
        currentInput += e.key;
        display.value = currentInput;
    } else if (e.key === "Enter") {
        equalsBtn.click();
    } else if (e.key === "Backspace") {
        deleteBtn.click();
    } else if (e.key === "Escape") {
        clearBtn.click();
    }
});
