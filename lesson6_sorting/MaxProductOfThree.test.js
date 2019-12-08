const solution = require("./MaxProductOfThree");

describe("test MaxProductOfThree", () => {
    test("[-3, 1, 2, -2, 5, 6] -> 60", () => {
        expect(solution([-3, 1, 2, -2, 5, 6])).toBe(60);
    });
});
