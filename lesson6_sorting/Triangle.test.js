const solution = require("./Triangle");

describe("test Triangle", () => {
    test("[10, 2, 5, 1, 8, 20] -> 1", () => {
        expect(solution([10, 2, 5, 1, 8, 20])).toBe(1);
    });
    test("[10, 50, 5, 1] -> 0", () => {
        expect(solution([10, 50, 5, 1])).toBe(0);
    });
    test("[1, 1, 1, 1, 5, 5, 5] -> 1", () => {
        expect(solution([1, 1, 1, 1, 5, 5, 5])).toBe(1);
    });
});
