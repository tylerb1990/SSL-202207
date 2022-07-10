const {add, subtract, divide, multiply, sqrt, max} = require("./math")


describe("Testing the math module", () => {

    // Add test
    test("Should add two numbers together", () => {
        expect(add(1, 2)).toBe(3);
    });

    // Subtract test
    test("Should minus one number from the other", () => {
        expect(subtract(10, 5)).toBe(5);
    });

    // Divide test
    test("Should divide one number by the other", () => {
        expect(divide(100, 20)).toBe(5);
    });

    // Multiply test
    test("Should multiply one number by the other", () => {
        expect(multiply(10, 5)).toBe(50);
    });

    // Square root test
    test("Should find the square root of a number", () => {
        expect(sqrt(16)).toBe(4);
    });

    // Max test
    test("Should show which number is greater", () => {
        expect(max(10, 5)).toBe(10);
    });

});