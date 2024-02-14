function getInputValue(inputValue) {
    const getInput = document.getElementById(inputValue);
    const getInputText = getInput.value;
    const result = parseFloat(getInputText)
    return result;
}
function calculateTriangle() {
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');

    const result = 0.5 * base * height;

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = result;
}


