// get all input value
function getInputValue(inputValue) {
    const getInput = document.getElementById(inputValue);
    const getInputText = getInput.value;
    if (getInputText === '') {
        alert(`Field can't be blank.`);
        return null;
    }

    const result = parseFloat(getInputText)
    if (isNaN(result) || result <= 0) {
        alert(`Please enter a positive number.`);
        return null;
    }
    return result;
}
// set inner text
function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area.toFixed(2);

}
// Triangle
function calculateTriangle() {
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');

    const result = 0.5 * base * height;

    setInnerTextById('triangle-area', result)
    // const triangleArea = document.getElementById('triangle-area');
    // triangleArea.innerText = result;
}
// Rectangle
function calculateRectangle() {
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');

    const result = width * length;

    // const rectangleArea = document.getElementById('rectangle-area');
    // rectangleArea.innerText = result;
    setInnerTextById('rectangle-area', result);
}
//Parallelogram
function calculateParallelogram() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const result = base * height;

    // const parallelogramArea = document.getElementById('parallelogram-area');
    // parallelogramArea.innerText = result;
    setInnerTextById('parallelogram-area', result);
}
// Rhombus
function calculateRhombus() {
    const diagonalFirst = getInputValue('diagonal-one');
    const diagonalSecond = getInputValue('diagonal-second');

    const result = 0.5 * diagonalFirst * diagonalSecond;

    // const triangleArea = document.getElementById('rhombus-area');
    // triangleArea.innerText = result;
    setInnerTextById('rhombus-area', result);
}
// Pentagon
function calculatePentagon() {
    const pentagonBase = getInputValue('pentagon-base');
    const pentagonHeight = getInputValue('pentagon-height');

    const result = 0.5 * pentagonBase * pentagonHeight;

    // const pentagonArea = document.getElementById('pentagon-area');
    // pentagonArea.innerText = result;
    setInnerTextById('pentagon-area', result);
}
// Ellipse
function calculateEllipse() {
    const ellipseBase = getInputValue('ellipse-base');
    const ellipseHeight = getInputValue('ellipse-height');

    const result = Math.PI * ellipseBase * ellipseHeight;

    // const ellipseArea = document.getElementById('ellipse-area');
    // ellipseArea.innerText = result;
    setInnerTextById('ellipse-area', result);
}