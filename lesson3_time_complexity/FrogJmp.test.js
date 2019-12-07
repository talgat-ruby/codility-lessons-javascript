const solution = require("./FrogJmp");

describe("test  FrogJmp", () => {
    test("(10, 85, 30) -> 3", () => {
        expect(solution(10, 85, 30)).toBe(3);
    });
});
