document.getElementById("plus").onclick = function () {
    // Get the input field element
    const inputField = document.querySelector("input[type='text']");

    // Append the "+" symbol to the current value in the input field
    inputField.value += "+";
};
