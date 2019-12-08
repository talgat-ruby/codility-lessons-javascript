const solution = require("./Distinct");

describe("test Distinct", () => {
    test("[2, 1, 1, 2, 3, 1] -> 3", () => {
        expect(solution([2, 1, 1, 2, 3, 1])).toBe(3);
    });
});
