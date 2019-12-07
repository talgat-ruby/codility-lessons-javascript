const solution = require("./PermCheck");

describe("test  PermCheck", () => {
    test("[4, 1, 3, 2] -> 1", () => {
        expect(solution([4, 1, 3, 2])).toBe(1);
    });
    test("[4, 1, 3] -> 0", () => {
        expect(solution([4, 1, 3])).toBe(0);
    });
});
