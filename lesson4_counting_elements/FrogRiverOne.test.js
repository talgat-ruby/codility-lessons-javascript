const solution = require("./FrogRiverOne");

describe("test FrogRiverOne", () => {
    test("(5, [1, 3, 1, 4, 2, 3, 5, 4]) -> 6", () => {
        expect(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6);
    });
});
