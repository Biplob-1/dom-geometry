function getInputValueById(inputId) {
    const getInputValue = document.getElementById(inputId);
    const getInputText = getInputValue.value;
    const numericValue = parseFloat(getInputText);
    // console.log(typeof numericValue);

    if (isNaN(numericValue) || numericValue < 0) {
        alert(`Input positive Number only`);
        return null;
    }
    return numericValue;

}
function setValueById(inputId, output) {
    const area = document.getElementById(inputId);
    area.innerText = output;
    // return area;
}
function calculateTriangle() {
    // const getInputBaseValue = document.getElementById('triangle-base');
    // const getInputBaseText = getInputBaseValue.value;
    // const baseNumericValue = parseFloat(getInputBaseText);
    const base = getInputValueById('triangle-base');

    // const getInputHeightValue = document.getElementById('triangle-height');
    // const getInputHeightText = getInputHeightValue.value;
    // const heightNumericValue = parseFloat(getInputHeightText);
    const height = getInputValueById('triangle-height');

    // const result = 0.5 * baseNumericValue * heightNumericValue;
    const result = 0.5 * base * height;

    // const triangleArea = document.getElementById('triangle-area');
    // triangleArea.innerText = result;
    setValueById('triangle-area', result)

    // console.log(result);
}

function calculateRectangle() {
    // const rectangleInputValue = document.getElementById('rectangle-width');
    // const rectangleInputText = rectangleInputValue.value;
    // const rectangleNumericValue = parseFloat(rectangleInputText);

    const width = getInputValueById('rectangle-width');

    // const rectangleInputLengthValue = document.getElementById('rectangle-length');
    // const rectangleInputLengthText = rectangleInputLengthValue.value;
    // const rectangleNumericValueLength = parseFloat(rectangleInputLengthText);

    const length = getInputValueById('rectangle-length');

    const result = width * length;

    const rectangleArea = document.getElementById('rectangle-area')
    rectangleArea.innerText = result;
}