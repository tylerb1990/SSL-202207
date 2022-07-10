const {uppercase, lowercase} = require("./string")


describe("Testing the string module", () => {

    test("Should uppercase a string input", () => {
        expect(uppercase("hello world")).toBe("HELLO WORLD");
    });

    test("Should lowercase a string input", () => {
        expect(lowercase("HELLO WORLD")).toBe("hello world");
    })

});