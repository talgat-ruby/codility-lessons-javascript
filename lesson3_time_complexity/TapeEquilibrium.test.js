const solution = require("./TapeEquilibrium");

describe("test TapeEquilibrium", () => {
    test("[3, 1, 2, 4, 3] -> 1", () => {
        expect(solution([3, 1, 2, 4, 3])).toBe(1);
    });
});
