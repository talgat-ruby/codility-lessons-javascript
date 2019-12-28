const solution = require("./EquiLeader");

describe("test EquiLeader", () => {
    test("[4, 3, 4, 4, 4, 2] -> 2", () => {
        expect(solution([4, 3, 4, 4, 4, 2])).toBe(2);
    });
    test("[1, 2, 1, 1, 2, 1] -> 3", () => {
        expect(solution([1, 2, 1, 1, 2, 1])).toBe(3);
    });
});
