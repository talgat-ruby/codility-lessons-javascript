const solution = require("./Nesting");

describe("test Nesting", () => {
    test("'(()(())())' -> 1", () => {
        expect(solution("(()(())())")).toBe(1);
    });
    test("'())' -> 0", () => {
        expect(solution("())")).toBe(0);
    });
});
