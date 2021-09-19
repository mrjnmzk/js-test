
 const multiply = (numberArr, num1, num2) =>
    numberArr.reduce((arr, curVal) =>
        ((curVal % num1 === 0 && curVal % num2 !== 0) && arr.push(curVal), arr), [])

console.log(multiply([20, 33, 34, 22, 40, 6, 8, 9, 115, 36, 12, -33], 3, 5)); // [33, 6, 9, 36, 12, -33]









module.exports = multiply;