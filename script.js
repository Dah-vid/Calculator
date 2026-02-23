console.log("Script loaded");
console.log("JavaScript is running!");

let lastClickTime = 0;
let firstNumber = null;
let secondNumber = null;
let operator = null;
let shouldReplaceDisplay = false;

function add(firstNumber, secondNumber){
    return firstNumber + secondNumber
   
};
function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber
};

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber
};
    
function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber
};


function operate(operator, firstNumber, secondNumber){
    if (operator == "+"){
     return add(firstNumber, secondNumber);
    }
    else if (operator == "-"){
    return subtract(firstNumber, secondNumber)
    }
else if (operator == "*"){
    return multiply(firstNumber, secondNumber)
}
else if (operator == "/"){
    return divide(firstNumber, secondNumber)
}
}
     
const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function(event){
        const now = Date.now();
        if (now - lastClickTime < 300) {
            return;
        }
        lastClickTime = now;
        const display = document.querySelector('#container');

        if (event.target.textContent == "+" || event.target.textContent == "-" || 
            event.target.textContent == "*" || event.target.textContent == "/") {
            if (firstNumber !== null && operator !== null){
                secondNumber = Number(display.textContent)
                if (operator == "/" && secondNumber == 0) {
                display.textContent = "Nice try! 🤷";
                shouldReplaceDisplay = true;
    // Don't call operate!
                } else {
                let result = operate(operator, firstNumber, secondNumber);
                //display.textContent = result;
                display.textContent = Math.round(result * 100000000) / 100000000;
                shouldReplaceDisplay = true;
                firstNumber = result;
                operator = event.target.textContent;
                }
            }else{
            firstNumber = Number(display.textContent);
            operator = event.target.textContent;
            display.textContent = "";
            shouldReplaceDisplay = true;

            }

            
        } else if (event.target.textContent == "=") {
            if(firstNumber === null || operator === null || display.textContent === ""){
                //missing something - cant calculate!
                display.textContent = "Error: Incomplete";
                return;
            }

            secondNumber = Number(display.textContent);
            if (operator == "/" && secondNumber == 0) {
            display.textContent = "Nice try! 🤷";
    // Don't call operate!
            } else {
            let result = operate(operator, firstNumber, secondNumber);
            display.textContent = Math.round(result * 100000000) / 100000000;
            }
            shouldReplaceDisplay = true;

            
        } else if (event.target.textContent == "Clear") {
            display.textContent = "";
            firstNumber = null;
            secondNumber = null;
            operator = null;
            shouldReplaceDisplay = false;
            }


        

        else {
    // Must be a number button!
    console.log("Number clicked:", event.target.textContent, "Display before:", display.textContent);
    
    if (shouldReplaceDisplay) {
        display.textContent = event.target.textContent;
        shouldReplaceDisplay = false;
    } else {
        display.textContent += event.target.textContent;
    }
    
    console.log("Display after:", display.textContent);
}


        


    }
)
    }

