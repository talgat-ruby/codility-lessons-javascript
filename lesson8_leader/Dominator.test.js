const solution = require("./Dominator");

describe("test Dominator", () => {
    test("[3, 4, 3, 2, 3, -1, 3, 3] -> 3", () => {
        expect([0, 2, 4, 6, 7]).toContain(solution([3, 4, 3, 2, 3, -1, 3, 3]));
    });
    test("[2147483647] -> 0", () => {
        expect([0]).toContain(solution([2147483647]));
    });
    test("[2, 1, 1, 3] -> -1", () => {
        expect([-1]).toContain(solution([2, 1, 1, 3]));
    });
});
