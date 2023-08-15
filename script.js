let displayValue = "0";
function appendToDisplay(value) {
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = displayValue;
}

function calculate() {
    displayValue = eval(displayValue).toString();
    updateDisplay();
}
