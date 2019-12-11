const solution = require("./Brackets");

describe("test Brackets", () => {
    test("'{[()()]}' -> 1", () => {
        expect(solution("{[()()]}")).toBe(1);
    });
    test("'([)()]' -> 0", () => {
        expect(solution("([)()]")).toBe(0);
    });
    test("'{{{{' -> 0", () => {
        expect(solution("{{{{")).toBe(0);
    });
});
