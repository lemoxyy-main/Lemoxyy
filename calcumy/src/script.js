let input = document.querySelector("#input-area")

function AC(){
    input.value = null
}
function seven(){
    input.value = 7
}
function eight(){
    input.value = 8
}
function nine(){
    input.value = 9
}
function four(){
    input.value = 4
}
function five(){
    input.value = 5
}
function six(){
    input.value = 6
}
function one(){
    input.value = 1
}
function two(){
    input.value = 2
}
function three(){
    input.value = 3
}
function zero(){
    input.value = 0
}
function dot(){
    input.value = "."
}
function plus_minus() {
    if (input.value) {
        input.value = input.value.charAt(0) === '-' 
            ? input.value.substring(1)  // Remove the minus if present
            : '-' + input.value;  // Add minus if not present
    }
}
function remove() {
    let a;
    a =input.value;
    input.value = a.slice(0,-1)
}
function divide(a,b) {
    if (b === 0) {
          return 'Cannot divide by zero';
        }
        return a / b;
}
function multiply(a,b) {
    if (a * 0){
        return a
    }
    return a*b
}
function minus(a,b) {
    if (a - (-b)){
        return a + b
    }else if(a + (-b)){
        return a-b
    }else if ((-a) - b){
        return -a-b
    }
    return a-b
}
function plus(value) {
    input.value += value; // Append value to input
}
function remainder(a,b) {
    let expression = input.value;
    try {
        let parts = expression.split("%");
        if (parts.length === 2) {
            let result = parseFloat(parts[0]) % parseFloat(parts[1]);
            input.value = result;
        }
    } catch (error) {
        input.value = 'Error';
    }
}
function calculate() {
    try {
        input.value = eval(input.value); // Evaluate the expression
    } catch (error) {
        input.value = 'Error'; // Handle errors
    }
}