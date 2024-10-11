let input = document.querySelector("#input-area");

function AC() {
    input.value = "";
}

function seven() {
    input.value += 7;
}

function eight() {
    input.value += 8;
}

function nine() {
    input.value += 9;
}

function four() {
    input.value += 4;
}

function five() {
    input.value += 5;
}

function six() {
    input.value += 6;
}

function one() {
    input.value += 1;
}

function two() {
    input.value += 2;
}

function three() {
    input.value += 3;
}

function zero() {
    input.value += 0;
}

function dot() {
    input.value += ".";
}

function plus_minus() {
    if (input.value) {
        input.value = input.value.charAt(0) === '-' 
            ? input.value.substring(1)
            : '-' + input.value;
    }
}

function remove() {
    input.value = input.value.slice(0, -1);
}

function plus(value) {
    input.value += value; // Append the operator
}

function calculate() {
    try {
        input.value = eval(input.value); // Evaluate the expression
    } catch (error) {
        input.value = 'Error'; // Handle errors
    }
}
