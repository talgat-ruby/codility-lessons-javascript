const solution = require("./MinAvgTwoSlice");

describe("test MinAvgTwoSlice", () => {
    test("[4, 2, 2, 5, 1, 5, 8] -> 1", () => {
        expect(solution([4, 2, 2, 5, 1, 5, 8])).toBe(1);
    });
    test("[5, 5, 11, 1] -> 0", () => {
        expect(solution([5, 5, 11, 1])).toBe(0);
    });
});
