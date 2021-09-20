const multiply = require('./multiply');

const numberArr = [20, 33, 34, 22, 40, 6, 8, 9, 115, 36, 12, -33];

test('check the multiplicity of numbers', () => {
    const num1 = 3;
    const num2 = 5;
    const multiplicity = multiply(numberArr, num1, num2);

    expect(multiplicity).toEqual(
      expect.arrayContaining([33, 6, 9, 36, 12, -33]));
})