function calculateTriangle() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const traiangleBaseValue = triangleBaseInput.value;
    const base = parseFloat(traiangleBaseValue)
    // console.log(base);
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue);
    // console.log(hight)
    const result = 0.5 * base * height;
    // console.log(result);

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = result;
}