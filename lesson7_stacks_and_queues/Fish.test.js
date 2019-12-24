const solution = require("./Fish");

describe("test Fish", () => {
    test("([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]) -> 2", () => {
        expect(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])).toBe(2);
    });
});
