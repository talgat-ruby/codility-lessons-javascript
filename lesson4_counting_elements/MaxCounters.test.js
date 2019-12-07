const solution = require("./MaxCounters");

describe("test MaxCounters", () => {
    test("(5, [3, 4, 4, 6, 1, 4, 4]) -> [3, 2, 2, 4, 2]", () => {
        expect(solution(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2]);
    });
});
