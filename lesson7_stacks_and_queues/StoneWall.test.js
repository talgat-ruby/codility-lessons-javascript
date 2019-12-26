const solution = require("./StoneWall");

describe("test StoneWall", () => {
    test("[8, 8, 5, 7, 9, 8, 7, 4, 8] -> 7", () => {
        expect(solution([8, 8, 5, 7, 9, 8, 7, 4, 8])).toBe(7);
    });
    test("[2, 5, 1, 4, 6, 7, 9, 10, 1] -> 8", () => {
        expect(solution([2, 5, 1, 4, 6, 7, 9, 10, 1])).toBe(8);
    });
});
