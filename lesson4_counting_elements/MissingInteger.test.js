const solution = require("./MissingInteger");

describe("test  MissingInteger", () => {
    test("[1, 3, 6, 4, 1, 2] -> 5", () => {
        expect(solution([1, 3, 6, 4, 1, 2])).toBe(5);
    });
    test("[1, 2, 3] -> 4", () => {
        expect(solution([1, 2, 3])).toBe(4);
    });
    test("[−1, −3] -> 1", () => {
        expect(solution([-1, -3])).toBe(1);
    });
});
