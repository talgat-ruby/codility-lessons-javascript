const solution = require("./CountDiv");

describe("test CountDiv", () => {
    test("(6, 11, 2) -> 3", () => {
        expect(solution(6, 11, 2)).toBe(3);
    });
});
